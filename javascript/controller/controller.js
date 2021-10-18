app.controller('MainController', ['$scope', function($scope){
    $scope.list=['Click the below button to get Random Number']
}])

app.controller('randomController', function($scope, Utility){
    $scope.generateRandomNumber = function(){
        $scope.generateNumber = Utility.generate()
    }
})

app.controller('epochTime', function($scope){
    $scope.time = []
})
