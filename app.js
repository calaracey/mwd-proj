angular.module('app', ['ngMaterial', 'ngMessages']);

/*--------------------- Navigation Component ---------------------*/
const navigation = {
    templateUrl: './navigation/navigation.html',
    controller: 'NavigationController'
}

// Home Component with Routing (Routed / Stateful)
angular.module('app').component('navigation', navigation);

// Home Controller with dependency injection using the array method
angular.module('app').controller('NavigationController', function () {
  this.loggedIn = false;
});
/*--------------------- Navigation Component ---------------------*/
/*--------------------- Home Component ---------------------*/
const home = {
    templateUrl: './home/home.html',
    controller: 'HomeController'
}

// Home Component with Routing (Routed / Stateful)
angular.module('app').component('home', home);

// Home Controller with dependency injection using the array method
angular.module('app').controller('HomeController', function () {

});
/*--------------------- Home Component ---------------------*/
/*--------------------- StoryView Component ---------------------*/
const storyView = {
    templateUrl: './story-view/story-view.html',
    controller: 'StoryViewController'
}

// StoryView Component with Routing (Routed / Stateful)
angular.module('app').component('storyView', storyView);

// StoryView Controller with dependency injection using the array method
angular.module('app').controller('StoryViewController', ['DataService', function (DataService) {
  const $ctrl = this;
  this.storyList = [];
  DataService.getData('data.json').then(function(result) {
    $ctrl.storyList = result.data.story;
    console.log(result.data);
    console.log(this.storyList);
  });

}]);
/*--------------------- StoryView Component ---------------------*/

/*--------------------- StorySubmit Component ---------------------*/
const storySubmit = {
    templateUrl: './story-submit/story-submit.html',
    controller: 'StorySubmitController'
}

// StoryView Component with Routing (Routed / Stateful)
angular.module('app').component('storySubmit', storySubmit);

// StoryView Controller with dependency injection using the array method
angular.module('app').controller('StorySubmitController', function () {
  this.userSubmission = ""; 
  this.submitted = false;
  this.submit = function() {
    //In the future we will perform a POST on submit() when there is a real backend
    this.userSubmission = "";
    this.submitted = true;
  };

}]);
/*--------------------- StorySubmit Component ---------------------*/

/*--------------------- StoryVote Component ---------------------*/
const storyVote = {
    templateUrl: './story-vote/story-vote.html',
    controller: 'StoryVoteController'
}

// StoryView Component with Routing (Routed / Stateful)
angular.module('app').component('storyVote', storyVote);

// StoryView Controller with dependency injection using the array method
angular.module('app').controller('StoryVoteController', function () {
  this.submissionList = []; 
  this.submitted = false;
  this.submit = function() {
    //In the future we will perform a POST on submit() when there is a real backend
    this.userSubmission = "";
    this.submitted = true;
  };

}]);
/*--------------------- StoryVote Component ---------------------*/

/*--------------------- DataService ---------------------*/
function DataService($http) {
  // Services are Singletons
    // Properties
    // Methods
    this.getData = getData;
    // Function to get data from 3rd party api

    function getData(url) {
        return $http({
            method: 'GET',
            url: url 
        });
    }

    // Simple GET request example:
    //$http({
    //  method: 'GET',
    //  url: '/someUrl'
    //}).then(function successCallback(response) {
    //    // this callback will be called asynchronously
    //    // when the response is available
    //  }, function errorCallback(response) {
    //    // called asynchronously if an error occurs
    //    // or server returns response with an error status.
    //  });
}
DataService.$inject = ['$http'];
angular.module('app').service('DataService', DataService);



/*--------------------- Data Service ---------------------*/