var v = document.getElementById('composition');

setTimeout(function() {
  v.play();
  document.getElementById('start').style.display = 'none';
  v.style.display = '';
}, 3000);

var handlers = {
  1: function(){
    if (v.currentTime >= 12) {
      var text = document.getElementById('love-song');
      var flowers = document.getElementById('flowers');
      v.pause();
      v.style.display = 'none';
      text.style.display = '';
      flowers.style.display = '';
      setTimeout(function() {
        text.style.display = 'none';
        flowers.style.display = 'none';
        v.currentTime = 12.85;
        v.style.display = '';
        v.play();
        v.ontimeupdate = handlers[3];
      }, 4000);
    }
  },
  // not used
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
      }, 3000);
    }
  },
  4: function () {
    if (v.currentTime >= 164) {
      var text = document.getElementById('guests');
      v.pause()
      v.style.display = 'none';
      text.style.display = '';
      setTimeout(function() {
        text.style.display = 'none';
        v.currentTime = 177;
        v.style.display = '';
        v.play();
        v.ontimeupdate = handlers[5];
      }, 3000);
    }
  },
  5: function () {
    if (v.currentTime >= 242) {
      var text = document.getElementById('gift');
      v.pause()
      v.style.display = 'none';
      text.style.display = '';
    }
  },
}


v.ontimeupdate = handlers[1];
