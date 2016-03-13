leoDirectives.directive("stars", function () {
    return {
        restrict: 'E',
        scope: {
            number: '@'
        },
        template: "<div style='width: 100%;' class='text-right'><span class='glyphicon glyphicon-star' aria-hidden='true' ng-repeat='i in ::numbers'></span></div>",
        controller: ["$scope", function ($scope) {
            var numbers = [];

            for (var i = 0; i < parseInt($scope.number); i++)
                numbers.push(i);

            $scope.numbers = numbers;
        }]
    }
});