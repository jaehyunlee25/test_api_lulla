// getProduct();
// setCart();
// getCreatorsByIds();
// getCreatorIdsByProductIds();
// getCart();
// getProductsByIds();
getCartById();

function getCartById() {
    const addr = 'http://localhost:' + '3000' + '/api/editor/getCartById';   //끝에 슬래시를 붙이지 않는다.
    log(addr);
    const header = { 'Content-Type': 'application/json' };
    const param = { cartId: 43 };
    post(addr, param, header, res => {
        log(res);
        var data = JSON.parse(res);
        dir(data);
    });
};
function getProductsByIds(){
    const addr = 'http://localhost:' + '3000' + '/api/creator/getProductsByIds';   //끝에 슬래시를 붙이지 않는다.
    const header = { 'Content-Type': 'application/json' };
    const param = {
        productIds: [1, 2], 
    };
    post(addr, param, header, res => {
        log(res);
        var data = JSON.parse(res);
        dir(data);
    });
};
function getCart(){
    const addr = 'http://localhost:' + '3000' + '/api/editor/getCart';   //끝에 슬래시를 붙이지 않는다.
    const header = { 'Content-Type': 'application/json' };
    const param = {
        userId: 1, 
    };
    post(addr, param, header, res => {
        log(res);
        var data = JSON.parse(res);
        dir(data);
    });
};
function getCreatorIdsByProductIds(){
    const addr = 'http://localhost:' + '3000' + '/api/creator/getCreatorIdsByProductIds';   //끝에 슬래시를 붙이지 않는다.
    const header = { 'Content-Type': 'application/json' };
    const param = {
        productIds: [1, 2], 
    };
    post(addr, param, header, res => {
        log(res);
        var data = JSON.parse(res);
        dir(data);
    });
};
function getCreatorsByIds(){
    const addr = 'http://localhost:' + '3000' + '/api/login/info/getCreatorsByIds';   //끝에 슬래시를 붙이지 않는다.
    const header = { 'Content-Type': 'application/json' };
    const param = {
        creatorIds: [2, 3], 
    };
    post(addr, param, header, res => {
        log(res);
        var data = JSON.parse(res);
        dir(data);
    });
};
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
