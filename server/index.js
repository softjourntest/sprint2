const session = require('smartux-connect');
session.transform.sprint22 = session.loadTransform('sprint22');
require('./client');
require('./transform/sprint22');
require('./transform/w4');
session.start();