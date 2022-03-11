pipeline {
    agent any

    tools {dockerTool "docker"}

    stages {
        stage('Tests') {
            steps {
                sh 'docker --version'
            }
        }
    }
}
