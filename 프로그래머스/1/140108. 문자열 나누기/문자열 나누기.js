function solution(s) {
    var answer = 0;
    var equalXCnt = 0;
    var diffXCnt = 0;
    var resultArr = [];
    var x = 0;
    

        for(let i = 0; i<s.length;i++) {
            if(s[i] === s[x]) {
                equalXCnt++;
            } else {
                diffXCnt++;
            } 

            if(equalXCnt === diffXCnt) {
                resultArr.push(s.slice(x,i+1))
                x = i+1;
            }
    }
    
    return resultArr.join('').length === s.length ? resultArr.length : resultArr.length+1;
}