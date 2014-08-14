(function (){
  "use strict";

  angular.module("app").controller("songsCtrl", function($scope, $http){

    $scope.silly = "Something Silly";
    $http.get('/api/songs').then(function(response){
      console.log(response.data);
      $scope.songs = response.data;
    });
  });

})();
