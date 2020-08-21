pipeline { 
  agent any
  stages { 
    stage('clone repository') {
      git'https://github.com/Eve320/gallery-1.git'
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