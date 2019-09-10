//this is the slide section
var slide = 1;
show(slide);

function plus(n){
  show(slide += n);
}

function show(n){
  var i ;
  var x = document.getElementsByClassName('con');
  if (n > x.length) {slide = 1}
  if (n < 1) {slide = x.length}
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slide-1].style.display = "block";
}

//this is the content section
function openNav(n) {
  if (n == 0) {
    document.getElementById("scout").style.height = "100%";
  }
  else if (n == 1) {
    document.getElementById("girl").style.height = "100%";
  }
  else if (n == 2) {
    document.getElementById("puteri").style.height = "100%";
  }
  else if (n == 3) {
    document.getElementById("polis").style.height = "100%";
  }
  else if (n == 4) {
    document.getElementById("bomba").style.height = "100%";
  }
  else if (n == 5) {
    document.getElementById("krs").style.height = "100%";
  }
  else if (n == 6) {
    document.getElementById("bb").style.height = "100%";
  }
  else if (n == 7) {
    document.getElementById("pbsm").style.height = "100%";
  }
  else if (n == 8) {
    document.getElementById("tae").style.height = "100%";
  }
  else if (n == 9) {
    document.getElementById("wushu").style.height = "100%";
  }
  else if (n == 10) {
    document.getElementById("silat").style.height = "100%";
  }
  else if (n == 11) {
    document.getElementById("silam").style.height = "100%";
  }
  //club acad
  else if (n == 12) {
    document.getElementById("mel").style.height = "100%";
  }
  else if (n == 13) {
    document.getElementById("ing").style.height = "100%";
  }
  else if (n == 14) {
    document.getElementById("cina").style.height = "100%";
  }
  else if (n == 15) {
    document.getElementById("tamil").style.height = "100%";
  }
  else if (n == 16) {
    document.getElementById("sej").style.height = "100%";
  }
  else if (n == 17) {
    document.getElementById("seni").style.height = "100%";
  }
  else if (n == 18) {
    document.getElementById("agama").style.height = "100%";
  }
  else if (n == 19) {
    document.getElementById("stem").style.height = "100%";
  }
  else if (n == 20) {
    document.getElementById("hidup").style.height = "100%";
  }
  //club perkhid
  else if (n == 21) {
    document.getElementById("kop").style.height = "100%";
  }
  else if (n == 22) {
    document.getElementById("kom").style.height = "100%";
  }
  else if (n == 23) {
    document.getElementById("bud").style.height = "100%";
  }
  else if (n == 24) {
    document.getElementById("kris").style.height = "100%";
  }
  else if (n == 25) {
    document.getElementById("kauns").style.height = "100%";
  }
  else if (n == 26) {
    document.getElementById("interact").style.height = "100%";
  }
  else if (n == 27) {
    document.getElementById("jen").style.height = "100%";
  }
  else if (n == 28) {
    document.getElementById("sum").style.height = "100%";
  }
  else if (n == 29) {
    document.getElementById("alam").style.height = "100%";
  }
  else if (n == 30) {
    document.getElementById("malaysia").style.height = "100%";
  }
  else if (n == 31) {
    document.getElementById("rukun").style.height = "100%";
  }
  else if (n == 32) {
    document.getElementById("spbt").style.height = "100%";
  }
  //1m1s
  else if (n == 33) {
    document.getElementById("olah").style.height = "100%";
  }
  else if (n == 34) {
    document.getElementById("jar").style.height = "100%";
  }
  else if (n == 35) {
    document.getElementById("bad").style.height = "100%";
  }
  else if (n == 36) {
    document.getElementById("sof").style.height = "100%";
  }
  else if (n == 37) {
    document.getElementById("ping").style.height = "100%";
  }
  else if (n == 38) {
    document.getElementById("sep").style.height = "100%";
  }
  else if (n == 39) {
    document.getElementById("tak").style.height = "100%";
  }
  else if (n == 40) {
    document.getElementById("hoki").style.height = "100%";
  }
  else if (n == 41) {
    document.getElementById("baling").style.height = "100%";
  }
  else if (n == 42) {
    document.getElementById("pet").style.height = "100%";
  }
  else if (n ==3) {
    document.getElementById("bask").style.height = "100%";
  }
  //rumah
  else if (n == 44) {
    document.getElementById("baines").style.height = "100%";
  }
  else if (n == 45) {
    document.getElementById("merah").style.height = "100%";
  }
  else if (n == 46) {
    document.getElementById("hijau").style.height = "100%";
  }
  else if (n == 47) {
    document.getElementById("kuning").style.height = "100%";
  }
}

function closeNav() {
  document.getElementById("scout").style.height = "0%";
  document.getElementById("girl").style.height = "0%";
  document.getElementById("girl").style.height = "0%";
  document.getElementById("puteri").style.height = "0%";
  document.getElementById("polis").style.height = "0%";
  document.getElementById("bomba").style.height = "0%";
  document.getElementById("krs").style.height = "0%";
  document.getElementById("bb").style.height = "0%";
  document.getElementById("pbsm").style.height = "0%";
  document.getElementById("tae").style.height = "0%";
  document.getElementById("wushu").style.height = "0%";
  document.getElementById("silat").style.height = "0%";
  document.getElementById("silam").style.height = "0%";
  document.getElementById("mel").style.height = "0%";
  document.getElementById("ing").style.height = "0%";
  document.getElementById("cina").style.height = "0%";
  document.getElementById("tamil").style.height = "0%";
  document.getElementById("sej").style.height = "0%";
  document.getElementById("seni").style.height = "0%";
  document.getElementById("agama").style.height = "0%";
  document.getElementById("stem").style.height = "0%";
  document.getElementById("hidup").style.height = "0%";
  document.getElementById("kop").style.height = "0%";
  document.getElementById("kom").style.height = "0%";
  document.getElementById("bud").style.height = "0%";
  document.getElementById("kris").style.height = "0%";
  document.getElementById("kauns").style.height = "0%";
  document.getElementById("interact").style.height = "0%";
  document.getElementById("jen").style.height = "0%";
  document.getElementById("sum").style.height = "0%";
  document.getElementById("alam").style.height = "0%";
  document.getElementById("malaysia").style.height = "0%";
  document.getElementById("rukun").style.height = "0%";
  document.getElementById("spbt").style.height = "0%";
  document.getElementById("olah").style.height = "0%";
  document.getElementById("jar").style.height = "0%";
  document.getElementById("bad").style.height = "0%";
  document.getElementById("sof").style.height = "0%";
  document.getElementById("ping").style.height = "0%";
  document.getElementById("sep").style.height = "0%";
  document.getElementById("tak").style.height = "0%";
  document.getElementById("hoki").style.height = "0%";
  document.getElementById("baling").style.height = "0%";
  document.getElementById("pet").style.height = "0%";
  document.getElementById("bask").style.height = "0%";
  document.getElementById("baines").style.height = "0%";
  document.getElementById("merah").style.height = "0%";
  document.getElementById("hijau").style.height = "0%";
  document.getElementById("kuning").style.height = "0%";

}
