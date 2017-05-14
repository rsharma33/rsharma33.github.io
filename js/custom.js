var app = angular.module('myApp', ['ngSanitize']);
app.controller('customersCtrl', function($scope, $http) {
    $http.get('json/portfolio.json').success(function(data) {
	    $scope.names = data;
	  });
});

app.controller('myCtrl', function($scope) {
    $scope.devname = "Rajesh Sharma";
    $scope.designation = "UI Lead with 9yrs of experience";
    $scope.address = "RZ-2, street no.6, Geetanjali park, West Sagarpur, New delhi-46";
    $scope.mobile = "+91-9818124314";
    $scope.email = "raajesh.sh19852007@gmail.com";
    $scope.portfoliosite = "https://rsharma33.github.io";
    $scope.resumelink = "resume/latest.doc";
    $scope.skypeid = "rajesh.sh1985";
    $scope.github_url = "https://github.com/rsharma33";
    $scope.linked_url="https://www.linkedin.com/in/rajesh-sharma-24133518";
});