const cf = new jCommon();
const header = { 'Content-Type': 'application/json' };

const url = 'http://jaehyunlee.co.kr:';
const port = '8080';

btnMove.onclick = function () {
  location.href = 'ncase.html';
};
btnOne.onclick = function () {
  detect('jhlee_1.jpg', imgDetOne, btnAnOne);
};
btnTwo.onclick = function () {
  detect('jhlee_2.jpg', imgDetTwo, btnAnTwo);
};
btnAnOne.onclick = function () {
  analyze('jhlee_1.jpg', (data) => {
    dir(data);
    rectangle(data.region, elBox1);
    information(data, elInfo1);
  });
};
btnAnTwo.onclick = function () {
  analyze('jhlee_2.jpg', (data) => {
    dir(data);
    rectangle(data.region, elBox2);
    information(data, elInfo2);
  });
};
btnCompare.onclick = function () {
  const addr = url + port + '/compare';
  const param = { img1: 'jhlee_1.jpg', img2: 'jhlee_2.jpg' };
  post(addr, param, header, (res) => {
    var data = JSON.parse(res);
    dir(data);
    compreResult(data);
  });
};

function compreResult(data) {
  const keys = Object.keys(data);
  const vals = keys.map((key) =>
    [
      '<b>' + key + '</b>',
      typeof data[key] === 'number'
        ? cf.rommify(data[key] * 100, 2) + ' %'
        : data[key],
    ].join(': ')
  );
  const conformity = cf.rommify(100 - data.distance * 100, 2) + ' %';
  vals.unshift('================================');
  vals.unshift(`같은 사람일 확률: <b>${conformity}</b>`);
  vals.unshift('================================');
  elCompare.innerHTML = vals.join('<br>');
}
function information(data, el) {
  const ar = [];
  ar.push(['나이: ', data.age].join(''));
  ar.push(
    [
      '감정상태: ',
      data.dominant_emotion,
      '(',
      parseInt(data.emotion[data.dominant_emotion]),
      '%)',
    ].join('')
  );
  ar.push(
    [
      '인종: ',
      data.dominant_race,
      '(',
      parseInt(data.race[data.dominant_race]),
      '%)',
    ].join('')
  );
  ar.push(['성별: ', data.gender].join(''));
  el.innerHTML = ar.join('<br>');
}
function rectangle(region, el) {
  el.style.display = 'inline-block';
  el.style.left = region.x - 5 + 'px';
  el.style.top = region.y - 5 + 'px';
  el.style.width = region.w + 'px';
  el.style.height = region.h + 'px';
}
function detect(img_name, el, btn) {
  const addr = url + port + '/detect/' + img_name;
  el.src = addr;
  el.onload = function () {
    btn.style.display = 'inline';
  };
}
function analyze(img_name, fnc) {
  const addr = url + port + '/analyze';
  const param = { img_name: img_name };
  post(addr, param, header, (res) => {
    var data = JSON.parse(res);
    fnc(data);
  });
}
