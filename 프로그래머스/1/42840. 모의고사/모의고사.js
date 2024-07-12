function solution(answers) {
    var answer = [];
    
    // 반복되는 패턴
    var giveup1 = [1, 2, 3, 4, 5];
    var giveup2 = [2, 1, 2, 3, 2, 4, 2, 5];
    var giveup3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    // 점수 계산을 위한 변수 초기화
    var score1 = 0;
    var score2 = 0;
    var score3 = 0;
    
    // 각 답안에 대해 반복문 실행
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === giveup1[i % giveup1.length]) score1++;
        if (answers[i] === giveup2[i % giveup2.length]) score2++;
        if (answers[i] === giveup3[i % giveup3.length]) score3++;
    }
    
    // 세 사람의 점수 중 최대 점수 찾기
    let maxValue = Math.max(score1, score2, score3);
    
    // 최대 점수를 받은 사람을 배열에 추가
    if (score1 === maxValue) answer.push(1);
    if (score2 === maxValue) answer.push(2);
    if (score3 === maxValue) answer.push(3);
    
    return answer;
}