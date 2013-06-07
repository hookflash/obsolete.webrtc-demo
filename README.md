Minimal WebRTC Demo
===================

A [WebRTC](http://dev.w3.org/2011/webrtc/editor/webrtc.html) demo using:

  * jQuery - http://jquery.com/
  * jQuery UI - http://jqueryui.com/
  * Open Peer Cross-browser WebRTC API - https://github.com/openpeer/webrtc-shim
  * Open Peer Rolodex - https://github.com/openpeer/rolodex
  * Open Peer Rolodex Presence Plugin - https://github.com/openpeer/rolodex-presence
  * RequireJS - http://requirejs.org/

Features:

  * Login for multiple identities (Facebook, Twitter, LinkedIn, Github)
  * Display list of contacts (includes contacts who have opened demo at least once)
  * Presence (online/offline) state for contacts
  * Call controls to initiate a WebRTC connection
  * Video & audio streaming via peer to peer connection
  * Text messaging via peer to peer data channel

The entire demo code is contained in one static HTML file: https://github.com/openpeer/webrtc-demo/blob/master/index.html

You can try the demo online at: http://openpeer.github.io/webrtc-demo/

Usage
-----

Requirements:

  * [Google Chrome](https://www.google.com/chrome/)
  * [Firefox](http://www.mozilla.org/firefox/) ( **PLANNED** )

Install & run locally:

    npm install
    npm start
    open http://localhost:8080/

Deploy demo to github pages:

    git checkout gh-pages
    git merge master
    git push origin gh-pages
    git checkout master

License
=======

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2013 SMB Phone Inc. 
