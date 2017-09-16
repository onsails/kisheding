
var v = document.getElementById('composition');
v.play();

var handlers = {
  1: function(){
    if (v.currentTime >= 12) {
      var text = document.getElementById('love-song');
      v.pause();
      v.style.display = 'none';
      text.style.display = '';
      setTimeout(function() {
        text.style.display = 'none';
        v.currentTime = 12.85;
        v.style.display = '';
        v.play();
        v.ontimeupdate = handlers[2];
      }, 5000);
    }
  },
  2: function() {
    if (v.currentTime >= 66.6) {
      var text = document.getElementById('brush');
      v.pause()
      v.style.display = 'none';
      text.style.display = '';
      setTimeout(function() {
        text.style.display = 'none';
        v.currentTime = 66.6;
        v.style.display = '';
        v.play();
        v.ontimeupdate = handlers[3];
      }, 5000);
    }
  },
  3: function () {
    if (v.currentTime >= 90.8) {
      var text = document.getElementById('fasion');
      v.pause()
      v.style.display = 'none';
      text.style.display = '';
      setTimeout(function() {
        text.style.display = 'none';
        v.currentTime = 91.3;
        v.style.display = '';
        v.play();
        v.ontimeupdate = handlers[4];
      }, 5000);
    }
  },
  4: function () {
    if (v.currentTime >= 164) {
      var text = document.getElementById('fasion');
      v.pause()
      v.style.display = 'none';
      text.style.display = '';
      setTimeout(function() {
        text.style.display = 'none';
        v.currentTime = 176.9;
        v.style.display = '';
        v.play();
        v.ontimeupdate = null;
      }, 5000);
    }
  },
}


v.ontimeupdate = handlers[1];
