function judge(arr){
  for(var i=0;i<arr.length;i++){
    if(arr[i].isCurrentStatus&&arr[i].isShadowed){
       console.log('bule');
    }else if(arr[i].isShadowed){
       console.log('gray');
    }
    if(arr.length===1){
    var div= document.getElementsByClassName('stop')[0];
     div.style.display='block';
    }
  }
}
var arr=[
  {"name":"待接单","status":"WAIT_ACCEPT","isShadowed":true},
  {"name":"待发货","status":"WAIT_DELIVER","isShadowed":true,"isCurrentStatus":true},
  {"name":"验货入库","status":"STOCK_IN"},
  {"name":"已完成","status":"DELIVERED"}];
var arr1=[{"name":"已完成","status":"DELIVERED"}];
judge(arr);