'use strict';
window.play = false;

chrome.extension.onMessage.addListener(function (message, sender, callback) {
    if (play) {
        callback("play")
        window.play=false
    }
});