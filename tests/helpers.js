var chaiThings = require('chai-things');

(function(global){
  global.expect = global.chai.expect;
  global.chai.use( chaiThings )
})(global||window);

