function solution(k, score) {
    var answer = [];
    var hof = [];
    for(let i = 0;i < score.length;i++) {
        if(hof.length < k) {
            hof.push(score[i]);
        } else {
            // 배열 전체 순환하며 비교 
            if (hof[hof.indexOf(Math.min(...hof))] < score[i]) {
                hof[hof.indexOf(Math.min(...hof))] = score[i];
            }
        }
        answer.push(Math.min(...hof));
    }
    return answer;
}