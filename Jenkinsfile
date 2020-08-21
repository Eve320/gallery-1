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
   
   stage('Deploy to Heroku') {
  steps {
    withCredentials([usernameColonPassword(credentialsId: 'heroku', variable: 'HEROKU_CREDENTIALS' )]){
      sh 'git push https://${HEROKU_CREDENTIALS}@git.heroku.com/nameless-plains-05775.git master'
    }
  }
} 
    

}
}