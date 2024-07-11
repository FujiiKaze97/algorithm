function solution(k, m, score) {
    var answer = 0;
    var appleCnt = score.length;
    score.sort((a,b)=>a - b);
    while(score.length>=m) {
        if(appleCnt >= m) {
            answer += Math.min(...score.splice(score.length - m,m)) * m;
        }
    }
    return answer;
}