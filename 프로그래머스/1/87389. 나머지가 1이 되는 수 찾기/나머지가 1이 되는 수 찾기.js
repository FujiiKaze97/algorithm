function solution(n) {
    var answer = 0;
    if(3 <= n && n <= 1000000) {
        for(let i = 0;i<=n;i++) {
            if(n % i == 1) {
                answer = i;
                break;
            }
        }
    }
    return answer;
}