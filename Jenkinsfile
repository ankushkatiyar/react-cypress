pipeline {
    agent any
    stages {
        stage('Example Build') {
            steps {
                echo 'Hello World'
            }
        }
        stage('Example Deploy') {
            steps{
              echo "The build number is ${env.BUILD_NUMBER}"
            }
        }
    }
}