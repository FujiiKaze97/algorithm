function solution(food) {
    var answer = '';
    var s1;

    for(let i = 1;i<food.length;i++) {
        for(let j = 0;j<Math.floor(food[i]/2);j++) {
            answer+=i;
        }
    }
    answer+='0';
    
    for(let i = food.length-1;i>0;i--) {
        for(let j = 0;j<Math.floor(food[i]/2);j++) {
            answer+=i;
        }
    }
    return answer;
}