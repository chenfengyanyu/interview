function debounce(fn, wait) {
  let timer = null;
  return function () {
    if(timer !== null) clearTimeout(timer);
    timer = setTimeout(fn, wait);
  }
}

function handle() {
  console.log('Run~')
}

window.addEventListener('scroll', debounce(handle, 1000));