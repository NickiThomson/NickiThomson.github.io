//app.js

var app = angular.module('nickiApp', ['ngRoute','ui.bootstrap', 'ui.bootstrap.carousel', 'mgcrea.bootstrap.affix']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/', {
    templateUrl: '/../views/main.html',
  })
  .when('/resume', {
    templateUrl: '/../views/resume.html',
    controller: 'resumeController'
  })
  .when('/projects', {
  	templateUrl: '/../views/projects.html',
    controller: 'resumeController'
  })
  .when('/bio',{
  	templateUrl: '/../views/bio.html'
  });
 });

app.run(function($rootScope, $location, $anchorScroll, $routeParams) {
  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    $location.hash($routeParams.scrollTo);
    $anchorScroll();  
  });
});


app.controller('carouselController', function($scope){
	  $scope.myInterval = 5000;
	  var numSlides = 3;
	  var slides = $scope.slides = [];
	  $scope.addSlide = function() {
	    slides.push({
	      image: ['files/photos/swarmbotOnCourse.jpg', 'files/photos/aoii.jpg', 'files/photos/meanGirl.jpg'][slides.length % numSlides],
	      text: ['Junior Design Project - Swarmbots', 'Proud member of Alpha Omicron Pi', 'Sumo-robot "Mean Girl"'][slides.length % numSlides]
	    });
	  };
	  for (var i=0; i<numSlides; i++) {
	    $scope.addSlide();
	  }
});

app.controller('bioController', function($scope){
  $scope.bioText = {
    content: [
    "Nicki Thomson is currently a Senior at Tufts University studying Computer Engineering, (which for those who don’t know, by the Tufts curriculum, is what you get when Electrical Engineering and Computer Science get together and have a baby). On campus she is involved with the Tufts Opera Ensemble, Alpha Omicron Pi, and she is a TA for Introduction to Computer Science. After her Senior year Nicki will be staying at Tufts for an additional year in order to get her Master’s degree in Electrical Engineering.",
  "Nicki spent last summer as a Software Engineer Intern at Microsoft on the Azure SQL DB Management Service team. During her internship Nicki learned C# and also learned about software design patterns, as well as learning about the lifecycles of servers. Nicki really enjoyed the vast amount of learning that came with this job, and hopes to be able to pursue another internship, and eventually a career, which allow will her to learn so much.",
  "Prior to Tufts, Nicki attended six years of boarding school on a cliffside in England, where she completed her A Levels in Physics, Mathematics and Theatre Studies. During her time in England she also completed her Duke of Edinburgh’s Gold award, which is achieved with a long time commitment to a sport, a skill and a service project, as well as including a residential trip, and an outdoor expedition.",
  "Nicki is currently looking for a firmware internship for the summer of 2016, as she is strongly considering a career in firmware development after she finishes grad school in 2017."
  ]};
});