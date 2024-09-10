function solution(s, skip, index) {
    var answer = '';
    var strArr = [...s].map(x => x.charCodeAt()); // 입력 문자열을 아스키 코드 배열로 변환
    var skipArr = [...skip].map(x => x.charCodeAt()); // skip 문자열을 아스키 코드 배열로 변환

    for (let i = 0; i < strArr.length; i++) {
        var count = 0;
        while (count < index) { // index만큼 뒤로 이동
            strArr[i]++;
            
            if (strArr[i] === 123) { // 'z'를 넘어가면 'a'로 돌아감
                strArr[i] = 97;
            }

            if (!skipArr.includes(strArr[i])) { // skip에 포함되지 않은 문자는 카운트 증가
                count++;
            }
        }
    }

    answer = strArr.map(x => String.fromCharCode(x)).join(''); // 다시 문자열로 변환
    return answer;
}
