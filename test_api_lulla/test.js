let header = { 'Content-Type': 'application/json' };
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQzN2I1NGEwLTgwN2ItMTFlYi1iYzdjLWRmNGFjZWM3YTRkOSIsIm5hbWUiOiJqYWVoeXVubGVlIiwiZXhwIjoxNjYxOTEyNjc5LjQ1NSwiaWF0IjoxNjMwODA4Njc5fQ.TpdqUGu1pb92to1koVl8Cpt45TU5ITTaHgqthxFwSqc";

createSchool();
//checkSchool('d30ee700-ae09-11eb-990e-9ffdfef10d0a');
//searchSchool();
//update();
// delSchool();
function delSchool(){
    header.authorization = "Bearer " + token;
    var param = {
        member_id: '5e25e7ce-0ea1-11ec-af59-0242ac110003',
    };
    var addr='http://dev.lulla.co.kr:1001/api/school/delete';
    // var addr='http://localhost:3000/api/school/delete';
    var memberId = '080b0a04-0df2-11ec-9361-0242ac110003';
    log(addr);
    post(addr, param, header, res=>{
        var data = JSON.parse(res);
        dir(data);
    });
};
function update(){
    header.authorization = "Bearer " + token;
    var param = {
        member_id: '5e25e7ce-0ea1-11ec-af59-0242ac110003',
        school: {
            id: '5e1e9a3c-0ea1-11ec-afb1-0242ac110003',
            name: '코딩실미도',
            tel: '01090006260',
            admin_name: '안성기',
            address: '인천 앞바다 백령도 인근',
            district_one_id: '67536770-ae09-11eb-8487-35f5c06383b7',
            district_two_id: '675f9c70-ae09-11eb-8487-35f5c06383b7'
        }
    };
    var addr='http://dev.lulla.co.kr:1001/api/school/update';
    //var addr='http://localhost:3000/api/school/update';
    var memberId = '080b0a04-0df2-11ec-9361-0242ac110003';
    log(addr);
    post(addr, param, header, res=>{
        var data = JSON.parse(res);
        dir(data);
    });
};
function searchSchool(){
    //get
    header = {};
    header.authorization = "Bearer " + token;
    var addr='http://dev.lulla.co.kr:1001/api/school';
    //var addr='http://localhost:3000/api/school';
    var memberId = '080b0a04-0df2-11ec-9361-0242ac110003';
    log(addr);
    get(addr, {member_id: memberId, search: '' }, header, res=>{
        var data = JSON.parse(res);
        dir(data);
    });
};
function checkSchool(institutionId){
    header.authorization = "Bearer " + token;
    var param = {
        school: {
            institution_id: institutionId
        }
    };
    var addr='http://mnemosyne.co.kr:1001/api/school/check';
    // var addr='http://localhost:3000/api/school/check';
    log(addr);
    post(addr, param, header, res=>{
        var data = JSON.parse(res);
        dir(data);
    });
};
function createSchool(){
    var addr='http://dev.lulla.co.kr/api/school';
    //var addr='http://localhost:3000/api/school';

    header.authorization = "Bearer " + token;
    var param = {
        school: {
            address: '123456',
            name: 'jae hyun lee',
            district_one_id: '67536770-ae09-11eb-8487-35f5c06383b7',
            district_two_id: '675f9c70-ae09-11eb-8487-35f5c06383b7',
            admin_name: 'jaehyunlee',
            // institutions_id: 'd30ee700-ae09-11eb-990d-9ffdfef10d0a',
            institutions_id: '',
            // userId: 'd37b54a0-807b-11eb-bc7c-df4acec7a4d9',  // 토큰으로 추출해야 하는 것이 아닌가?
            description: '',
            tel: '010-9000-6260',
            // role 관련
            roleName: 'principal',
            roleDescription: 'this job is for the king of the school',
        }
    };
    post(addr, param, header, res=>{
        var data = JSON.parse(res);
        dir(data);
    });
};