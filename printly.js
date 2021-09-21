//getProduct();
setCart();
function setCart(){
    const addr = 'http://localhost:' + '1001' + '/api/editor/setCart';   //끝에 슬래시를 붙이지 않는다.
    const header = { 'Content-Type': 'application/json' };
    const param = {
        userId: 1, 
        productId: 1, 
        edicusProjectId: '', 
        userContent: JSON.stringify({}), 
        thumbnail: ''
    };
    post(addr, param, header, res => {
        log(res);
        var data = JSON.parse(res);
        dir(data);
    });
};
function getProduct(){
    //const addr = url + port + '/api/school/';
    const addr = 'http://localhost:' + '1001' + '/api/creator/getProduct';   //끝에 슬래시를 붙이지 않는다.
    const header = { 'Content-Type': 'application/json' };
    post(addr, { productId: 1 }, header, res => {
        log(res);
        var data = JSON.parse(res);
        dir(data);
    });
};
