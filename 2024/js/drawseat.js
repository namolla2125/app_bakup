//--------함수--------

/**전에 설정했던 데이터가 없을 경우 호출되는 함수.
 * 하는일:
 * 1. if:: s변수가 true(기본값)일떄 설정하는 화면 불러오기
 * 2. if:: s변수가 false일떄 설정하는 화면 닫기
 */
function getSettingScrenn(s = true){
  if(s == true){
    document.getElementById("setting").style.display = "block"; //아이디가 setting인 요소에 display를 "block"로 바꿈
  }else if(s == false){
    document.getElementById("setting").style.display = "none"; //아이디가 setting인 요소에 display를 "none"로 바꿈
  }
}

function getDrawingScrenn(s = true){
  if(s == true){
    document.getElementById("start").style.display = "block"; //아이디가 drawing인 요소에 display를 "block"로 바꿈
  }else if(s == false){
    document.getElementById("start").style.display = "none"; //아이디가 drawing인 요소에 display를 "none"로 바꿈
  }
}

//--------onload------------------

window.onload = function(){ //접속시
  if( window.localStorage.getItem("drawseatData") == null || window.localStorage.getItem("drawseatData") == undefined){ //전에 설정 했던 데이터가 없으면
    getSettingScrenn(true); //설정화면 호출 함수
  } else{
    getDrawingScrenn(true);
  }
}

//-------------설정------------

document.getElementById("setting_end").onclick = function(){ // 설정완료 버튼 클릭시
  const garo_value_c = document.getElementById("garo").value;
  const sero_value_c = document.getElementById("sero").value;
  const n_name_value_c = document.getElementById("n_name").value;
  const y_name_value_c = document.getElementById("y_name").value;

  console.log(`garo_value: ${garo_value_c}, sero_value: ${sero_value_c}, n_name_value: ${n_name_value_c}, y_name_value: ${y_name_value_c}`);
  // 위 변수는 자리 뽑기 셋팅 div안에 있는 input들에 변수의 값이 기본값이 아닌지 채크하기 위해 만듦
  
  if(garo_value_c != 1 && sero_value_c != 1 && n_name_value_c != "" && y_name_value_c != "") { //기본값이 아닌지 체크 후 데이터저장
    const localStorageData = {
      "garo": garo_value_c,
      "sero": sero_value_c,
      "n_name": n_name_value_c,
      "y_name": y_name_value_c
    }
    window.localStorage.setItem("drawseatData", JSON.stringify(localStorageData)); //데이터 저장
    console.log(window.localStorage.getItem("drawseatData"));
    getSettingScrenn(false); //설정화면 닫기 함수
    alert("설정이 완료 되었습니다. 새로고침을 하면 자리 뽑기가 시작됩니다.");
  } else{
    alert("가로 또는 세로 또는 이름 칸의 값이 기본값입니다. 다시 입력해주세요.");
  }
}

//-----------초기화----------

document.getElementById("reset").onclick = function(){
  if(confirm("초기화 하시겠습니까?")){
    if(!confirm("초기화 하시겠습니까? (5) \n만약에 초기화를 하신다면 \"취소\"를 눌러주세요.")){
      if(!confirm("초기화 하시겠습니까? (4) \n만약에 초기화를 하신다면 \"취소\"를 눌러주세요.")){
        if(confirm("초기화 하시겠습니까? (3) \n만약에 초기화를 하신다면 \"확인\"을 눌러주세요.")){
          if(!confirm("초기화 하시겠습니까? (2) \n만약에 초기화를 하신다면 \"취소\"를 눌러주세요.")){
            if(confirm("초기화 하시겠습니까? (1) \n만약에 초기화를 하신다면 \"확인\"을 눌러주세요.")){
              var pppp = prompt("이번이 마지막 입니다.\n만약 초기화를 원하신다면 \n \"다람쥐 헌 쳇바퀴에 타고파.\"\n라는 문장을 정확하게 입력해 주세요. (큰 따옴표 없이)")
              if(pppp === "다람쥐 헌 쳇바퀴에 타고파."){
                window.localStorage.removeItem("drawseatData");
                alert("초기화가 완료 되었습니다.\n새로고침을 하시면 설정화면으로 돌아갑니다.")
              }
            }
          }
        }
      }
    }
  }
}

//---------뽑기--------------

window.addEventListener('keydown', (event) => {
  var storage_data = JSON.parse(window.localStorage.getItem("drawseatData"));
  if (event.code === "Enter") {
    document.querySelector("table").style.display ='';
    document.getElementById("start").style.display ='none';
    //--------
    
    var n_y_c; //t가 남 f가 여
    var cccc = false;
    var n = storage_data.n_name.split(",");
    var y = storage_data.y_name.split(",");

    if(n.length > y.length){
      n_y_c = true;
    }else if(n.length == y.length){
      n_y_c = false;
    }else if(n.length < y.length){
      n_y_c = false;
    }

    storage_data.garo = Number(storage_data.garo);
    storage_data.sero = Number(storage_data.sero);

    var a_is_a = 0.5;

    var nlc = 0;
    var ylc = 0;

    for(var i = 1; storage_data.sero >= i; i++){
      console.log(86)
      var e = document.createElement("tr"); 
  
       
 
      console.log(91);
      for(var a = 1; storage_data.garo >= (a*2)-1; a = a + 0.5){
        console.log(93);
        console.log(a)
        a_is_a = a_is_a + 0.5;
        var j = false; //소수점 확인 변수
        var k = a_is_a+""; //소수점 확인을 substring 으로 하기위해 type을 string 으로 바꾸는 변수
        var l = a_is_a; // 소수점이 있으면 소수점을 버리고 td에 id를 넣기위해 있는 변수
          
        if(k.substring(2, 3) === "5" || k.substring(3, 4) === "5"){
          j = true;
          l = Math.floor(l);
        }

        if(n_y_c == true){
          if( nlc > n.length){
            
          }else{
            e.innerHTML += `<td id="_${l}_" class="n"></td>`;
            nlc++;
          }
          
        }else if(n_y_c == false){
          if( ylc > y.length){
            
          }else{
            e.innerHTML += `<td id="${l}_" class="y"></td>`;
            ylc++;
          }
        }

        if(storage_data.garo == (a*2)-1){
          cccc = true;
          
          
        }else{
          if(n_y_c == true){
            n_y_c = false;
          }else if(n_y_c == false){
            n_y_c = true;
          }
        }
      }
      if(cccc == true){
        document.querySelector("#table").appendChild(e);
        
        cccc = false;
      }
      
    }
    //-----------------

    n.forEach(e => {
      var n_j = n;
      n = n_j.filter((element) => element !== e);
      n.splice(Math.floor(Math.random() * (n.length) + 1) - 1, 0, e)
      ;
    });
    n.forEach(e => {
      var y_j = y;
      y = y_j.filter((element) => element !== e);
      y.splice(Math.floor(Math.random() * (y.length) + 1) - 1, 0, e)
      ;
    });

    if(n.length > y.length){
      var nl = n.length;
      var yl = y.length;
      var na = "";
      var bb = [];
      for(var i = 1; y.length > 0; i++){
        na = Math.floor(Math.random() * (yl) + 1);
        console.log(i);
        if( document.getElementById(na+"_")?.innerText == '' ){
          document.getElementById(na+"_").textContent = y[0];
          // delete name_list[0];
          bb = y.shift();
        }
      }
      for(var i = 1; n.length > 0; i++){
        na = Math.floor(Math.random() * (nl) + 1);
        
        console.log(i);
        if( document.getElementById("_"+na+"_")?.innerHTML == ''){
          document.getElementById("_"+na+"_").textContent = n[0];
          // delete name_list[0];
          bb = n.shift();
        }else{
          var c = 0;
          document.querySelectorAll(".n").forEach(e => {
            if(e.innerHTML === ""){
              c++;
            }
          });
          if(c == 0){
            var c_l = [];
            document.querySelectorAll(".y").forEach(e => {
              if(e.innerHTML === ""){
                c_l.push(e.id);
                console.log(e.id)
              }
            });
            document.getElementById(c_l[0]).textContent = n[0];
          }
        }
      }
    }else if(n.length < y.length){
      var nl = n.length;
      var yl = y.length;
      var na = "";
      var bb = [];
      for(var i = 1; n.length > 0; i++){
        na = Math.floor(Math.random() * (nl) + 1);
        
        console.log(i);
        if( document.getElementById("_"+na+"_")?.innerHTML == ''){
          document.getElementById("_"+na+"_").textContent = n[0];
          // delete name_list[0];
          bb = n.shift();
        }
      }
        
      for(var i = 1; y.length > 0; i++){
        na = Math.floor(Math.random() * (yl) + 1);
        console.log(i);
        if( document.getElementById(na+"_")?.innerText == '' ){
          document.getElementById(na+"_").textContent = y[0];
          // delete name_list[0];
          bb = y.shift();
        }else{
          var c = 0;
          document.querySelectorAll(".y").forEach(e => {
            if(e.innerHTML === ""){
              c++;
            }
          });
          if(c == 0){
            var c_l = [];
            document.querySelectorAll(".n").forEach(e => {
              if(e.innerHTML === ""){
                c_l.push(e.id);
                console.log(e.id)
              }
            });
            document.getElementById(c_l[0]).textContent = y[0];
          }
        }
        console.log(y)
  
      }
    }



    // for(var i = 1; storage_data.garo <= i; i = i + 0.5){
    //   var j = false; //소수점 확인 변수
    //   var k = i+""; //소수점 확인을 substring 으로 하기위해 type을 string 으로 바꾸는 변수

    //   if(k.substring(2, 3) === "5"){
    //     j = true;
    //   }
    //   var e = `<tr></tr>`
    // }
    //--------
    setTimeout(function() {
      document.querySelector("table").style.transform = "rotate(0deg)";
    }, 100);
    
  }
});
                                     