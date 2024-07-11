function solution(a, b, n) {
    var answer = 0;
    var bottle = n;
    
    while(bottle >= a) {
         let newCola = Math.floor(bottle / a) * b;
         answer += newCola;       
         bottle = newCola + (bottle % a);
    }
    return answer;
}