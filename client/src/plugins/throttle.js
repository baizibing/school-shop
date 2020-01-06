export function throttle(fn,delay){
    var lastTime;
    var timer;
    var _delay = delay || 200;
    return function() {
      var args = arguments;
      // 记录当前函数触发的时间
      var nowTime = Date.now();
      if (lastTime && nowTime - lastTime < _delay) {
        clearTimeout(timer);
        timer = setTimeout(function () {
          // 记录上一次函数触发的时间
          lastTime = nowTime;
          // 修正this指向问题
          fn.apply(this, args);
        }, _delay);
      }else{
        lastTime = nowTime;
        fn.apply(this, args);
      }
    }
}