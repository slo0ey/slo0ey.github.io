#!/bin/sh bash

# 에러가 발생될 경우 스크립트 실행을 중지
set -e

yarn run build

cd dist

git init
git checkout -b deployment
git add -A
git commit -m 'deploy'

git push -f git@github.com:slo0ey/slo0ey.github.io.git deployment

cd -