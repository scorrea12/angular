(function () {
	var app = angular.module('userModule', []);
 
	app.controller('userController', ['$scope','$filter', function ($scope,$filter) {
			$scope.user = {};
			$scope.showForm = false;
			this.showForm = function () {
				$scope.showForm = true;
			};
			this.save = function () {
                            var date = $filter('date')($scope.user.dia,"dd '-' MMMM '-' yyyy");
                            $scope.mensaje= "El usuario " + $scope.user.firstName + " " + $scope.user.lastName+" nació el "+date
			};
		}]);
 
	app.directive('userForm', [function () {
			return {
				restrict: 'E',
				templateUrl: 'src/modules/user/userTemplates.html'
			};
		}]);
})();
