function solution(arr, divisor) {
    var answer = [];
    for(let i = 0; i<arr.length;i++) {
        if(arr[i] % divisor == 0) {
            answer.push(arr[i]);
        } 
    }
    
    if(answer.length==0) {
        answer.push(-1);
    }

    //숫자 오름차순으로 정렬하기 위해 비교 함수 전달
    return answer.sort((a,b) => a - b);
}