// Bai_Du_App

function covertStr(str) {
  let result = [];
  if(!str) {
    console.error('参数不能为空！');
    return;
  } 
  
  let temp = Array.from(str);
  temp.forEach((item, index) => {
    result.push(item.toLowerCase());
  })
  return result.join('').replace(/_/g, '');
}

console.log(covertStr('Bai_Du_App'));