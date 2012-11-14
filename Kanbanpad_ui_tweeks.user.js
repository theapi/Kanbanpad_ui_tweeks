// ==UserScript==
// @name        Kanbanpad UI tweeks
// @namespace   work
// @description Change the layout of Kanbanpad
// @include     https://www.kanbanpad.com/projects/*
// @version     1
// ==/UserScript==


$(document).ready(function() {
  // Move the avatar icons above the colour picker.
  $('.sidebar .feedbackandcolors').appendTo($('.sidebar .wrap'));

  // Hide the feedback button.
  $('#feedback-button').hide();
});
