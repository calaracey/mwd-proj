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
angular.module('app').controller('HomeController', ['DataService', function (DataService) {
  const $ctrl = this;
    
  // StoryView binding
  this.storyList = [];
  DataService.getData('data.json').then(function(result) {
    $ctrl.storyList = result.data["story"];
    console.log($ctrl.storyList);
  });

  // StorySubmit binding
  this.submission = ""; 
  this.submitted = false;
  this.submit = function (event) {
    //In the future we will perform a POST on submit() when there is a real backend
    $ctrl.submission = event.submission;
    $ctrl.submitted = true;
    console.log(event.submission);
    $ctrl.storyList.push($ctrl.submission);
  };
    
}]);
/*--------------------- Home Component ---------------------*/

/*--------------------- StoryView Component ---------------------*/

const storyView = {
    templateUrl: './story-view/story-view.html',
    controller: 'StoryViewController',
    bindings: {
        story: '<'
    }
}

// StoryView Component with Routing (Routed / Stateful)
angular.module('app').component('storyView', storyView);

// StoryView Controller
angular.module('app').controller('StoryViewController', function(){
});
/*--------------------- StoryView Component ---------------------*/

/*--------------------- StorySubmit Component ---------------------*/
const storySubmit = {
    templateUrl: './story-submit/story-submit.html',
    controller: 'StorySubmitController',
    bindings: {
      submission: '<',
      onSubmit: '&'
    }
}

// StorySubmit Component with Routing (Routed / Stateful)
angular.module('app').component('storySubmit', storySubmit);

// StorySubmit Controller with dependency injection using the array method
angular.module('app').controller('StorySubmitController', function () {
  const $ctrl = this;

  // Data up and down
  $ctrl.$onChanges = function (changes) {
    if (changes.submission){
      $ctrl.submission = angular.copy($ctrl.submission);
    }
  };
  $ctrl.updateSubmission = function () {
    console.log('invoke fxn')
    $ctrl.onSubmit({
      $event: {
        submission: $ctrl.submission
      }
    });
    $ctrl.submission = "";
  };
});
/*--------------------- StorySubmit Component ---------------------*/

/*--------------------- StoryVote Component ---------------------*/
const storyVote = {
    templateUrl: './story-vote/story-vote.html',
    controller: 'StoryVoteController'
}

// StoryVote Component with Routing (Routed / Stateful)
angular.module('app').component('storyVote', storyVote);

// StoryVote Controller with dependency injection using the array method
angular.module('app').controller('StoryVoteController', ['DataService', function (DataService) {
  console.log("into story vote controller");
  const $ctrl = this;
  this.submissionList = []; 
  this.submissionIndex = 0;
  this.currentSubmission = "Hello";
  this.init = function() {
    DataService.getData('data.json').then(function(result) {
      $ctrl.submissionList = result.data.submissions;
      $ctrl.currentSubmission = $ctrl.submissionList[$ctrl.submissionIndex];
      console.log("Initialization succeeded");
      console.log($ctrl.currentSubmission);
    });
  };
  this.next = function() {
    $ctrl.submissionIndex ++;
    $ctrl.currentSubmission = $ctrl.submissionList[$ctrl.submissionIndex];
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