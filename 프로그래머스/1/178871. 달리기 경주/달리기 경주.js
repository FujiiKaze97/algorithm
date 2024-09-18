function solution(players, callings) {
    var answer = players.slice(); // 원본 배열을 복사
    
    // 각 선수의 인덱스를 저장하는 Map 생성
    const indexMap = new Map();
    for (let i = 0; i < answer.length; i++) {
        indexMap.set(answer[i], i);
    }
    
    // callings 배열을 순회하며 순서 변경
    for (let i = 0; i < callings.length; i++) {
        const currentPlayer = callings[i];
        const idx = indexMap.get(currentPlayer);
        
        if (idx > 0) { // 인덱스가 0보다 클 때만 순서를 변경
            const prePlayer = answer[idx - 1];
            
            // 배열에서 순서를 교환
            answer[idx - 1] = currentPlayer;
            answer[idx] = prePlayer;
            
            // Map에서 인덱스를 업데이트
            indexMap.set(currentPlayer, idx - 1);
            indexMap.set(prePlayer, idx);
        }
    }
    
    return answer;
}
