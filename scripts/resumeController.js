var app = angular.module('nickiApp');
	
app.controller('resumeController', function($scope){
	$scope.categories = {
		education : "Education",

		classes : {
			title : "Relevant Coursework",

			engineering: {
				title: "Engineering",
				items: [
					"Microprocessor Architecture And Applications",
					"Digital Logic Systems",
					"Linear Systems",
					"Electronics 1",
					"Electromagnetic Fields and Waves",
					"Probabilistic Systems Analysis",
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
				title : "Skills",
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
					"C++",
					"C#",
					"MATLAB",
					"Python",
					"Visual Basic",
					"LabView"
				]
			},
			webDevelopment : {
				title : "Web Development",
				items : [
					"HTML",
					"CSS",
					"JavaScript",
					"Bootstrap",
					"AngularJS"
				]
			}
		},
		projects : {
			title : "Projects"
		},
		experience : {
			title : "Experience"
		},
		awards : {
			title : "Awards"
		},
		activities : {
			title : "Activities/ Interests"
		}

	};
});