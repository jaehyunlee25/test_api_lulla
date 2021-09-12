rise(0.01, 30, 0.3);
function rise(unitProfit, set, targetProfitRate){
  var amount = 1000;
  var total = amount;
  var targetProfit = amount * (1 + targetProfitRate);
  var i = 0;
  while(true){
    i++;
    total += total * unitProfit;
    console.log(i, total, targetProfit);
    if (total > targetProfit) break;
  }
  //log(i,total);
};