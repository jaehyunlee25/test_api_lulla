const header = { 'Content-Type': 'application/json' };

/* const url = 'http://localhost:';
const port = '3000'; */

const url = 'http://dev.lulla.co.kr:';
const port = '80';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQzN2I1NGEwLTgwN2ItMTFlYi1iYzdjLWRmNGFjZWM3YTRkOSIsIm5hbWUiOiJqYWVoeXVubGVlIiwiZXhwIjoxNjYwODI1NzM5LjIyLCJpYXQiOjE2Mjk3MjE3Mzl9.PDQ36-krf9JGhPKXYMcFdOQdKzVa27H_pOMHP3fmvR8";

getclass();
// newClass();
function newClass(){
  const addr = url + port + '/api/class';   //끝에 슬래시를 붙이지 않는다.
  const param = {
    class_name: '크림파스타',
    class_start_date: '2021-06-01',
    class_end_date: '2021-12-31',
    member_id: '5e25e7ce-0ea1-11ec-af59-0242ac110003',
    description: '탱글탱글한 면발과 부드러운 크림, 그리고 쫄깃한 크램차우더가 어울러져...'
  };
  header.authorization = "Bearer " + token;

  post(addr, param, header, res => {
    log(res);
    var data = JSON.parse(res);
    dir(data);
  });
};
function getclass(){
  //const addr = url + port + '/api/school/';
  const addr = url + port + '/api/class';   //끝에 슬래시를 붙이지 않는다.
  log(addr);
  header.authorization = "Bearer " + token;
  get(addr, {member_id:'5e25e7ce-0ea1-11ec-af59-0242ac110003'}, header, res => {
    log(res);
    var data = JSON.parse(res);
    dir(data);
  });
};
