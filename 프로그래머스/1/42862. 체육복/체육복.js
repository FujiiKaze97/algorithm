function solution(n, lost, reserve) {
    // 잃어버린 학생과 여벌 체육복을 가진 학생의 목록을 정렬합니다.
    lost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);

    // 여벌 체육복을 가진 학생이 체육복을 잃어버린 학생의 목록에서 삭제되면 안됩니다.
    // 따라서 먼저 여벌 체육복을 가진 학생과 잃어버린 학생이 겹치는 경우를 처리합니다.
    for (let i = 0; i < lost.length; i++) {
        for (let j = 0; j < reserve.length; j++) {
            if (lost[i] === reserve[j]) {
                lost.splice(i, 1);
                reserve.splice(j, 1);
                i--; // 인덱스 조정
                break;
            }
        }
    }

    // 이제 여벌 체육복을 가진 학생이 잃어버린 학생에게 체육복을 빌려줄 수 있는지 확인합니다.
    for (let i = 0; i < lost.length; i++) {
        for (let j = 0; j < reserve.length; j++) {
            if (lost[i] === reserve[j] - 1 || lost[i] === reserve[j] + 1) {
                lost.splice(i, 1);
                reserve.splice(j, 1);
                i--; // 인덱스 조정
                break;
            }
        }
    }

    // 체육복을 잃어버린 학생을 제외한 나머지 학생들은 체육수업을 들을 수 있습니다.
    return n - lost.length;
}
