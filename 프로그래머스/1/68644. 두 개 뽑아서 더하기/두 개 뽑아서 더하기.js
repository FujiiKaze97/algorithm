function solution(numbers) {
    var answer = [];
    for(let i = 0;i<numbers.length;i++) {
        for(let j= 0;j<numbers.length;j++) {
            j!==i ?  answer.indexOf(numbers[i] + numbers[j]) === -1 ? answer.push(numbers[i] + numbers[j]) : 0 : 0;
        }
    }
    return answer.sort((a,b) => a-b);
}