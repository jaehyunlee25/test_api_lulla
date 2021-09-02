var cf = new jCommon();
var call = new ajaxcallforgeneral();
var param = {
    address: '123456',
    name: 'jae hyun lee',
    districtOneId: '67536770-ae09-11eb-8487-35f5c06383b7',
    districtTwoId: '675f9c70-ae09-11eb-8487-35f5c06383b7',
    adminName: 'jaehyunlee',
    institutionsId: 'd30ee700-ae09-11eb-990d-9ffdfef10d0a',
    userId: '0508ba70-b53e-11eb-be7c-79609d25c20c',  // 토큰으로 추출해야 하는 것이 아닌가?
    description: 'help',
    tel: '010-9000-6260',
    // role 관련
    roleName: 'principal',
    roleDescription: 'this job is for the king of the school',
};
post('http://localhost:3000/api/school',param,res=>{
    var data = JSON.parse(res);
    dir(data);
});