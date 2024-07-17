function solution(n, m, section) {
    var answer = 0;
    var lastPaintPos = 0;
    for(let i = 0;i<section.length;i++) {
        if(section[i] > lastPaintPos) {
            lastPaintPos = section[i] + m -1;
            answer++;
        }
    }
    return answer;
}