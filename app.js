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
                chat.saveMessages();
                chat.newMessage = '';
            }
        };

        chat.saveMessages = function() {
            $window.localStorage.setItem('messages', JSON.stringify(chat.messages));
        };

        chat.loadMessages = function() {
            chat.messages = JSON.parse($window.localStorage.getItem('messages')) || [];
        };

        chat.loadMessages(); //load message on render
    });