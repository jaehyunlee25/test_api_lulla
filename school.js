const header = { 'Content-Type': 'application/json' };

/*
const url = 'http://localhost:';
const port = '3000'; 
*/
const url = 'http://dev.lulla.co.kr:';
const port = '80';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQzN2I1NGEwLTgwN2ItMTFlYi1iYzdjLWRmNGFjZWM3YTRkOSIsIm5hbWUiOiJqYWVoeXVubGVlIiwiZXhwIjoxNjY0NDY1NTgzLjkxLCJpYXQiOjE2MzMzNjE1ODN9.W31hyZNREhfrUyR2R4cYignn2AKSxncXMBnhSYrjpvI";

// getCarers();
// getTeachers();
// inviteTeacher();
// inviteAdmin();
// inviteCarer();
// inviteFamily();
// inviteDeny();

// teacherAccept();
// adminAccept();
// carerAccept();

// announce();
// updateAnnounce();
// searchAnnounce();
// detailAnnounce();

// confirmAnnouncement();
// deleteAnnounce();
removeMember();

function removeMember() {
  const addr = url + port + '/api/member/remove';   //끝에 슬래시를 붙이지 않는다.
  log(addr);
  const header = {
    'Content-Type': 'application/json',
    authorization: "Bearer " + token,
  };

  const param = {
    member_id: '5e44ce72-3e36-11ec-8aca-0242ac110003'
  };
  console.dir(header);
  console.dir(param);
  post(addr, param, header, res => {
    log(res);
    var data = JSON.parse(res);
    dir(data);
  });
};
function deleteAnnounce() {
  const addr = url + port + '/api/announce/delete';   //끝에 슬래시를 붙이지 않는다.
  log(addr);
  const header = {
    'Content-Type': 'application/json',
    authorization: "Bearer " + token,
  };

  const param = {
    member_id: '8dda926a-3e3c-11ec-8328-0242ac110003',
    id: ['ee825974-4335-11ec-95c6-0242ac110003']
  };
  console.dir(header);
  console.dir(param);
  post(addr, param, header, res => {
    log(res);
    var data = JSON.parse(res);
    dir(data);
  });
};
function confirmAnnouncement() {
  const addr = url + port + '/api/announce/confirm';   //끝에 슬래시를 붙이지 않는다.
  log(addr);
  const header = {
    'Content-Type': 'application/json',
    authorization: "Bearer " + token,
  };

  const param = {
    member_id: '13d8857a-3e33-11ec-81b2-0242ac110003',
    id: '89981fea-40a0-11ec-9c31-0242ac110003'
  };
  console.dir(header);
  console.dir(param);
  post(addr, param, header, res => {
    log(res);
    var data = JSON.parse(res);
    dir(data);
  });
};
function inviteDeny() {
  const addr = url + port + '/api/invite/accept/deny';   //끝에 슬래시를 붙이지 않는다.
  log(addr);
  const header = {
    'Content-Type': 'application/json',
    authorization: "Bearer " + token,
  };

  const param = {
    invitation_id: 'b8ae4a36-3720-11ec-ba86-0242ac110003'
  };
  console.dir(header);
  console.dir(param);
  post(addr, param, header, res => {
    log(res);
    var data = JSON.parse(res);
    dir(data);
  });
};
function detailAnnounce() {
  const addr = url + port + '/api/announce/detail';   //끝에 슬래시를 붙이지 않는다.
  log(addr);
  const header = {
    'Content-Type': 'application/json',
    authorization: "Bearer " + token,
  };

  const param = {
    member_id: '13d8857a-3e33-11ec-81b2-0242ac110003', // uuid
    id: '4b64f04c-3fef-11ec-95d6-0242ac110003', // uuid
  };
  console.dir(header);
  console.dir(param);
  post(addr, param, header, res => {
    log(res);
    var data = JSON.parse(res);
    dir(data);
  });
};
function searchAnnounce() {
  const addr = url + port + '/api/announce/list';   //끝에 슬래시를 붙이지 않는다.
  log(addr);
  const header = {
    'Content-Type': 'application/json',
    authorization: "Bearer " + token,
  };

  const param = {
    member_id: '13d8857a-3e33-11ec-81b2-0242ac110003', // uuid
    to_member_id: '8dda926a-3e3c-11ec-8328-0242ac110003', // uuid
    date: '2021-11', // 'yyyy-mm-dd'
    temp: false, // boolean
  };
  console.dir(header);
  console.dir(param);
  post(addr, param, header, res => {
    log(res);
    var data = JSON.parse(res);
    dir(data);
  });
};
function updateAnnounce() {
  const addr = url + port + '/api/announce/update';   //끝에 슬래시를 붙이지 않는다.
  log(addr);
  const header = {
    'Content-Type': 'application/json',
    authorization: "Bearer " + token,
  };

  const param = {
    id: 'da7bcb32-3ff1-11ec-9420-0242ac110003', 
    member_id: '8dda926a-3e3c-11ec-8328-0242ac110003', // uuid
    to_member_id: '13d8857a-3e33-11ec-81b2-0242ac110003', // uuid
    date: '2021-11-08', // 'yyyy-mm-dd'
    sleep: 30, // int
    condition: 0, // int
    meal: 0, // int
    temperature: 0, // int
    defecation: 0, // int
    is_reserved: false, // boolean
    is_published: true, // boolean
    is_record: true, // boolean
    file_list: ['86e39af0-807e-11eb-b4e8-ed455a9330ea', 'b5fe4240-806a-11eb-9944-815ce606479f'], // uuid[]
    deleted_list: ['c4815d40-80f4-11eb-b4e8-ed455a9330ea'],
    content: '수정) 잘 지내고, 수정했습니다.', // string
  };
  console.dir(header);
  console.dir(param);
  post(addr, param, header, res => {
    log(res);
    var data = JSON.parse(res);
    dir(data);
  });
};
function announce() {
  const addr = url + port + '/api/announce';   //끝에 슬래시를 붙이지 않는다.
  log(addr);
  const header = {
    'Content-Type': 'application/json',
    authorization: "Bearer " + token,
  };

  const param = {
    member_id: '8dda926a-3e3c-11ec-8328-0242ac110003', // uuid
    to_member_id: '13d8857a-3e33-11ec-81b2-0242ac110003', // uuid
    date: '2021-11-08', // 'yyyy-mm-dd'
    sleep: 30, // int
    condition: 0, // int
    meal: 0, // int
    temperature: 0, // int
    defecation: 0, // int
    is_reserved: false, // boolean
    is_published: true, // boolean
    is_record: true, // boolean
    file_list: [], // uuid[]
    content: '채팅방없는 알림장', // string
  };
  console.dir(header);
  console.dir(param);
  post(addr, param, header, res => {
    log(res);
    var data = JSON.parse(res);
    dir(data);
  });
};
function carerAccept() {
  const addr = url + port + '/api/invite/accept/carer';   //끝에 슬래시를 붙이지 않는다.
  log(addr);
  const header = {
    'Content-Type': 'application/json',
    authorization: "Bearer " + token,
  };

  const param = {
    invitation_id: 'b8ae4a36-3720-11ec-ba86-0242ac110003',
  };
  console.dir(header);
  console.dir(param);
  post(addr, param, header, res => {
    log(res);
    var data = JSON.parse(res);
    dir(data);
  });
};
function adminAccept() {
  const addr = url + port + '/api/invite/accept/admin';   //끝에 슬래시를 붙이지 않는다.
  log(addr);
  const header = {
    'Content-Type': 'application/json',
    authorization: "Bearer " + token,
  };

  const param = {
    invitation_id: '94b1ce7c-36db-11ec-9692-0242ac110003',
  };
  console.dir(header);
  console.dir(param);
  post(addr, param, header, res => {
    log(res);
    var data = JSON.parse(res);
    dir(data);
  });
};
function teacherAccept() {
  const addr = url + port + '/api/invite/accept/teacher';   //끝에 슬래시를 붙이지 않는다.
  log(addr);
  const header = {
    'Content-Type': 'application/json',
    authorization: "Bearer " + token,
  };

  const param = {
    invitation_id: 'd089e460-3682-11ec-8dda-0242ac110003',
  };
  console.dir(header);
  console.dir(param);
  post(addr, param, header, res => {
    log(res);
    var data = JSON.parse(res);
    dir(data);
  });
};
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