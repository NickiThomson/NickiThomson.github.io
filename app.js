//app.js

var app = angular.module('nickiApp', ['ngRoute','ui.bootstrap', 'ui.bootstrap.carousel']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/', {
    templateUrl: 'main.html',
  })
  .when('/resume', {
    templateUrl: 'resume.html',
    controller: 'resumeController'
  })
  .when('/projects', {
  	templateUrl: 'projects.html'
  })
  .when('/bio',{
  	templateUrl: 'bio.html'
  });
 });

app.controller('carouselController', function($scope){
	  $scope.myInterval = 5000;
	  var numSlides = 4;
	  var slides = $scope.slides = [];
	  $scope.addSlide = function() {
	    slides.push({
	      image: ['photos/opera.jpg', 'photos/aoii.jpg', 'photos/meanGirl.jpg', 'photos/ballroom.jpg'][slides.length % numSlides],
	      text: ['Oprea Ensemble Performance of "Captain Lovelock", April 2014', 'Proud member of Alpha Omicron Pi', 'Sumo-robot "mean girl"', 'Tufts Ballroom Competition 2013'][slides.length % numSlides]
	    });
	  };
	  for (var i=0; i<numSlides; i++) {
	    $scope.addSlide();
	  }
})