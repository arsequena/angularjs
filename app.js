angular.module('chatApp', [])
    .controller('ChatController', function($window, $scope) {
        var chat = this;
        chat.username = null;
        chat.newUsername = '';
        chat.newMessage = '';
        chat.messages = [];

        chat.setUsername = function() {
            if (chat.newUsername) {
                chat.username = chat.newUsername;
            }
        };
       
        chat.sendMessage = function() {
            if (chat.newMessage) {
                chat.messages.push({ ts:Date.now(), username: chat.username, text: chat.newMessage });
                chat.newMessage = '';
            }
        };


    });