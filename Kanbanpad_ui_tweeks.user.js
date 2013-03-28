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
    // Move current user's avatar to top of list
    $("#user-swatch").prepend($('#' + avatar_id));
  }
  
  // style fixes
  var head = document.getElementsByTagName('head')[0];
  var s = document.createElement('style');
  var css = 'body.project .kanban-column ul li .title{font-size:10px; line-height:14px; width:80%; text-align:left;}';
  css += 'body.project .kanban-column ul li .user img{height:80px; width:80px;}';
  css += 'body.project .kanban-column ul li .unassigned{display:none;}';
  css += 'body.project .kanban-column ul li{min-height:15px;}';
  css += 'body.project .kanban-column ul li p.actions{right:0; top:0; position:absolute; width:55px;}';
  css += 'body.project .kanban-column span.asignee{margin-left:12px; float:left; margin:0;}';

  s.setAttribute('type', 'text/css');
  if (s.styleSheet) {   // IE
      s.styleSheet.cssText = css;
  } else {                // the world
      s.appendChild(document.createTextNode(css));
  }
  head.appendChild(s);
  
  // Hide the feedback button.
  //$('#feedback-button').hide();
  
  // Add Fogbugz links
  addFogbugzLinks();
  setInterval(addFogbugzLinks, 4000);
});

function addFogbugzLinks() {
  // Make avatars bigger.
  $('.user img').each(function(){
    var src = $(this).attr('src');
    $(this).attr('src', src.replace('s=20', 's=100'));
  });
  $('p.title').each(function(i) {
    var existing_link = $(this).find('a');
    if (existing_link.length == 0) {
      var fogbug_id = parseInt($(this).text());
      if (fogbug_id > 0) {
        var url = 'http://fogbugz.dennisinteractive.co.uk/default.asp?' + fogbug_id;
        $(this).replaceWith('<p class="title"><a href="' + url + '" target="fogbugz" style="color:#3E3E3E">' + $(this).text() + '</a></p>');
      }
    }
  })
}
