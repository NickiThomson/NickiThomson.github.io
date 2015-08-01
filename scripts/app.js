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
	  var numSlides = 4;
	  var slides = $scope.slides = [];
	  $scope.addSlide = function() {
	    slides.push({
	      image: ['files/photos/opera.jpg', 'files/photos/aoii.jpg', 'files/photos/meanGirl.jpg', 'files/photos/ballroom.jpg'][slides.length % numSlides],
	      text: ['Oprea Ensemble Performance of "Captain Lovelock", April 2014', 'Proud member of Alpha Omicron Pi', 'Sumo-robot "mean girl"', 'Tufts Ballroom Competition 2013'][slides.length % numSlides]
	    });
	  };
	  for (var i=0; i<numSlides; i++) {
	    $scope.addSlide();
	  }
});

app.controller('bioController', function($scope){
  $scope.bioText = {
    content: [
    "Nicki Thomson is currently a junior at Tufts University studying Computer Engineering, (which for those who don’t know, by the Tufts curriculum, is what you get when Electrical Engineering and Computer Science get together and have a baby). Additionally she is a member of a variety of campus groups, including Tufts Robotics Club, The Tufts Opera Ensemble, Alpha Omicron Pi, and Nicki is the Social Coordinator of the Tufts Ballroom Team.",
  "Nicki spent last summer as a software developer intern at IBM, helping to redesign the Emptoris Suite product’s log in workflow. This helped her to gain new web programming skills such as Bootstrap and AngularJS, as well as develop her existing ones. Nicki really enjoyed the vast amount of learning that came with this job, and hopes to be able to pursue more internships which allow her to learn so much.",
  "Prior to Tufts, Nicki attended six years of boarding school on a cliffside in England, where she completed her A Levels in Physics, Mathematics and Theatre Studies. During her time in England she also completed her Duke of Edinburgh’s Gold award, which is achieved with a long time commitment to a sport, a skill and a service project, as well as including a residential trip, and an outdoor expedition.",
  "Nicki is currently looking for summer employment for the summer of 2015, she hopes to gain a position which will give her more insight into Computer Engineering, and helps to give her an idea what she might like to study at grad school after her graduation in 2016."
  ]};
});