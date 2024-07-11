function solution(cards1, cards2, goal) {
    var answer = '';
    
    var resultStr = [];
    
    for(let i = 0; i < goal.length; i++) {
            if (cards1[0] === goal[i]) {
                resultStr.push(cards1[0]);
                cards1.shift();
            } else if (cards2[0] === goal[i]) {
                resultStr.push(cards2[0]);
                cards2.shift();
            }
    }
    return JSON.stringify(goal) === JSON.stringify(resultStr) ? "Yes" : "No";
}