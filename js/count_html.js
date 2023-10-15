var count_s_sun = 1;
var count_value = 0+"";
function count_p(){
  count_value++;
  var p = document.querySelector("p");
  p.textContent = count_value;
}
function count_m(){
  count_value--;
  var p = document.querySelector("p");
  p.textContent = count_value;
}
function count_r(){
  count_value = 0;
  var p = document.querySelector("p");
  p.textContent = count_value;
}
function count_s(){
  // document.write('<p class="d_w">'+count_value+'</p>')
  if( count_s_sun == 1 ){
    var div_nn = document.querySelector("#div_01");
    div_nn.textContent = count_value;
    console.log("div_01")
    count_s_sun++;
    return;
  }
  if( count_s_sun == 2 ){
    var div_nn = document.querySelector("#div_02");
    div_nn.textContent = count_value;
    console.log("div_02")
    count_s_sun++;
    return;
  }
  if( count_s_sun == 3 ){
    var div_nn = document.querySelector("#div_03");
    div_nn.textContent = count_value;
    console.log("div_03")
    count_s_sun++;
    return;
  }
  if( count_s_sun == 4 ){
    var div_nn = document.querySelector("#div_04");
    div_nn.textContent = count_value;
    console.log("div_04")
    count_s_sun++;
    return;
  }
  if( count_s_sun == 5 ){
    var div_nn = document.querySelector("#div_05");
    div_nn.textContent = count_value;
    console.log("div_05")
    count_s_sun++;
    return;
  }
  if( count_s_sun == 6 ){
    alert("기록할 공간이 없습니다. 새로고침 해주세요. (기록한 값은 초기화 됩니다!)")
  }
}
function div_cl(n){
  if(event.ctrlKey){
    count_value = document.querySelector("#div_0"+n).innerHTML;
    var p = document.querySelector("p");
    p.textContent = count_value;
  }
}