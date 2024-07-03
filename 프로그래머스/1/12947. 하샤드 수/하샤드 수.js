function solution(x) {
    var answer = true;
    
    if(x % x.toString().split("").reduce((acc,curr) => acc + parseInt(curr),0) == 0) {
        answer = true;
    } else {
        answer = false;
    }
    return answer;
}
