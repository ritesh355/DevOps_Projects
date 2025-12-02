provider "aws" {
  region = "us-east-1"
}

# ---------------------------
# VPC & Networking
# ---------------------------
resource "aws_vpc" "devops_vpc" {
  cidr_block = "10.0.0.0/16"
  tags = { Name = "devops-vpc" }
}

resource "aws_subnet" "devops_subnet" {
  vpc_id                  = aws_vpc.devops_vpc.id
  cidr_block              = "10.0.1.0/24"
  map_public_ip_on_launch = true
  availability_zone       = "us-east-1a"
  tags = { Name = "devops-subnet" }
}

resource "aws_internet_gateway" "devops_igw" {
  vpc_id = aws_vpc.devops_vpc.id
  tags = { Name = "devops-igw" }
}

resource "aws_route_table" "devops_rt" {
  vpc_id = aws_vpc.devops_vpc.id
  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.devops_igw.id
  }
  tags = { Name = "devops-rt" }
}

resource "aws_route_table_association" "devops_rta" {
  subnet_id      = aws_subnet.devops_subnet.id
  route_table_id = aws_route_table.devops_rt.id
}

# ---------------------------
# Security Group
# ---------------------------
resource "aws_security_group" "devops_sg" {
  name        = "devops-sg"
  description = "Allow traffic for Flask, Jenkins, SonarQube, and SSH"
  vpc_id      = aws_vpc.devops_vpc.id

  ingress = [
    for port in [22, 5000, 8080, 9000] : {
      description      = "Allow traffic"
      from_port        = port
      to_port          = port
      protocol         = "tcp"
      cidr_blocks      = ["0.0.0.0/0"]
      ipv6_cidr_blocks = []
      prefix_list_ids  = []
      security_groups  = []
      self             = false
    }
  ]

  egress = [{
    description      = "Allow all outbound"
    from_port        = 0
    to_port          = 0
    protocol         = "-1"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = []
    prefix_list_ids  = []
    security_groups  = []
    self             = false
  }]

  tags = { Name = "devops-sg" }
}

# ---------------------------
# IAM Role for ECR Access
# ---------------------------
resource "aws_iam_role" "ec2_role" {
  name = "EC2-ECR-Access-Role"
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action    = "sts:AssumeRole"
      Principal = { Service = "ec2.amazonaws.com" }
      Effect    = "Allow"
    }]
  })
}

resource "aws_iam_role_policy_attachment" "ecr_access" {
  role       = aws_iam_role.ec2_role.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly"
}

resource "aws_iam_instance_profile" "ec2_instance_profile" {
  name = "EC2-ECR-Instance-Profile"
  role = aws_iam_role.ec2_role.name
}

# ---------------------------
# EC2 Instances
# ---------------------------
data "aws_ami" "ubuntu" {
  most_recent = true
  owners      = ["099720109477"]

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd-gp3/ubuntu-noble-24.04-amd64-server-*"]
  }
}

resource "aws_instance" "flask_app" {
  ami                    = data.aws_ami.ubuntu.id
  instance_type          = "t3.micro"
  key_name               = "ec2_key"
  subnet_id              = aws_subnet.devops_subnet.id
  vpc_security_group_ids = [aws_security_group.devops_sg.id]
  iam_instance_profile   = aws_iam_instance_profile.ec2_instance_profile.name

  tags = { Name = "flask-app-server" }
}

resource "aws_instance" "jenkins_server" {
  ami                    = data.aws_ami.ubuntu.id
  instance_type          = "t3.micro"
  key_name               = "ec2_key"
  subnet_id              = aws_subnet.devops_subnet.id
  vpc_security_group_ids = [aws_security_group.devops_sg.id]
  iam_instance_profile   = aws_iam_instance_profile.ec2_instance_profile.name

  tags = { Name = "jenkins-server" }
}
# 🧱 Monitoring (Prometheus + Grafana)
resource "aws_instance" "monitoring_server" {
  ami                    = data.aws_ami.ubuntu.id
  instance_type          = "t3.micro"
  key_name               = "ec2_key"
  subnet_id              = aws_subnet.devops_subnet.id
  vpc_security_group_ids = [aws_security_group.devops_sg.id]
  iam_instance_profile   = aws_iam_instance_profile.ec2_instance_profile.name
  tags = { Name = "monitoring_server" }
}


# ---------------------------
# Outputs
# ---------------------------
output "flask_app_public_ip" {
  value = aws_instance.flask_app.public_ip
}

output "jenkins_public_ip" {
  value = aws_instance.jenkins_server.public_ip
}

output "sonarqube_public_ip" {
  value = aws_instance.monitoring_server.public_ip
}

