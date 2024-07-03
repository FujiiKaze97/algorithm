function solution(left, right) {
    var answer = 0;
    var sum = 0;
    for(let i =left;i <= right;i++) {
        for(let j=1;j<=i;j++) {
            answer += i % j === 0 ? 1 : 0;
        }
        sum += answer % 2 === 0 ? i : -i;   
        answer = 0;
    }
    return sum;
}