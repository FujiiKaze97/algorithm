function solution(s) {
    var answer = [];
    var num = 0;
    for(let i = 0; i<s.length;i++) {
        num = -1;
        for(let j = 0; j<i;j++) {
            num = s[i] === s[j] ? i-j : num;
        }
        answer.push(num);
    }
    return answer;
}