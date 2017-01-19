# darts
![image](darts.jpg)

非常简单易用的Restful-API测试框架

## 依赖
* nodejs
* npm
* Jasmine
* FrisbyJS

## 安装

```shell
# RHEL/CentOS
sudo yum install -y nodejs

# Debian/Ubuntu
sudo apt-get install -y nodejs


npm install -g jasmine
npm install --save-dev frisby
```

## 测试用例
```js
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
```

## 使用方法
只需要修改cases.js，添加更多的测试用例，然后运行sh run.sh即可。
