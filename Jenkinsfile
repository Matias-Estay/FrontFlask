pipeline {
    agent 'any'
    tools { nodejs "nodejs" }
    stages {
        stage('Pull') {
            steps {
                dir('C:\\Aplicaciones\\Apache24\\htdocs\\ScrapperWeb\\FrontFlask') {
                    bat "git config --global --add safe.directory C:/Aplicaciones/Apache24/htdocs/ScrapperWeb/FrontFlask"
                    bat "git pull"
                }
            }
        }
        stage('Install') {
            steps {
                dir('C:\\Aplicaciones\\Apache24\\htdocs\\ScrapperWeb\\FrontFlask') {
                    bat "npm install"
                }
            }
        }
        stage('build'){
            steps {
                dir('C:\\Aplicaciones\\Apache24\\htdocs\\ScrapperWeb\\FrontFlask') {
                    bat "npm run build"
                }
            }
        }
    }  
}