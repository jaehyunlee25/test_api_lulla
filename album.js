const header = { 'Content-Type': 'application/json' };

/*
const url = 'http://localhost:';
const port = '3000'; 
*/
const url = 'http://dev.lulla.co.kr:';
const port = '80';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQzN2I1NGEwLTgwN2ItMTFlYi1iYzdjLWRmNGFjZWM3YTRkOSIsIm5hbWUiOiJqYWVoeXVubGVlIiwiZXhwIjoxNjY0NDY1NTgzLjkxLCJpYXQiOjE2MzMzNjE1ODN9.W31hyZNREhfrUyR2R4cYignn2AKSxncXMBnhSYrjpvI";

// userAlbum();
// setUserAlbum();
albumList();

function albumList() {
  const addr = url + port + '/api/album/list';   //끝에 슬래시를 붙이지 않는다.
  log(addr);
  const header = { 
    'Content-Type': 'application/json',
    authorization: "Bearer " + token,
  };

  const param = {    
    member_id: '5e25e7ce-0ea1-11ec-af59-0242ac110003',
    id: '64839834-31c7-11ec-88e3-0242ac110003',
    page: 1,
    temp: false,
    class: [],
    search: '',
    category: ['author', 'content'],
  };
  console.dir(header);
  console.dir(param);
  post(addr, param, header, res => {
    log(res);
    var data = JSON.parse(res);
    dir(data);
  });
};
function setUserAlbum() {
  const addr = url + port + '/api/album';   //끝에 슬래시를 붙이지 않는다.
  log(addr);
  const header = { 
    'Content-Type': 'application/json',
    authorization: "Bearer " + token,
  };

  const param = {
    album: {
      id: '0c42b7a8-31c3-11ec-91ef-0242ac110003',
      title: 'update',
      contents: 'test',
      important: true,
      is_published: true,
      allowed_class: ['d3a7e2e0-807b-11eb-bc7c-df4acec7a4d9'],  // 배열(클래스 id)
      allowed_member: ['d4386310-807b-11eb-bc7c-df4acec7a4d9', '5e25e7ce-0ea1-11ec-af59-0242ac110003'], // 배열(멤버 id)
      file_list: ['b5e6c2a0-806a-11eb-9944-815ce606479f'], // 배열(file id)
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
function userAlbum() {
  const addr = url + port + '/api/album';   //끝에 슬래시를 붙이지 않는다.
  log(addr);
  const header = { 
    'Content-Type': 'application/json',
    authorization: "Bearer " + token,
  };

  const param = {
    album: {
      title: '',
      contents: '',
      important: true,
      is_published: true,
      allowed_class: ['d3a7e2e0-807b-11eb-bc7c-df4acec7a4d9'],  // 배열(클래스 id)
      allowed_member: ['d4386310-807b-11eb-bc7c-df4acec7a4d9', '5e25e7ce-0ea1-11ec-af59-0242ac110003'], // 배열(멤버 id)
      file_list: ['b5e6c2a0-806a-11eb-9944-815ce606479f'], // 배열(file id)
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