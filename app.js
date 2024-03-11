angular.module('chatApp', [])
    .controller('ChatController', function($window, $scope) {
        var chat = this;
        chat.username = null;
        chat.newUsername = '';

        chat.setUsername = function() {
            if (chat.newUsername) {
                chat.username = chat.newUsername;
            }
        };
        

    });