var app=angular.module('myApp',[]);
    app.controller('MainController',function($scope){
    $scope.submit=function(){
     var data=$scope.user;
      $scope.savedJSON = angular.toJson($scope.user,true);
var blob = new Blob([$scope.savedJSON],{
   type: "application/json;charset=utf-8;"
});
var downloadLink = document.createElement('a');
downloadLink.setAttribute('download', 'sampleJSON.txt');
downloadLink.setAttribute('href', window.URL.createObjectURL(blob));
downloadLink.click();
    	}
    
});
  