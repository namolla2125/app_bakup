var _1_ = "";
var _2_ = "";
var _3_ = "";
var _4_ = "";
var _5_ = "";
var _6_ = "";

function output(){
  _1_ = Math.floor(Math.random() * 45 + 1);
  _2_ = Math.floor(Math.random() * 45 + 1);
  _3_ = Math.floor(Math.random() * 45 + 1);
  _4_ = Math.floor(Math.random() * 45 + 1);
  _5_ = Math.floor(Math.random() * 45 + 1);
  _6_ = Math.floor(Math.random() * 45 + 1);

  document.querySelector("#_1").textContent = _1_;
  document.querySelector("#_2").textContent = _2_;
  document.querySelector("#_3").textContent = _3_;
  document.querySelector("#_4").textContent = _4_;
  document.querySelector("#_5").textContent = _5_;
  document.querySelector("#_6").textContent = _6_;
}