pipeline{
    agent any
    stages{
        stage('Limpiar Wokspace'){
            steps{
                cleanWs()
            }
        }
        stage('Clonar repositorio'){
            steps{
                 withCredentials([usernamePassword(credentialsId : "GITHUB_CREDENTIALS", usernameVariable : "GITHUB_USER", passwordVariable : "GITHUB_PASS")]){
                     script{
                         sh "git clone https://${GITHUB_USER}:${GITHUB_PASS}@github.com/HectorTelloS/demo-app-node.git"
                     }
                 }
                
            }
        }
        stage('construir imagen'){
            steps{
                sh 'docker build -t demo-app-node .'
            }
        }
        stage('Despliegue'){
            steps{
                sh 'docker run -d -p 3001:3000 -name demo-app-node-container demo-app-node'
                echo 'Aplicación de node correndo a traves de localhost:3001 '
            }
        }
    }
}