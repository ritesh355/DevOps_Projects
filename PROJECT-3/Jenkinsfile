pipeline {
    agent any

    environment {
        HOST_PORT = '4000'
        IMAGE_NAME = 'ritesh355/docker-jenkins-app'   // Docker Hub repo
    }

    stages {
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/ritesh355/Docker-Jenkins-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t docker-jenkins-app:latest .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker stop docker-jenkins-app || true && docker rm docker-jenkins-app || true'
                sh "docker run -d --name docker-jenkins-app -p ${HOST_PORT}:3000 docker-jenkins-app:latest"
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh '''
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                        docker tag docker-jenkins-app:latest ${IMAGE_NAME}:${BUILD_NUMBER}
                        docker tag docker-jenkins-app:latest ${IMAGE_NAME}:latest
                        docker push ${IMAGE_NAME}:${BUILD_NUMBER}
                        docker push ${IMAGE_NAME}:latest
                        docker logout
                    '''
                }
            }
        }
    }
}
