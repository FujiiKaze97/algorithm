function solution(num1, num2) {
    var answer = -1;
    if(-50000<=num1 && num1 <= 50000) {
        if(-50000<=num2 && num2 <= 50000) {
            answer = num1 + num2;   
        }
    }
    
    return answer;
}