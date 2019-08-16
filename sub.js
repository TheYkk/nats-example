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

var stan = require('node-nats-streaming').connect('test-cluster', 'client-sub',{url:"http://localhost:4222"});

stan.on('connect', function () {

  var opts = stan.subscriptionOptions();
  opts.setDeliverAllAvailable();
  opts.setDurableName('my-durable');

  var subscription = stan.subscribe('foo', opts);
  subscription.on('message', function (msg) {
    msg.ack();

    console.log('Received a message [' + msg.getSequence() + '] ' + msg.getData());
  });
});

stan.on('close', function() {
  process.exit();
});
