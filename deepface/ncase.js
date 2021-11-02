const cf = new jCommon();
const header = { 'Content-Type': 'application/json' };

const url = 'http://jaehyunlee.co.kr:';
const port = '8080';

btnMove.onclick = function () {
  location.href = 'index.html';
};
btnFind.onclick = function () {
  const addr = url + port + '/find';
  const param = { target: 'jhlee_1.jpg' };
  const table = document.createElement("table");
  table.border = 1;
  table.style.width = '50%';
  table.style.textAlign = 'center';
  table.style.margin = 'auto';
  const tr = document.createElement("tr");
  ['순위', '유사도', '이미지'].forEach(str => {
    const td = document.createElement("td");
    td.innerHTML = str;
    td.style.minWidth = '30%';
    td.style.textAlign = 'center';
    tr.appendChild(td);
  });
  table.appendChild(tr);
  post(addr, param, header, (res) => {
    var data = JSON.parse(res);
    dir(data);
    data.forEach((obj, i) => {
      log(obj.identity, i);
      const tr = document.createElement("tr");

      const td1 = document.createElement("td");
      tr.appendChild(td1);
      td1.innerHTML = i + 1;

      const td2 = document.createElement("td");
      tr.appendChild(td2);
      td2.innerHTML = cf.rommify((1 - obj['VGG-Face_cosine']) * 100, 2) + " %";

      const td3 = document.createElement("td");
      tr.appendChild(td3);

      const name = obj.identity.split("/").lo();
      const img = new Image();
      img.src = "http://jaehyunlee.co.kr:8080/image/" + name;
      img.style.maxWidth = 200 + "px";
      td3.appendChild(img);

      table.appendChild(tr);
    });
    elResult.appendChild(table);
  });
};
Array.prototype.lo = function() {
  return this[this.length - 1];
};
