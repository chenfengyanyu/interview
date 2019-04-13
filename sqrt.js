// 实现 sqrt 函数
function sqrtNum(num) {
    let x1 = num;
    let x2 = num/2;
    while(Math.abs(x1-x2) > 0.00000001)
    {
        x1 = x2;
        x2 = (x1 + num / x1)/2;
    }
    return x1;
}

sqrtNum(2); // 1.4142135623746899