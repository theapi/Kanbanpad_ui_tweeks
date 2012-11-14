// ==UserScript==
// @name        Kanbanpad UI tweeks
// @namespace   work
// @description Change the layout of Kanbanpad
// @include     https://www.kanbanpad.com/projects/*
// @version     1
// ==/UserScript==


$(document).ready(function() {
  // Move the avatar icons above the colour picker.
  //$('.sidebar .feedbackandcolors').appendTo($('.sidebar .wrap'));
  
  pattern = /https\:\/\/secure.gravatar.com\/avatar\/(.*)?\?/;
  subject = $('.profilePic img').attr("src");
  matches = subject.match(pattern);
  
  if (matches[1]) {
    avatar_id = matches[1];
  }
  
  // Move current user's avatar to top of list
  $("#user-swatch").prepend($('#' + avatar_id));

  // Hide the feedback button.
  //$('#feedback-button').hide();
});
