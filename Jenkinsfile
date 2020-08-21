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
   
    stage('Tests') {
      echo 'testing'
    }

}
}