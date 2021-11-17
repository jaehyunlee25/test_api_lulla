const header = { 'Content-Type': 'application/json' };

/*
const url = 'http://localhost:';
const port = '3000';
*/

const url = 'http://dev.lulla.co.kr:';
const port = '1000';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQzN2I1NGEwLTgwN2ItMTFlYi1iYzdjLWRmNGFjZWM3YTRkOSIsIm5hbWUiOiJqYWVoeXVubGVlIiwiZXhwIjoxNjY2Mjg2Mzg4LjAyNywiaWF0IjoxNjM1MTgyMzg4fQ.XWtuurXyvk-ertKA2ZRhfclzEIimOukSMML6K-QRVeo";

//signup('local','naver');
signin('local','google');
//signout();
//getInfo();
//setPassword('12345');
//localSignin('123456');
//resetPassword('123456');
//getUserIdFromToken();

// const type = 0;
// generateCode(type);
// matchCode(8236, type);

// school();
// registerToken();

function registerToken() {
  const addr = url + port + '/api/auth/register-token';   //끝에 슬래시를 붙이지 않는다.
  header.authorization = "Bearer " + token;
  const param = {
    user_info: {
      device_token: 'dfsfgsdfgsdfgsdfgsdfsfd',
      type: 0
    }
  };
  post(addr, param, header, res => {
    log(res);
    var data = JSON.parse(res);
    dir(data);
  });
};
function school(){
  //const addr = url + port + '/api/school/';
  const addr = url + port + '/api/school';   //끝에 슬래시를 붙이지 않는다.
  header.authorization = "Bearer " + token;
  post(addr, {}, header, res => {
    log(res);
    var data = JSON.parse(res);
    dir(data);
  });
};

function getUserIdFromToken(){
  const addr = url + port + '/api/auth/getUserIdFromToken';
  header.authorization = "Bearer " + token;
  get(addr, {}, header, res => {
    var data = JSON.parse(res);
    dir(data);
  });
};
function resetPassword(password){
  const addr = url + port + '/api/auth/reset-password';
  post(addr, {user_info:{ phone: '010-9000-6260', password }}, header, res => {
    var data = JSON.parse(res);
    dir(data);
  });
};
function localSignin(password){
  const addr = url + port + '/api/auth/signin';
  const param = {
    type: 'local',            //필수
    user_info: {
      email: 'jaehyunlee25@gmail.com',  //필수
      password,        //필수
    }
  };
  post(addr, param, header, res => {
    var data = JSON.parse(res);
    dir(data);
  });
};
function setPassword(password){
  const addr = url + port + '/api/auth/set-password';
  header.authorization = "Bearer " + token;
  post(addr, {user_info:{ password }}, header, res => {
    var data = JSON.parse(res);
    dir(data);
  });
};
function getInfo(){
  const addr = url + port + '/api/auth/get-info';
  header.authorization = "Bearer " + token;
  get(addr, {}, header, res => {
    var data = JSON.parse(res);
    dir(res);
  });
};
function signout(){
  const addr = url + port + '/api/auth/signout';
  header.authorization = "Bearer " + token;
  get(addr, {}, header, res => {
    var data = JSON.parse(res);
    dir(res);
  });
};
function matchCode(num, type){
  var addr = url + port + '/api/auth/match-code',
    param = {
      verify: {
        phone: '010-9000-6260',
        code: num,
        type: type,  //0: 회원가입 시인증, 1: 이메일 찾기 시 인증, 2: 비밀번호 재설정 시 인증, 3 휴대폰 번호변경
      }
    };
  if (type === 3) param.verify.user_id = 'd37b54a0-807b-11eb-bc7c-df4acec7a4d9';
  post(addr,param,header,res=>{
    var data = JSON.parse(res);
    dir(data);
  });
};
function generateCode(type){
    const addr = url + port + '/api/auth/generate-code',
    param = {
      verify: {
        phone: '010-9000-6260',
        type: type,  //0: 회원가입 시인증, 1: 이메일 찾기 시 인증, 2: 비밀번호 재설정 시 인증, 3 휴대폰 번호변경
      }
    };
  
  post(addr, param, header, res=>{
    var data = JSON.parse(res);
    dir(data);
  });
};
function checkEmail(){
  var url = url + port + '/api/auth/check-email',
    param = {
      user_info: { email: 'jaehyunlee25@gmail.com' }
    };
  post(url, param, header, res=>{
    var data = JSON.parse(res);
    dir(data);
  });
};
function signin(type, opt){
  const addr = url + port + '/api/auth/signin';
  const param = getParamForSignIn(type, opt);  // local | social
  const header = { 'Content-Type': 'application/json' };
  post(addr, param, header, res => {
    log(res);
    var data = JSON.parse(res);
    dir(data);
  });
};
function signup(type, opt){
  const addr = url + port + '/api/auth/signup';
  const param = getParamForSignUp(type, opt);  // local | social
  const header = { 'Content-Type': 'application/json' };
  post(addr, param, header, res => {
    log(res);
    var data = JSON.parse(res);
    dir(data);
  });
};
function getParamForSignIn(type, opt){  //for signup
  var params={
    //local
    local: {
      type: 'local',            //필수
      user_info: {
        email: 'jaehyunlee25@gmail.com',  //필수
        password: '123456',        //필수
      }
    },
    //social :: 'kakao|naver|google|apple'
    social: {
      type: opt,            //필수
      access_token: '',          //local이 아닐 경우 필수
    }
  };
  return params[type];
};
function getParamForSignUp(type, opt){  //for signup
  var params={
    //local
    local: {
      type: 'local',            //필수
      user_info: {
        email: 'jaehyunlee25@naver.com',  //필수
        password: '1234',        //필수
        phone: '01090006260',      //필수
        name: 'jaehyunlee',        //필수
      }
    },
    //social :: 'kakao|naver|google|apple'
    social: {
      type: opt,            //필수
      access_token: '',          //local이 아닐 경우 필수
      user_info: {
        phone: '01012345678',      //필수
        name: 'jaehyunlee'        //필수
      }
    }
  };
  return params[type];
};