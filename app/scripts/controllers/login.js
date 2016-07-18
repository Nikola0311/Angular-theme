
(function (){
'use strict';
    
    angular
    .module('yapp')
    .controller ('LoginCtrl', LoginCtrl);
    
    LoginCtrl.$inject=['$location']
    
    function LoginCtrl ($location){
        var vm = this;
        vm.dugme = dugme;
        
        function dugme(){
            //console.log(username);
           if (vm.username == 'pc' && vm.password == 'pc'){
            $location.path('/dashboard');
            } else{
                alert ('NEISPRAVNO POPUNJENA POLJA! ')
            }
        }
      
        
        
        
        
    

    }

})();




/**
'use strict';
*/
/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
/**
angular.module('yapp')
  .controller('LoginCtrl', function($scope, $location) {

    $scope.submit = function() {     // za dugme 

      $location.path('/dashboard');

      return false;
    }

  }); 
*/