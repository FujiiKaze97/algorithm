function solution(s) {
    var answer = '';

    var strArr = s.split(" ");
    for(let i = 0;i<strArr.length;i++) {
        for(let j = 0;j<strArr[i].length;j++) {
            if(j%2 === 0) {
                answer += strArr[i][j].toUpperCase();
            } else {
                answer += strArr[i][j].toLowerCase();
            }
        }        
        if(i < strArr.length-1) {
        answer += " ";
        }
    }
    return answer;
}
