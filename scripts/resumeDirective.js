var app = angular.module('nickiApp');
  
app.directive('ntResumeList', function() {
    return {
      restrict: 'E',
      scope: {
        category: '=',
      },
      templateUrl: '/../views/resumeListDirective.html'
    };
  });

app.directive('ntResumeSection', function(){
    return {
      restrict: 'E',
      scope: {
        title: '=',
      },
      templateUrl: '/../views/resumeSectionDirective.html'
    };	
});