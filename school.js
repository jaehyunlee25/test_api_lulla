const header = { 'Content-Type': 'application/json' };

const url = 'http://localhost:';
const port = '3000'; 
/*
const url = 'http://dev.lulla.co.kr:';
const port = '80';
*/

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQzN2I1NGEwLTgwN2ItMTFlYi1iYzdjLWRmNGFjZWM3YTRkOSIsIm5hbWUiOiJqYWVoeXVubGVlIiwiZXhwIjoxNjY0NDY1NTgzLjkxLCJpYXQiOjE2MzMzNjE1ODN9.W31hyZNREhfrUyR2R4cYignn2AKSxncXMBnhSYrjpvI";

getCarers();
// getTeachers();
// inviteTeacher();
// inviteAdmin();
// inviteCarer();
// inviteFamily();

function getCarers() {
  const addr = url + port + '/api/invite/getCarers';   //끝에 슬래시를 붙이지 않는다.
  log(addr);
  const header = { 
    'Content-Type': 'application/json',
    authorization: "Bearer " + token,
  };

  const param = {
    class_id: '5747be92-1ab2-11ec-8f57-0242ac110003',
    member_id: '5e25e7ce-0ea1-11ec-af59-0242ac110003',
    confirmed: false,
    role_name: '보호자',
  };
  console.dir(header);
  console.dir(param);
  post(addr, param, header, res => {
    log(res);
    var data = JSON.parse(res);
    dir(data);
  });
};
function getTeachers() {
  const addr = url + port + '/api/invite/getTeachers';   //끝에 슬래시를 붙이지 않는다.
  log(addr);
  const header = { 
    'Content-Type': 'application/json',
    authorization: "Bearer " + token,
  };

  const param = {
    class_id: '5747be92-1ab2-11ec-8f57-0242ac110003',
    member_id: '5e25e7ce-0ea1-11ec-af59-0242ac110003',
    confirmed: false,
    role_name: '선생',
  };
  console.dir(header);
  console.dir(param);
  post(addr, param, header, res => {
    log(res);
    var data = JSON.parse(res);
    dir(data);
  });
};
function inviteFamily() {
  const addr = url + port + '/api/invite/family';   //끝에 슬래시를 붙이지 않는다.
  log(addr);
  const header = { 
    'Content-Type': 'application/json',
    authorization: "Bearer " + token,
  };

  const param = {
    invitation: {
      phone: '01090006260',
      role_name: '보호자',
      type: 5,
      kid_id: 'd3e958b0-807b-11eb-bc7c-df4acec7a4d9',
      class_id: '5747be92-1ab2-11ec-8f57-0242ac110003',
    },
    member_id: '5e25e7ce-0ea1-11ec-af59-0242ac110003',
  };
  console.dir(header);
  console.dir(param);
  post(addr, param, header, res => {
    log(res);
    var data = JSON.parse(res);
    dir(data);
  });
};
function inviteCarer() {
  const addr = url + port + '/api/invite/carer';   //끝에 슬래시를 붙이지 않는다.
  log(addr);
  const header = { 
    'Content-Type': 'application/json',
    authorization: "Bearer " + token,
  };

  const param = {
    invitation: {
      phone: '01090006260',
      role_name: '보호자',
      type: 5,
      kid_name: '이한결',
      class_id: '5747be92-1ab2-11ec-8f57-0242ac110003',
    },
    member_id: '5e25e7ce-0ea1-11ec-af59-0242ac110003',
  };
  console.dir(header);
  console.dir(param);
  post(addr, param, header, res => {
    log(res);
    var data = JSON.parse(res);
    dir(data);
  });
};
function inviteAdmin() {
  const addr = url + port + '/api/invite/admin';   //끝에 슬래시를 붙이지 않는다.
  log(addr);
  const header = { 
    'Content-Type': 'application/json',
    authorization: "Bearer " + token,
  };

  const param = {
    invitation: {
      phone: '01090006260',
      role_name: '부원장',
      type: 2
    },
    member_id: '5e25e7ce-0ea1-11ec-af59-0242ac110003',
  };
  console.dir(header);
  console.dir(param);
  post(addr, param, header, res => {
    log(res);
    var data = JSON.parse(res);
    dir(data);
  });
};
function inviteTeacher() {
  const addr = url + port + '/api/invite/teacher';   //끝에 슬래시를 붙이지 않는다.
  log(addr);
  const header = { 
    'Content-Type': 'application/json',
    authorization: "Bearer " + token,
  };

  const param = {
    invitation: {
      phone: '01712341235',
      role_name: '선생',
      class_id: '5747be92-1ab2-11ec-8f57-0242ac110003',
      type: 3
    },
    member_id: '5e25e7ce-0ea1-11ec-af59-0242ac110003',
  };
  console.dir(header);
  console.dir(param);
  post(addr, param, header, res => {
    log(res);
    var data = JSON.parse(res);
    dir(data);
  });
};