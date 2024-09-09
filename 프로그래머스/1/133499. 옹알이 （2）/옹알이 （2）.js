function solution(babbling) {
    var answer = 0;
    const word = ["aya", "ye", "woo", "ma"];
    
    babbling.forEach((b) => {
        let isPossible = true;
        
        // 연속된 같은 발음이 있는지 체크
        for (let j = 0; j < word.length; j++) {
            if (b.includes(word[j].repeat(2))) {
                isPossible = false;
                break;
            }
        }
        
        // 연속된 발음이 없다면 각 발음을 지움
        if (isPossible) {
            for (let j = 0; j < word.length; j++) {
                b = b.replaceAll(word[j], ' ');
            }
            
            // 모든 발음이 유효하게 지워졌는지 확인
            if (b.trim().length === 0) {
                answer++;
            }
        }
    });
    
    return answer;
}