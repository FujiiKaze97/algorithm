function solution(n, m) {
    var answer = [];
    var j = 2;
    
    //Greatest Common Divisor
    let gcd;
    //Least Common Multiple
    let lcm;

    for(let i = 1;i<=Math.min(n,m);i++) {
        if(n % i === 0 && m % i === 0) {
           gcd = i;
        }
    }
    answer.push(gcd);
    
    while(true) {
        if((j % n === 0) &&  (j % m === 0)) {
            lcm = j;
            answer.push(j);
            break;
        }
        
       j++;
    }
    return answer;
}