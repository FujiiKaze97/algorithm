function solution(n)
{
    var answer = 0;
    
    if(n<=100000000) {
        answer = String(n).split('').reduce((acc, cur) => acc + cur * 1, 0);
    }
    return answer;
}