var app = angular.module('Factory-Training', []);

app.factory('Utility', function(){
    var randomNumberObject = {};
    var randomNumber = Math.floor(Math.random()*1000+1);
    randomNumberObject.generate = function(){
        console.log(randomNumber)
        return randomNumber
    };
    return randomNumberObject
});
