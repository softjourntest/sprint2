const session = require('smartux-connect');
session.transform.sprint22 = session.loadTransform('sprint22');
session.transform.www = session.loadTransform('www');
require('./client');
require('./transform/sprint22');
require('./transform/w4');
require('./transform/www');
session.start();