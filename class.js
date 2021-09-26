const header = { 'Content-Type': 'application/json' };

const url = 'http://localhost:';
const port = '3000'; 
/* 
const url = 'http://dev.lulla.co.kr:';
const port = '80';
*/

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQzN2I1NGEwLTgwN2ItMTFlYi1iYzdjLWRmNGFjZWM3YTRkOSIsIm5hbWUiOiJqYWVoeXVubGVlIiwiZXhwIjoxNjYwODI1NzM5LjIyLCJpYXQiOjE2Mjk3MjE3Mzl9.PDQ36-krf9JGhPKXYMcFdOQdKzVa27H_pOMHP3fmvR8";

// getclass();
// newClass();
// getClassInfo();
// setClassInfo();
// delClass();
// getMember();
// setMember();
uploadImage();

function uploadImage(){
  const addr = url + port + '/api/member/image';   //끝에 슬래시를 붙이지 않는다.
  log(addr);
  const header = { 
    //'Content-Type': 'multipart/form-data',
    authorization: "Bearer " + token,
  };

  const ipt = document.createElement('input');
  ipt.type = 'file';
  document.body.appendChild(ipt);

  ipt.onchange = function(){
    const file = this.files[0];
    const param = new FormData();
    param.append('file', file);
    param.append('member_id', '5e25e7ce-0ea1-11ec-af59-0242ac110003');
  
    jFile(addr, param, header, res => {
      log(res);
      var data = JSON.parse(res);
      dir(data);
    });
  };

};
function setMember(){
  const addr = url + port + '/api/member/update';   //끝에 슬래시를 붙이지 않는다.
  log(addr);
  header.authorization = "Bearer " + token;
  const param = {
    member_id: '5e25e7ce-0ea1-11ec-af59-0242ac110003',
    nickname: '업데이트',
    member_description: '업데이트 테스트입니다.',
    image_id: 'c4815d40-80f4-11eb-b4e8-ed455a9330ea',
    background_image_id: 'b5e6c2a0-806a-11eb-9944-815ce606479f',
  };
  post(addr, param, header, res => {
    log(res);
    var data = JSON.parse(res);
    dir(data);
  });
};
function getMember(){
  const addr = url + port + '/api/member';   //끝에 슬래시를 붙이지 않는다.
  log(addr);
  header.authorization = "Bearer " + token;
  get(addr, {member_id: '5e25e7ce-0ea1-11ec-af59-0242ac110003', /* id: '', type: '' */}, header, res => {
    log(res);
    var data = JSON.parse(res);
    dir(data);
  });
};
function delClass(){
  const addr = url + port + '/api/class/delete';   //끝에 슬래시를 붙이지 않는다.
  log(addr);
  const param = {
    class_id: '353f8e0c-1af2-11ec-b56b-0242ac110003',
    member_id: '5e25e7ce-0ea1-11ec-af59-0242ac110003',
  };
  header.authorization = "Bearer " + token;

  post(addr, param, header, res => {
    log(res);
    var data = JSON.parse(res);
    dir(data);
  });
};
function setClassInfo(){
  const addr = url + port + '/api/class/update';   //끝에 슬래시를 붙이지 않는다.
  log(addr);
  const param = {
    class_id: 'a791f7b0-1af2-11ec-ab58-0242ac110003',
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
function getClassInfo(){
  const addr = url + port + '/api/class/info';   //끝에 슬래시를 붙이지 않는다.
  log(addr);
  header.authorization = "Bearer " + token;
  get(addr, { id: 'a791f7b0-1af2-11ec-ab58-0242ac110003' }, header, res => {
    log(res);
    var data = JSON.parse(res);
    dir(data);
  });
};
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
