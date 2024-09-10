function solution(ingredient) {
    let answer = 0;
    let stack = [];
    
    // 재료를 하나씩 처리
    for (let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i]);
        
        // 최근 쌓인 4개의 재료가 햄버거 순서에 맞는지 확인
        if (stack.length >= 4 && 
            stack.slice(-4).join('') === '1231') {
            // 햄버거를 만들 수 있으면 재료 4개 제거
            stack.splice(-4);
            answer++; // 햄버거 하나 완성
        }
    }
    
    return answer;
}