var app = angular.module('nickiApp');
	
app.controller('resumeController', function($scope){
		$scope.categories = {
			classes : {
				engineering: {
					title: "Engineering",
					items: [
						"Intro to Digital Logic Circuits",
						"Electronics 1",
						"Engineering Graphics",
						"Simple Robotics",
						"Intro to Electrical Systems",
						"Intro to Mechanics Statics and Dynamics"

					]
				},
				computerScience : {
					title: "Computer Science",
					items: [
						"Data structures",
						"Web Programming",
						"Discrete Mathematics",
						"Computational Theory"

					]
				},
				mathematics : {
					title : "Mathematics",
					items: [
						"Multivariable Calculus",
						"Differential Equations"
					]
				}
			},
			skills : {
				software: {
					title : "Software", 
					items : [
						"LTSPICE",
						"Solidworks",
						"Autodesk Inventor",
						"AutoCAD",
						"MathCAD"
					]
				},
				programmingLanguages : {
					title : "Programming Languages",
					items : [
						"MATLAB",
						"C++",
						"Visual Basic",
						"LabView"
					]
				},
				webProgramming : {
					title : "Web Programming",
					items : [
						"HTML",
						"CSS",
						"JavaScript",
						"Bootstrap",
						"AngularJS"
					]
				}
			}
		};

});