/**
 * *  _____   _             __   __  _      _    
 * * |_   _| | |__     ___  \ \ / / | | __ | | __
 * *   | |   | '_ \   / _ \  \ V /  | |/ / | |/ /
 * *   | |   | | | | |  __/   | |   |   <  |   < 
 * *   |_|   |_| |_|  \___|   |_|   |_|\_\ |_|\_\
 * * 
 * *  Developer By TheYkk(Kaan Karakaya <yusufkaan142@gmail.com>)
*/
"use-strict";

var stan = require('node-nats-streaming').connect('test-cluster', 'client-publish',{url:"http://localhost:4222"});

stan.on('connect', function () {

  
  i= 0;
  setInterval(() => {
    stan.publish('foo', 'Hello node-nats-streaming!'+i, function(err, guid){
      if(err) {
        console.log('publish failed: ' + err);
      } else {
        console.log('published message '+i+' with guid: ' + guid);
        i++;
      }
    });

  }, 300);
});

stan.on('close', function() {
  process.exit();
});
