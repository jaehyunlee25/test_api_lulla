const header = { 'Content-Type': 'application/json' };

const url = 'http://192.168.0.5:';
const port = '3000';

/* const url = 'http://dev.lulla.co.kr:';
const port = '1000'; */

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQzN2I1NGEwLTgwN2ItMTFlYi1iYzdjLWRmNGFjZWM3YTRkOSIsIm5hbWUiOiJqYWVoeXVubGVlIiwiZXhwIjoxNjYwODI1NzM5LjIyLCJpYXQiOjE2Mjk3MjE3Mzl9.PDQ36-krf9JGhPKXYMcFdOQdKzVa27H_pOMHP3fmvR8";

getclass();

function getclass(){
  //const addr = url + port + '/api/school/';
  const addr = url + port + '/api/class';   //끝에 슬래시를 붙이지 않는다.
  //header.authorization = "Bearer " + token;
  post(addr, {}, header, res => {
    log(res);
    var data = JSON.parse(res);
    dir(data);
  });
};
