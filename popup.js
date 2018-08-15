'use strict';

let commit = document.getElementById('commit');
let url = document.getElementById('url');
let play = document.getElementById('play');

commit.onclick = function (element) {
  let videoId = /\=([\w\d\-]+)/.exec(url.value)[1]
  chrome.extension.getBackgroundPage().document.getElementById('frame').src = "http://www.youtube.com/embed/" + videoId + "?autoplay=1";
};

play.onclick = function (element){
  chrome.extension.getBackgroundPage().play=true
}