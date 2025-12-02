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
