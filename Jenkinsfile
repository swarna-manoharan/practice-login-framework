pipeline {
    agent any

    tools {
        nodejs 'node'
    }

    environment {
        CI = 'true'
        PRACTICE_USERNAME = credentials('practice-username')
        PRACTICE_PASSWORD = credentials('practice-password')
    }

    options {
        timeout(time: 30, unit: 'MINUTES')
        disableConcurrentBuilds()
    }

    stages {
        stage('Install deps') {
            steps { bat 'npm ci' }
        }
        stage('Install browsers') {
            steps { bat 'npx playwright install' }
        }
        stage('Test') {
            steps { bat 'npx playwright test' }
        }
    }

    post {
        always {
            junit testResults: 'test-results/junit.xml', allowEmptyResults: true
            publishHTML(target: [
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Report',
                keepAll: true,
                alwaysLinkToLastBuild: true
            ])
            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
        }
    }
}