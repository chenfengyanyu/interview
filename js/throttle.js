function throttle(fn, delay) {
  let timer = null;
  return function() {
    let ctx = this;
    if(!timer) {
      timer = setTimeout(function(){
        fn.apply(ctx, arguments);
        timer = null;
      }, delay)
    }
  }
}

function handle() {
  console.log('Run~');
}

window.addEventListener('scroll', throttle(handle, 1000));