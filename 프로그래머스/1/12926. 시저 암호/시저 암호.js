function solution(s, n) {
    var strarr = s.split("");
    var answer = "";
    
    for(let i = 0; i < strarr.length;i++) {
        var codeNum = strarr[i].charCodeAt();
        if(codeNum!==32) {
            for(let j = 0; j < n;j++) {
                codeNum++;
                codeNum = codeNum === 123 ? 97: codeNum;
                codeNum = codeNum === 91 ? 65: codeNum;
            }
        }
        answer += String.fromCharCode(codeNum);
    }
    return answer;
}
