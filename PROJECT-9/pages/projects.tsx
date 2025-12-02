import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

const projects = [
 

  
  {
  title: "DevSecOps Pipeline | Jenkins, Terraform,Ansible, Docker, Trivy, AWS",
  description:
    "Designed a complete DevSecOps pipeline integrating CI/CD, Infrastructure as Code, container security, and monitoring. Automated AWS provisioning using Terraform, managed configuration via Ansible (secured with Ansible Vault), used Jenkins for CI/CD of a Flask-based containerized app, integrated Trivy for security scanning, and enabled real-time monitoring and alerting through Prometheus and Grafana.",
  technologies: ["Jenkins", "Terraform", "Ansible", "Docker", "Trivy", "AWS-EC2","AWS-ECR", "Prometheus", "Grafana"],
  github: "https://github.com/ritesh355/devsecops-pipeline-with-ansible-terraform", // replace with specific repo if created
  blog: "https://dev.to/ritesh355/devsecops-pipeline-jenkins-terraform-docker-trivy-aws-3ien", // replace with detailed project blog if available
},
{
  title: "Full-Stack DevOps Automation Project | Next.js, Docker, AWS, GitHub Actions, Prometheus,Grafana",
  description:
    "Designed and implemented an end-to-end DevOps pipeline for a Next.js portfolio site. Leveraged GitHub Actions for CI/CD, Docker for containerization, and AWS for cloud hosting. Applied automation best practices to deploy services with high availability and scalability. Integrated Prometheus and Grafana for metrics collection, monitoring, and alerting.",
  technologies: ["Next.js", "Docker", "GitHub Actions", "AWS-EC2", "Cloudfront", "Prometheus", "Grafana"],
  github: "https://github.com/ritesh355/portfolio", // replace with specific portfolio repo if available
  blog: "https://dev.to/ritesh355/building-deploying-my-nextjs-portfolio-with-docker-aws-and-cicd-54cf", // replace with a dedicated blog link if you write one
},
{
  title: "Serverless CI/CD Pipeline | AWS Lambda, CodePipeline, CodeBuild, S3, CloudFront",
  description:
    "Built a fully serverless CI/CD pipeline that automates code deployment from GitHub to S3 using AWS managed services. Implemented an event-driven workflow where GitHub webhooks trigger API Gateway, which invokes Lambda to start CodePipeline and CodeBuild. The final build is deployed to S3 and distributed globally via CloudFront, with monitoring and access management handled through CloudWatch and IAM.",
  technologies: [
    "AWS Lambda",
    "API Gateway",
    "CodePipeline",
    "CodeBuild",
    "Amazon S3",
    "CloudFront",
    "CloudWatch",
    "IAM",
    "GitHub"
  ],
  github: "https://github.com/ritesh355/serverless-ci-cd-pipeline", // replace with your actual repo link
  blog: "https://dev.to/ritesh355/serverless-cicd-pipeline-with-aws-lambda-and-github", // optional if you write a blog about it
},

 
  {
  title: "Jenkins CI/CD Pipeline with Docker & Node.js",
  description:
    "A Node.js app deployed with a Jenkins CI/CD pipeline on AWS EC2, using Docker for containerization and automated Docker Hub pushes.",
  technologies: ["Node.js", "Jenkins","Webhook", "Docker", "AWS EC2", "Docker Hub"],
  github: "https://github.com/ritesh355/Docker-Jenkins-app",
  blog: "https://dev.to/ritesh355/devops-project-jenkins-cicd-pipeline-with-docker-nodejs-2n16", // replace with exact blog link if you write one

  },
  
   {
  "title": "AWS CI/CD Pipeline with Node.js & EC2",
  "description": "A Node.js application deployed on AWS EC2 using a fully automated CI/CD pipeline with AWS CodePipeline, CodeBuild, and CodeDeploy. Integrated with GitHub for source control and Amazon S3 for artifact storage, the pipeline automates building and deploying the app, overcoming challenges like EACCES permission errors during deployment.",
  "technologies": ["Node.js", "AWS CodePipeline", "AWS CodeBuild", "AWS CodeDeploy", "AWS EC2", "Amazon S3", "GitHub", "Webhook"],
  "github": "https://github.com/ritesh355/my-aws-cicd-app",
  "blog": "https://dev.to/ritesh355/aws-cicd-nodejs-application-using-aws-codepipeline-codebuild-and-codedeploy-1p5j" // Replace with actual blog link if you write one
},

  {
  title: "Static Website Hosting with AWS S3 + CloudFront + CI/CD",
  description:
    "A static website hosted on AWS S3 with CloudFront as CDN and automated deployment via GitHub Actions.",
  technologies: ["AWS S3", "CloudFront", "GitHub Actions", "CI/CD"],
  github: "https://github.com/ritesh355/MY-GALLERY-PROJECT", // replace with your repo link
  blog: "https://dev.to/ritesh355/devops-and-cloud-project-static-website-hosting-with-aws-s3-cloudfront-cicd-5hhe", // replace with your blog link if you write one
  },
 
 

  {
  title: "CI/CD Pipeline for Web App",
  description:
    "Built a fully automated pipeline using Jenkins, Docker, and Kubernetes for seamless deployments.",
  technologies: ["Jenkins", "Docker", "Kubernetes", "AWS"],
  github: "https://github.com/ritesh355/flask-ci-cd-demo",
  blog: "https://ritesh-devops.hashnode.dev/day-40-cicd-with-flask-docker-github-actions-100daysofdevops",
},
{
  title: "Flask + AWS DynamoDB CRUD App",
  description:
    "Developed a Flask-based web application integrated with AWS DynamoDB for performing full CRUD operations. Containerized the app using Docker and implemented CI/CD using GitHub Actions. The project demonstrates cloud-native development, AWS SDK (boto3) integration, and scalable backend design following best DevOps practices.",
  technologies: ["Flask", "AWS-DynamoDB", "Docker", "GitHub Actions", "Python", "Boto3"],
  github: "https://github.com/ritesh355/aws-dynamodb-flask-app",
  blog: "" // replace if blog link changes
},


  {
    title: "Weather App Deployment",
    description:
      "A weather app with Flask backend, Docker, and Nginx reverse proxy deployment.",
    technologies: ["Flask", "Docker", "Nginx", "AWS"],
    github: "https://github.com/ritesh355/weather-app",
    blog: "https://ritesh-devops.hashnode.dev/weather-app",
  },
  
];

export default function ProjectsPage() {
  return (
    <div>
      <Navbar />
      <main className="pt-20 pb-20 max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">🚀 My Projects</h1>

        {/* Grid with 2 columns */}
        <div className="grid gap-8 sm:grid-cols-1">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

