pipeline {
    agent any


    stages {
        stage('Install pnpm') {
            steps {
                sh 'npm install -g pnpm'
            }
        }
        stage('Install dependencies') {
            steps {
                sh 'pnpm install'
            }
        }
        stage('Run Cypress tests') {
            steps {
                sh 'npx cypress run --browser chrome'
            }
        }
    }
}
