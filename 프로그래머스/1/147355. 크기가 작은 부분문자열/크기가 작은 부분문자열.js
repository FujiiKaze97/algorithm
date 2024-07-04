function solution(t, p) {
    var answer = 0;
    var charLength = p.length;
    
    for (let i = 0; i<=t.length-charLength;i++) {
        parseInt(t.substr(i,charLength)) <= Number(p) ? answer++:0;
    }
    console.log(answer);
    return answer;
}
