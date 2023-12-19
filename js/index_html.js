function is_checked(name){
  // 1. checkbox element를 찾습니다.
  const checkbox_panser = document.getElementById("checkbox_"+name);

  // 2. checked 속성을 체크합니다.
  const is_checked_panser = checkbox_panser.checked; //true == 채크 /false == 채크 안됌
  
  if( is_checked_panser == true ){
    document.querySelector('#desc_'+name).style.display = "block";
  } 
  if( is_checked_panser == false ){
    document.querySelector('#desc_'+name).style.display = "none";
  }
}
/* window.onload = function(){
  if (confirm("편지가 왔어요!\n확인해 보실래요?\n확인(예) 또는 취소(아니오)를 선택해주세요.")) {
    // 취소(아니오) 버튼 클릭 시 이벤트
    window.open("../popup.html")
  }
} */
// var el_button = document.querySelectorAll(".bu");
// el_button.forEach(el => {
//   el.addEventListener('mousemove' , function(e) {
//     var x = e.offsetX
//     var y = e.offsetY
//     var rotateY = -1/5 * x + 20
//     var rotateX = 1/5 * y - 20
//     el.style = `transform : perspective(100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
//   })
// });