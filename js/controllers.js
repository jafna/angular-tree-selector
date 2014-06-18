'use strict';

/* Controllers */
angular.module('myApp.controllers', [])
.controller('InterestListController', function($scope) {


  $scope.isSelected = function(interest){
    if(_.indexOf($scope.selectedInterests, interest)===-1){
      return false;
    }
    return true;
  };

  $scope.hasChildren = function(interest){
    if(interest.children !== undefined && interest.children.length > 0){
      return true;
    }
    return false;
  }

  $scope.removeInterest = function(interest){
    $scope.selectedInterests = _.without($scope.selectedInterests, interest);
  };

  $scope.addInterest = function(interest){
    if($scope.selectedInterests){
      if(!$scope.isSelected(interest)){
        $scope.selectedInterests.push(interest);
      }
    }else{
      $scope.selectedInterests = [interest];
    }
  };

  $scope.toggleInterest = function(parentInterest){
    if(parentInterest.showingChildren){
      parentInterest.showingChildren = false;
    }else{
      parentInterest.showingChildren = true;
    }
  };
});
