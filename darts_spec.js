var frisby = require('frisby');
var cases = require('./cases');

for (var i = 0;i < cases.length; i++) {
  var item = cases[i];
  frisby.create(item.desc)
    .get(item.url)
      .addHeader('Uni-Source', 'resthub/ci')
      .expectStatus(item.httpStatus)
      .expectJSON({
          status: jsonStatus
      }
  .toss();
}
