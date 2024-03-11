angular.module('chatApp', [])
    .controller('ChatController', function($window, $scope) {
        var chat = this;
        chat.username = '';
        chat.newUsername = '';
        chat.newMessage = '';
        chat.messages = [];
        chat.pageSize = 25;
        chat.viewLimit = chat.messages.length - chat.pageSize > 0 ? chat.messages.length - chat.pageSize : 0;

        chat.setUsername = function() {
            if (chat.newUsername) {
                chat.username = chat.newUsername;
                chat.loadMessages();
            }
        };

        chat.sendMessage = function() {
            if (chat.newMessage) {
                chat.loadMessages();
                chat.messages.push({ ts:Date.now(), username: chat.username, text: chat.newMessage });
                chat.messages.sort(function(a, b) { return b.ts - a.ts; });
                chat.saveMessages();
                chat.newMessage = '';
            }
        };

        chat.loadMessages = function() {
            chat.messages = JSON.parse($window.localStorage.getItem('messages')) || [];
            chat.messages.sort(function(a, b) { return b.ts - a.ts; });
            chat.viewLimit = chat.messages.length - chat.pageSize > 0 ? chat.messages.length - chat.pageSize : 0;
        };

        chat.saveMessages = function() {
            $window.localStorage.setItem('messages', JSON.stringify(chat.messages));
        };

        chat.loadMoreMessages = function() {
            chat.loadMessages();
            chat.pageSize += 25;
        };

        chat.loadMessages();

        $scope.$watch(function() {
            return $window.localStorage.getItem('messages');
        }, function(newValue) {
            chat.messages = JSON.parse(newValue) || [];
        });
    });