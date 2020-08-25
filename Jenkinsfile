pipeline { 
  agent any
  environment {

        EMAIL_BODY = 

       """

            <p>EXECUTED: Job <b>\'${env.JOB_NAME}:${env.BUILD_NUMBER})\'</b></p>

            <p>

            View console output at 

            "<a href="${env.BUILD_URL}">${env.JOB_NAME}:${env.BUILD_NUMBER}</a>"

            </p> 

            <p><i>(Build log is attached.)</i></p>

       """

        EMAIL_SUBJECT_SUCCESS = "Status: 'SUCCESS' -Job \'${env.JOB_NAME}:${env.BUILD_NUMBER}\'" 

        EMAIL_SUBJECT_FAILURE = "Status: 'FAILURE' -Job \'${env.JOB_NAME}:${env.BUILD_NUMBER}\'" 

        EMAIL_RECEPIENT = 'auroeve@gmail.com'

    }
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

  // stage('Publish'){
  //   slackSend color: "good", message: "Build successful: man_dancing: \n`${env.JOB_NAME} ${env.BUILD_NUMBER}` (<${env.BUILD_URL}|Open>) "
  
  
  // catch(error) {
  //   slackSend color: "danger", message: "Build failed: white_frowning_face: \n`${env.JOB_NAME} ${env.BUILD_NUMBER}` (<${env.BUILD_URL}|Open>)"

  //   throw error
  // }
  
    

}

post {
        success {
          slackSend color: "good", message: "Build successful: man_dancing: \n`${env.JOB_NAME} ${env.BUILD_NUMBER}` (<${env.BUILD_URL}|Open>) "
            emailext attachLog: true, 
                body: EMAIL_BODY, 

                subject: EMAIL_SUBJECT_SUCCESS,

                to: EMAIL_RECEPIENT
        }

        failure {
          slackSend color: "danger", message: "Build failed: white_frowning_face: \n`${env.JOB_NAME} ${env.BUILD_NUMBER}` (<${env.BUILD_URL}|Open>)"
            emailext attachLog: true, 
                body: EMAIL_BODY, 

                subject: EMAIL_SUBJECT_FAILURE, 

                to: EMAIL_RECEPIENT
        }

        always {
          slackSend color: "warning", message: "Started `${env.JOB_NAME} ${env.BUILD_NUMBER}`\n\n_The changes:_\n${lastChange}"
        }
    }


}