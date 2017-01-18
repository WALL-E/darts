var frisby = require('frisby');
var cases = require('./cases');

for (var i = 0;i < cases.length; i++) {
  var item = cases[i];

  //GET
  if (item.method.toUpperCase() === "GET") {
    frisby.create(item.desc)
      .get(item.url + "?" + item.params)
        .addHeader('Uni-Source', 'resthub/ci')
        .expectStatus(item.httpStatus)
        .expectJSON({
          status: item.jsonStatus
        })
    .toss();
  }

  //POST
  if (item.method.toUpperCase() === "POST") {
    frisby.create(item.desc)
      .post(item.url, item.data, {json: item.jsonBool})
        .addHeader('Uni-Source', 'resthub/ci')
        .expectStatus(item.httpStatus)
        .expectJSON({
          status: item.jsonStatus
        })
    .toss();
  }
}
