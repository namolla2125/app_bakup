window.onload = function(){
  setTimeout(() => {
    var bgcolor = JSON.parse(localStorage.getItem("namollatoolbox-setting")).bg[0];
    document.querySelector("body").style.backgroundColor = bgcolor;
  }, 1500)
}