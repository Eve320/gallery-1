pipeline { 
  agent any
  stages { 
    stage('clone repository') {
      steps{
      git 'https://github.com/Eve320/gallery-1'
    }
    }

    stage('Build') { 
         steps {
             sh 'npm install' 
            }
        }

    stage('Test') { 
        steps {
             sh 'npm test' 
            }
        }
   
   stage('Deploy to Heroku') {
       steps {
           withCredentials([usernameColonPassword(credentialsId: 'heroku1', variable: 'HEROKU_CREDENTIALS' )]){
            sh 'git push https://${HEROKU_CREDENTIALS}@git.heroku.com/sheltered-coast-66520.git master'
    }
  }
} 
    

}
}