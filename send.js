const header = { 'Content-Type': 'application/json' };

const url = 'http://localhost:';
const port = '3000'; 
/*
const url = 'http://dev.lulla.co.kr:';
const port = '80';
*/

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQzN2I1NGEwLTgwN2ItMTFlYi1iYzdjLWRmNGFjZWM3YTRkOSIsIm5hbWUiOiJqYWVoeXVubGVlIiwiZXhwIjoxNjY0NDY1NTgzLjkxLCJpYXQiOjE2MzMzNjE1ODN9.W31hyZNREhfrUyR2R4cYignn2AKSxncXMBnhSYrjpvI";

// sendSMS();
// sendPush();
// sendChat();
// readChat();
// sendFile();
 getList();
// getRoom();
// getChatMembers();
// getCheck();

function getCheck() {
  const addr = url + port + '/api/send/chat/check';   //끝에 슬래시를 붙이지 않는다.
  log(addr);
  const header = { 
    'Content-Type': 'application/json',
    authorization: "Bearer " + token,
  };

  const param = {
    member_id: '5e25e7ce-0ea1-11ec-af59-0242ac110003',
    chat_room_id: 'cd926050-3c88-11ec-b0c1-0242ac110003',
  };
  console.dir(header);
  console.dir(param);
  post(addr, param, header, res => {
    log(res);
    var data = JSON.parse(res);
    dir(data);
  });
};
function getChatMembers() {
  const addr = url + port + '/api/send/chat/chattables';   //끝에 슬래시를 붙이지 않는다.
  log(addr);
  const header = { 
    'Content-Type': 'application/json',
    authorization: "Bearer " + token,
  };

  const param = {
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
function getRoom() {
  const addr = url + port + '/api/send/chat/room';   //끝에 슬래시를 붙이지 않는다.
  log(addr);
  const header = { 
    'Content-Type': 'application/json',
    authorization: "Bearer " + token,
  };

  const param = {
    member_id: '5e25e7ce-0ea1-11ec-af59-0242ac110003',
    chat_room_id: '611848c6-3f4f-11ec-bd53-0242ac110003',
    publish_id: 29
  };
  console.dir(header);
  console.dir(param);
  post(addr, param, header, res => {
    log(res);
    var data = JSON.parse(res);
    dir(data);
  });
};
function getList() {
  const addr = url + port + '/api/send/chat/list';   //끝에 슬래시를 붙이지 않는다.
  log(addr);
  const header = { 
    'Content-Type': 'application/json',
    authorization: "Bearer " + token,
  };

  const param = {
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
function sendFile() {
  const addr = url + port + '/api/send/chat/file';   //끝에 슬래시를 붙이지 않는다.
  log(addr);
  const header = { 
    'Content-Type': 'application/json',
    authorization: "Bearer " + token,
  };

  const param = {
    message: '235c9616-3871-11ec-b0fc-0242ac110003',
    member_id: '5e25e7ce-0ea1-11ec-af59-0242ac110003',
    members: ['080b0a04-0df2-11ec-9361-0242ac110003'],
  };
  console.dir(header);
  console.dir(param);
  post(addr, param, header, res => {
    log(res);
    var data = JSON.parse(res);
    dir(data);
  });
};
function readChat() {
  const addr = url + port + '/api/send/chat/read';   //끝에 슬래시를 붙이지 않는다.
  log(addr);
  const header = { 
    'Content-Type': 'application/json',
    authorization: "Bearer " + token,
  };

  const param = {
    member_id: '080b0a04-0df2-11ec-9361-0242ac110003',
    publish_id: 9,
  };
  console.dir(header);
  console.dir(param);
  post(addr, param, header, res => {
    log(res);
    var data = JSON.parse(res);
    dir(data);
  });
};
function sendChat() {
  const addr = url + port + '/api/send/chat';   //끝에 슬래시를 붙이지 않는다.
  log(addr);
  const header = { 
    'Content-Type': 'application/json',
    authorization: "Bearer " + token,
  };

  const param = {
    message: '1:1상담방입니다.',
    member_id: '13d8857a-3e33-11ec-81b2-0242ac110003',
    members: ['8dda926a-3e3c-11ec-8328-0242ac110003'],
  };
  console.dir(header);
  console.dir(param);
  post(addr, param, header, res => {
    log(res);
    var data = JSON.parse(res);
    dir(data);
  });
};
function sendPush() {
  const addr = url + port + '/api/send/push';   //끝에 슬래시를 붙이지 않는다.
  log(addr);
  const header = { 
    'Content-Type': 'application/json',
    authorization: "Bearer " + token,
  };

  const param = {
    title: '[lulla] push test',
    body: 'it is push test for iOS phone from lulla.',
    token: 'dBOfTFpwp0GYtbyXupl4_Z:APA91bHJ9V06VBkNFHyp5Qhag5F9Mxm09vQaTEKwE5cE1a8S7TN6RA_k5CLShd-YYSCayp7DEPbRd5-0NSlq_wKUJGwsRQfRjE_kMXht9_dsEGHGMYdQF9d3zqfjoUCaMbuWoxtDM6Hj', //device token
    //token: 'fZgC3U_kR1ey8wqsCpsTh8:APA91bGfLxWk-sGuNfQ6g-FlVXyaXLhiMkmRWpvcr9GmfI6M7foyTiD5SCQ058e9k7iMp_kl-wjNgLI-yMGmPhUCXtLx-euVx2-cdVdN2iy88CsdmvDKqJVWNDzBNq_IU51W3uNbigJ0',
    data: {},
    type: 1, // 0: 안드로이드, 1: 애플
  };
  console.dir(header);
  console.dir(param);
  post(addr, param, header, res => {
    log(res);
    var data = JSON.parse(res);
    dir(data);
  });
};
function sendSMS() {
  const addr = url + port + '/api/send/sms';   //끝에 슬래시를 붙이지 않는다.
  log(addr);
  const header = { 
    'Content-Type': 'application/json',
    authorization: "Bearer " + token,
  };

  const param = {
    message: '[from 이재현@lulla]외부 api를 위한 send 서버 생성. 이 메시지가 도착했다면, send 서버가 정상 작동하는 것입니다. 새로운 api 목록을 참고하세요.',
    phone: '01090006260',
  };
  console.dir(header);
  console.dir(param);
  post(addr, param, header, res => {
    log(res);
    var data = JSON.parse(res);
    dir(data);
  });
};