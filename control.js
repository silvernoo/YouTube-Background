'use strict';

function payload() {
    chrome.extension.sendMessage("reload", function (response) {
        switch (response) {
            case "play":
                document.getElementsByClassName('ytp-play-button')[0].click()
                break
        }
    });
}

setInterval(payload, 1000);