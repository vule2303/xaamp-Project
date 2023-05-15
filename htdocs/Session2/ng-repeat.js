var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope){
	
}).directive ("welcomeText", function(){
	
	var heading = "<h1>Welcome to the HeLL</h1>"

	return {
		template: heading
	}
		
});
