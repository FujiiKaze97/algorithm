function solution(arr) {
    var answer = 0;
    var arrLength = arr.length;
    if(-10000<=arrLength && arrLength <=10000) {
        for(let i = 0;i<arr.length;i++) {
            answer += arr[i];
        }
        answer /= arrLength;
    }
    
    
    return answer;
}