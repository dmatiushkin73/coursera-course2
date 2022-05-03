(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.lunchMenu = "";
  $scope.outputMessage = "";

  $scope.checkLunchMenu = function () {
    if ($scope.lunchMenu === "") {
      $scope.outputMessage = "Please enter data first";
      $scope.lmClassName = "lm-nodata";
      $scope.msgClassName = "msg-nodata";
    }
    else {
      var menuItems = $scope.lunchMenu.split(',');
      var cnt = 0;
      for (var i = 0; i < menuItems.length; i++) {
        if (menuItems[i] !== "") {
          cnt++;
        }
      }
      if (cnt <= 3) {
        $scope.outputMessage = "Enjoy!";
      }
      else {
        $scope.outputMessage = "Too much!";
      }
      $scope.lmClassName = "lm-ok";
      $scope.msgClassName = "msg-ok";
    }
  };
}

})();
