pipeline {
    agent any

    environment {
        AWS_REGION = 'us-east-1'
        ECR_REPO = '772954893641.dkr.ecr.us-east-1.amazonaws.com/flask-app'
        IMAGE_TAG = "build-${BUILD_NUMBER}"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/ritesh355/devsecops-pipeline-with-ansible-terraform.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    echo "Building Docker image..."
                    sh 'docker build -t $ECR_REPO:$IMAGE_TAG .'
                }
            }
        }

        stage('Trivy Security Scan') {
            steps {
                script {
                    echo "Scanning image with Trivy..."
                    sh 'trivy image --exit-code 0 --severity LOW,MEDIUM $ECR_REPO:$IMAGE_TAG'
                    sh 'trivy image --exit-code 1 --severity HIGH,CRITICAL $ECR_REPO:$IMAGE_TAG || true'
                }
            }
        }

        stage('Push to AWS ECR') {
            steps {
                withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', credentialsId: 'aws-credentials']]) {
                    script {
                        sh '''
                            aws ecr get-login-password --region $AWS_REGION \
                                | docker login --username AWS --password-stdin $ECR_REPO
                            docker push $ECR_REPO:$IMAGE_TAG
                        '''
                    }
                }
            }
        }

        stage('Deploy with Ansible') {
            steps {
                sshagent(credentials: ['ansible-ec2-key']) {
                    sh '''
                        cd ansible
                        ansible-playbook -i inventory.ini playbook.yml --limit flask_server
                    '''
                }
            }
        }
    }
             

    post {
        success {
            echo '✅ Deployment completed successfully!'
        }
        failure {
            echo '❌ Pipeline failed. Please check the Jenkins logs.'
        }
    }
}
