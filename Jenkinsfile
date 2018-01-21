node {
	
	stage('Git') {
		git 'https://github.com/gustavoapolinario/microservices-node-example-todo-frontend.git'
	}
	stage('Build') {
		sh 'npm install'
		sh 'bower install'
	}
	stage('Test') {
		sh 'npm test'
	}
}