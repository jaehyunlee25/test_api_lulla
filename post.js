const header = { 'Content-Type': 'application/json' };

/*
const url = 'http://localhost:';
const port = '3000'; 
*/
const url = 'http://dev.lulla.co.kr:';
const port = '80';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQzN2I1NGEwLTgwN2ItMTFlYi1iYzdjLWRmNGFjZWM3YTRkOSIsIm5hbWUiOiJqYWVoeXVubGVlIiwiZXhwIjoxNjY0NDY1NTgzLjkxLCJpYXQiOjE2MzMzNjE1ODN9.W31hyZNREhfrUyR2R4cYignn2AKSxncXMBnhSYrjpvI";

// userPost();
// userPostUpdate();
 userPostList();
// getAllowedMmeber();
// delPost();

// setLike();
// getAllLike();
// setComment();
// getComments();
// setToComment();
// updateComment();
// deleteComment();

// bookmark();
// getBookmarks();
// getSurvey();

// delSurvey();
// getShareList();

// getShare();

function getShare() {
  const addr = url + port + '/api/post/share';   //끝에 슬래시를 붙이지 않는다.
  log(addr);
  const header = { 
    'Content-Type': 'application/json',
    authorization: "Bearer " + token,
  };

  const param = {
    member_id: '5e25e7ce-0ea1-11ec-af59-0242ac110003',
    id: '7f130680-807e-11eb-b4e8-ed455a9330ea', // postId
    member_list: ['080b0a04-0df2-11ec-9361-0242ac110003'],
    class_list: '',
    is_all: false,
    message: '',
  };
  console.dir(header);
  console.dir(param);
  post(addr, param, header, res => {
    log(res);
    var data = JSON.parse(res);
    dir(data);
  });
};
function getShareList() {
  const addr = url + port + '/api/post/share-list';   //끝에 슬래시를 붙이지 않는다.
  log(addr);
  const header = { 
    'Content-Type': 'application/json',
    authorization: "Bearer " + token,
  };

  const param = {
    id: '8b32326e-2d13-11ec-be73-0242ac110003', //post id
    member_id: '5e25e7ce-0ea1-11ec-af59-0242ac110003'
  };
  console.dir(header);
  console.dir(param);
  get(addr, param, header, res => {
    log(res);
    var data = JSON.parse(res);
    dir(data);
  });
};
function delSurvey() {
  const addr = url + port + '/api/survey/delete';   //끝에 슬래시를 붙이지 않는다.
  log(addr);
  const header = { 
    'Content-Type': 'application/json',
    authorization: "Bearer " + token,
  };

  const param = {
    survey: {
      id: '5d86f910-c3ac-11eb-8ce0-75195d78b2c2',
    },
  };
  console.dir(header);
  console.dir(param);
  post(addr, param, header, res => {
    log(res);
    var data = JSON.parse(res);
    dir(data);
  });
};
function getSurvey() {
  const addr = url + port + '/api/survey/get-info';   //끝에 슬래시를 붙이지 않는다.
  log(addr);
  const header = { 
    'Content-Type': 'application/json',
    authorization: "Bearer " + token,
  };

  const param = {
    id: '3cde85d0-86de-11eb-9385-477042e8f917',
  };
  console.dir(header);
  console.dir(param);
  get(addr, param, header, res => {
    log(res);
    var data = JSON.parse(res);
    dir(data);
  });
};
function getBookmarks() {
  const addr = url + port + '/api/bookmark';   //끝에 슬래시를 붙이지 않는다.
  log(addr);
  const header = { 
    'Content-Type': 'application/json',
    authorization: "Bearer " + token,
  };

  const param = {
    member_id: '5e25e7ce-0ea1-11ec-af59-0242ac110003',
    type: 1,
  };
  console.dir(header);
  console.dir(param);
  get(addr, param, header, res => {
    log(res);
    var data = JSON.parse(res);
    dir(data);
  });
};
function bookmark() {
  const addr = url + port + '/api/post/bookmark';   //끝에 슬래시를 붙이지 않는다.
  log(addr);
  const header = { 
    'Content-Type': 'application/json',
    authorization: "Bearer " + token,
  };

  const param = {    
    member_id: '5e25e7ce-0ea1-11ec-af59-0242ac110003',
    bookmark: {
      post_id: '8b32326e-2d13-11ec-be73-0242ac110003',
    },
  };
  console.dir(header);
  console.dir(param);
  post(addr, param, header, res => {
    log(res);
    var data = JSON.parse(res);
    dir(data);
  });
};
function deleteComment() {
  const addr = url + port + '/api/comment/delete';   //끝에 슬래시를 붙이지 않는다.
  log(addr);
  const header = { 
    'Content-Type': 'application/json',
    authorization: "Bearer " + token,
  };

  const param = {    
    member_id: '5e25e7ce-0ea1-11ec-af59-0242ac110003',
    comment: {
      id: '34afcb60-2f64-11ec-9703-0242ac110003',
    },
  };
  console.dir(header);
  console.dir(param);
  post(addr, param, header, res => {
    log(res);
    var data = JSON.parse(res);
    dir(data);
  });
};
function updateComment() {
  const addr = url + port + '/api/comment/update';   //끝에 슬래시를 붙이지 않는다.
  log(addr);
  const header = { 
    'Content-Type': 'application/json',
    authorization: "Bearer " + token,
  };

  const param = {    
    member_id: '5e25e7ce-0ea1-11ec-af59-0242ac110003',
    comment: {
      id: 'b7d48462-2c40-11ec-a7bf-0242ac110003',
      content: '댓글 수정 테스트',
    },
  };
  console.dir(header);
  console.dir(param);
  post(addr, param, header, res => {
    log(res);
    var data = JSON.parse(res);
    dir(data);
  });
};
function setToComment() {
  const addr = url + port + '/api/comment';   //끝에 슬래시를 붙이지 않는다.
  log(addr);
  const header = { 
    'Content-Type': 'application/json',
    authorization: "Bearer " + token,
  };

  const param = {    
    member_id: '5e25e7ce-0ea1-11ec-af59-0242ac110003',
    comment: {
      comment_id: "caa05d98-2f63-11ec-be0a-0242ac110003",
      target_member_id: '5e25e7ce-0ea1-11ec-af59-0242ac110003',
      content: '2',
    },
  };
  console.dir(header);
  console.dir(param);
  post(addr, param, header, res => {
    log(res);
    var data = JSON.parse(res);
    dir(data);
  });
};
function getComments() {
  const addr = url + port + '/api/post/comment';   //끝에 슬래시를 붙이지 않는다.
  log(addr);
  const header = { 
    'Content-Type': 'application/json',
    authorization: "Bearer " + token,
  };

  const param = {
    member_id: '5e25e7ce-0ea1-11ec-af59-0242ac110003',
    id: '1ea3ab26-2531-11ec-95b7-0242ac110003',
  };
  console.dir(header);
  console.dir(param);
  get(addr, param, header, res => {
    log(res);
    var data = JSON.parse(res);
    dir(data);
  });
};
function setComment() {
  const addr = url + port + '/api/post/comment';   //끝에 슬래시를 붙이지 않는다.
  log(addr);
  const header = { 
    'Content-Type': 'application/json',
    authorization: "Bearer " + token,
  };

  const param = {    
    member_id: '5e25e7ce-0ea1-11ec-af59-0242ac110003',
    comment: {
      post_id: '1ea3ab26-2531-11ec-95b7-0242ac110003',
      content: '댓글 삭제용 댓글',
    },
  };
  console.dir(header);
  console.dir(param);
  post(addr, param, header, res => {
    log(res);
    var data = JSON.parse(res);
    dir(data);
  });
};
function getAllLike() {
  const addr = url + port + '/api/post/like';   //끝에 슬래시를 붙이지 않는다.
  log(addr);
  const header = { 
    'Content-Type': 'application/json',
    authorization: "Bearer " + token,
  };

  const param = {
    member_id: '5e25e7ce-0ea1-11ec-af59-0242ac110003',
    id: 'db01c0b0-807b-11eb-bc7c-df4acec7a4d9',
  };
  console.dir(header);
  console.dir(param);
  get(addr, param, header, res => {
    log(res);
    var data = JSON.parse(res);
    dir(data);
  });
};
function setLike() {
  const addr = url + port + '/api/post/like';   //끝에 슬래시를 붙이지 않는다.
  log(addr);
  const header = { 
    'Content-Type': 'application/json',
    authorization: "Bearer " + token,
  };

  const param = {    
    member_id: '5e25e7ce-0ea1-11ec-af59-0242ac110003',
    like: {
      post_id: '1ea3ab26-2531-11ec-95b7-0242ac110003',
    },
  };
  console.dir(header);
  console.dir(param);
  post(addr, param, header, res => {
    log(res);
    var data = JSON.parse(res);
    dir(data);
  });
};
function delPost() {
  const addr = url + port + '/api/post/delete';   //끝에 슬래시를 붙이지 않는다.
  log(addr);
  const header = { 
    'Content-Type': 'application/json',
    authorization: "Bearer " + token,
  };

  const param = {    
    member_id: '5e25e7ce-0ea1-11ec-af59-0242ac110003',
    post: {
      id: ['6a9b70ca-2678-11ec-bec4-0242ac110003', 'a49dc2e6-2678-11ec-858b-0242ac110003']
    },
  };
  console.dir(header);
  console.dir(param);
  post(addr, param, header, res => {
    log(res);
    var data = JSON.parse(res);
    dir(data);
  });
};
function getAllowedMmeber() {
  const addr = url + port + '/api/post/allowed';   //끝에 슬래시를 붙이지 않는다.
  log(addr);
  const header = { 
    'Content-Type': 'application/json',
    authorization: "Bearer " + token,
  };

  const param = {
    member_id: '5e25e7ce-0ea1-11ec-af59-0242ac110003',
    id: 'db01c0b0-807b-11eb-bc7c-df4acec7a4d9',
  };
  console.dir(header);
  console.dir(param);
  get(addr, param, header, res => {
    log(res);
    var data = JSON.parse(res);
    dir(data);
  });
};
function userPostList() {
  const addr = url + port + '/api/post/list';   //끝에 슬래시를 붙이지 않는다.
  log(addr);
  const header = { 
    'Content-Type': 'application/json',
    authorization: "Bearer " + token,
  };

  const param = {    
    member_id: '5e25e7ce-0ea1-11ec-af59-0242ac110003',
    // member_id: 'f45a6d1e-1f9f-11ec-8bfa-0242ac110003',
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
    imgEl.src = res;
  });
};
function userPostUpdate() {
  const addr = url + port + '/api/post';   //끝에 슬래시를 붙이지 않는다.
  log(addr);
  const header = { 
    'Content-Type': 'application/json',
    authorization: "Bearer " + token,
  };

  const param = {
    post: {
      id: '6a9b70ca-2678-11ec-bec4-0242ac110003',
      title: 'hi5',
      contents: 'remember',
      important: true,
      post_type: 0, // 0: post, 1: album
      is_published: true,
      allowed_class: ['d3a7e2e0-807b-11eb-bc7c-df4acec7a4d9'],  // 배열(클래스 id)
      allowed_member: ['d4386310-807b-11eb-bc7c-df4acec7a4d9', '5e25e7ce-0ea1-11ec-af59-0242ac110003'], // 배열(멤버 id)
      file_list: ['b5e6c2a0-806a-11eb-9944-815ce606479f'], // 배열(file id)
      survey_id: '0a82d460-86de-11eb-9385-477042e8f917',
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
function userPost() {
  const addr = url + port + '/api/post';   //끝에 슬래시를 붙이지 않는다.
  log(addr);
  const header = { 
    'Content-Type': 'application/json',
    authorization: "Bearer " + token,
  };

  const param = {
    post: {
      title: '',
      contents: '',
      important: true,
      post_type: 0, // 0: post, 1: album
      is_published: true,
      allowed_class: ['d3a7e2e0-807b-11eb-bc7c-df4acec7a4d9'],  // 배열(클래스 id)
      allowed_member: ['d4386310-807b-11eb-bc7c-df4acec7a4d9', '5e25e7ce-0ea1-11ec-af59-0242ac110003'], // 배열(멤버 id)
      file_list: ['b5e6c2a0-806a-11eb-9944-815ce606479f'], // 배열(file id)
      survey_id: '0a82d460-86de-11eb-9385-477042e8f917',
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