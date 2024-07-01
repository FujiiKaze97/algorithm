function solution(numbers) {
    var answer = 0;
    var nbLength = numbers.length;
    for(let i = 0;i < nbLength;i++) {
        if(0 <= numbers[i] && numbers[i] <= 1000) {
            if(1 <= nbLength && nbLength <= 100 ) {
                answer += numbers[i];
            }
        }
    }
    answer = answer / numbers.length;

    return answer;
}