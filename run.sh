#!/bin/bash

cd `dirname $0`

command jasmine-node --version 1>/dev/null 2>/dev/null
ret=$?
if test $ret -ne 0
then
    echo "需要安装jasmine-node"
    exit 1
fi

jasmine-node darts_spec.js --junitreport
