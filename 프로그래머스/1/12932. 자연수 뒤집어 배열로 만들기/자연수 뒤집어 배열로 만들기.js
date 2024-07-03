function solution(n) {
    var answer = [];
    var nArr = n+"".split("");
    for(let i = nArr.length-1;i>=0;i--) {
        answer.push(parseInt(nArr[i]));
    }
    return answer;
}
