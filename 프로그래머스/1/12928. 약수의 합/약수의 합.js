function solution(n) {
    var answer = 0;
    var numArr = [];
    
    for(let i = 1;i <= n;i++) {
        if(n % i == 0) {
            numArr.push(i);
        }
    }    
    return  numArr.reduce((acc,cur)=> acc + cur * 1,0);
}