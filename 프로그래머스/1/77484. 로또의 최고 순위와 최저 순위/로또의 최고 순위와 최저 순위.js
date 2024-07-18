function solution(lottos, win_nums) {
    var answer = [];
    var num = win_nums.filter(x => lottos.includes(x)).length;
    var bestWorstNum = 0;
    
    
    while(answer.length <2) {
    switch (answer.length !== 1 ? lottos.filter(x => 0 === x).length + num : num)  {
        case 6:
            bestWorstNum = 1;
        break;
        case 5:
            bestWorstNum = 2;
        break;
        case 4:
            bestWorstNum = 3;
        break;
        case 3:
            bestWorstNum = 4;
        break;
        case 2:
            bestWorstNum = 5;
        break;
        default :
            bestWorstNum = 6            
        break; 
    }
    
        answer.push(bestWorstNum);
       
    }
    return answer;
}