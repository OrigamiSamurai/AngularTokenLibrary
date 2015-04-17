'use strict';

/* Controllers */

var tokenLibraryControllers = angular.module('tokenLibraryControllers', []);

tokenLibraryControllers.controller('CreatureListCtrl', ['$scope', 'FileUploader', function($scope, FileUploader) {

    $scope.uploader = new FileUploader({
      url: 'ImageUpload.php'
    });


	$scope.newCreatureImageInputMode = 'url';
	var newCreatureImageUrl = $scope.newCreatureImageUrl = '';

		/* Creatures */

    var creatures = $scope.creatures = [
    	{'name' : 'Darth Vader',
    		'imageUrl' : 'http://paperandsteel.net/images/darth-vader-portrait.jpg'},
    	{'name' : 'Darth Vader 2',
    		'imageUrl' : 'http://paperandsteel.net/images/darth-vader-portrait.jpg'}
    ];

   
    
/*
    $scope.uploadNewCreatureImage = function() {
    	// TODO: use an angular-centric file upload

    	var file = document.querySelector("#imageFile").files[0];
	    var form = document.querySelector('#imageUploadForm');
	    var formdata = new FormData(form);
	    formdata.append("imageFile", file);

    	// upload the file
    	$http.post("ImageUpload.php", formdata).success(
    		function(data,status,headers, config){
    			//
    		}).
    		error(
    			function(data,status,headers, config){
    			//
    		});


    	var file = document.querySelector("#imageFile").files[0];
	    var form = document.querySelector('#imageUploadForm');
	    var formdata = new FormData(form);
	    formdata.append("imageFile", file);

	    var ajax = new XMLHttpRequest();
	    // use bind to ensure access to "this" context - to use setBaseImagePreviewSrc from the View
	    ajax.onreadystatechange = 
	    	function() {
		        if (ajax.readyState == 4 && ajax.status == 200)
		        {
		            var responseData = JSON.parse(ajax.responseText);
		            newCreatureImageUrl = responseData.ImageUrl;
		        }
		    };
	    ajax.open("POST", "ImageUpload.php");
	    ajax.send(formdata);


    };
*/


    $scope.addNewCreature = function(name, imageUrl) {
    	creatures.push({
    		'name' : name,
    		'imageUrl' : imageUrl
    	})
    };

    /* Tokens */

    var tokens = $scope.tokens = [{'name' : 'Darth Vader',
    		'imageUrl' : 'http://paperandsteel.net/images/darth-vader-portrait.jpg'}];

    $scope.addToken = function(creature) {
    	tokens.push({
    		'name' : creature.name,
    		'imageUrl' : creature.imageUrl
    	})
    };

    $scope.removeToken = function(tokenIndex) {
    	tokens.splice(tokenIndex, 1);
    }

  }]);