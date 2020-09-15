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

// Home Component with Routing (Routed / Stateful)
angular.module('app').component('storyView', storyView);

// Home Controller with dependency injection using the array method
angular.module('app').controller('StoryViewController', ['ExampleService', function (ExampleService) {
  this.storyList = ExampleService.getData('data.json').data.story;

}]);
/*--------------------- StoryView Component ---------------------*/

/*--------------------- Settings Component ---------------------*/
const settings = {
    templateUrl: '',
    controller: 'SettingsController'
}

// Settings Component with Routing (Routed / Stateful)
angular.module('app').component('settings', settings)

// Settings Controller with dependency injection using $inject method
function SettingsController(ExampleService) {

}
SettingsController.$inject = ['ExampleService'];
angular.module('app').controller('SettingsController', SettingsController);
/*--------------------- Settings Component ---------------------*/

/*--------------------- Example Service ---------------------*/
function ExampleService($http) {
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
ExampleService.$inject = ['$http'];
angular.module('app').service('ExampleService', ExampleService);



/*--------------------- Example Service ---------------------*/