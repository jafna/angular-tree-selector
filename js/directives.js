'use strict';

/* Directives */


angular.module('myApp.directives', [])
.directive('listInterests', function(){
  return {
    templateUrl:'list-interests.html',
    restrict:'E',
    scope:true,
    link:function(scope, element, attrs){
      //lets parse the json data!
      var allInterests = dataResponse().data;
      scope.rootInterest = {name:"Browse interests", children:[]};
      _.forEach(allInterests, function(interest){
        var reducedPath = _.without(interest.path, interest.name);
        if(reducedPath.length === 0){
          scope.rootInterest.children.push(interest);
        }else{
          var parent = _.find(allInterests, function(intCandidate){
            return _.isEqual(intCandidate.path, reducedPath);
          });
          if(parent){
            if(!parent.children){
              parent.children = [];
            }
            parent.children.push(interest);
          }
        }
      });
    }
  };
});
