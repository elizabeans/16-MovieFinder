angular.module('app', []);

angular.module('app').controller('indexController', function ($scope, $http) {

    $scope.searchTerm = '';

    console.log('issuing http get');
    $scope.searchForMovie = function () {
        console.log('searchForMovie');
        $http.get('http://www.omdbapi.com/?type=movie&s=' + $scope.searchTerm)
                .success(function (data) {
                    $scope.movies = data.Search;
                    console.log(data);
                })
                .error(function (error) {
                    alert(error);
            });
    };

    $scope.searchForTvShow = function () {
        console.log('searchForTvShow');
        $http.get('http://www.omdbapi.com/?type=series&s=' + $scope.searchTerm)
                .success(function (data) {
                    $scope.movies = data.Search;
                    console.log(data);
                })
                .error(function (error) {
                    alert(error);
            });
    };

    $scope.showMovie = function (movie) {
        $scope.currentMovie = movie;

        console.log('http://www.omdbapi.com/?plot=full&t=' + $scope.currentMovie.Title);
        $http.get('http://www.omdbapi.com/?plot=full&t=' + $scope.currentMovie.Title)
                .success(function (data) {
                    $scope.detail = data;
                    console.log(data);
                })
                .error(function (error) {
                    
                    alert(error);
                });
    };
});

