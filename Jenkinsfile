pipeline {
    agent any

    stages {
        stage('Setup') {
            steps {
                bat 'npm install'
            }
        }
        stage('Test') {
            steps {
                bat 'npm run mocha'
            }
        }
        stage('Deploy') {
            steps {
                publishHTML([
            allowMissing: false,
            alwaysLinkToLastBuild: false,
            keepAll: false,
            reportDir: 'mochawesome-report',
            reportFiles: 'mochawesome.html',
            reportName: 'Ebac Reporter',
            reportTitles: '',
            useWrapperFileDirectly: true
        ])
            }
        }
    }
}