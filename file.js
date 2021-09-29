const header = { 'Content-Type': 'application/json' };

/*  
const url = 'http://localhost:';
const port = '3000'; 
*/
const url = 'http://dev.lulla.co.kr:';
const port = '80';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQzN2I1NGEwLTgwN2ItMTFlYi1iYzdjLWRmNGFjZWM3YTRkOSIsIm5hbWUiOiJqYWVoeXVubGVlIiwiZXhwIjoxNjYwODI1NzM5LjIyLCJpYXQiOjE2Mjk3MjE3Mzl9.PDQ36-krf9JGhPKXYMcFdOQdKzVa27H_pOMHP3fmvR8";

uploadfile();

function uploadfile(){
  const addr = url + port + '/api/file';   //끝에 슬래시를 붙이지 않는다.
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