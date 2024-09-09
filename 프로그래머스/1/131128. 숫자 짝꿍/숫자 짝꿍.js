function solution(X, Y) {
    var answer = '';
    let xArr = X.split('');
    let yArr = Y.split('');
    
    for(let i = 0; i < 10;i++) {
        let xCnt = xArr.filter(x => Number(x) === i ).length;
        let yCnt = yArr.filter(y => Number(y) === i ).length;
        answer+= String(i).repeat(Math.min(xCnt,yCnt));
    }
    
    
    answer = answer.length === 0 ? "-1" : Number(answer) === 0 ? "0" : answer;
    

    return answer.split('').sort((a,b)=>Number(b) - Number(a)).join("");
}