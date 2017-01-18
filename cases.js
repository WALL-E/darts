
cases = [
  {
    "desc": "resthub unit-test 1",
    "method": "GET",
    "params": "",
    "data": {},
    "jsonBool": true,
    "url": "http://apis.qianbao.com/basicservice/v1/gateway_unit_test",
    "httpStatus": 200,
    "jsonStatus": "20000000",
  },
  {
    "desc": "resthub unit-test 2",
    "method": "POST",
    "params": "",
    "data": {
      "name":"darts",
    },
    "jsonBool": true,
    "url": "http://apis.qianbao.com/basicservice/v1/gateway_unit_test",
    "httpStatus": 200,
    "jsonStatus": 401,
  },

]

module.exports = cases;
