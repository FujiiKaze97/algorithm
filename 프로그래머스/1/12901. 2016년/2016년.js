function solution(a, b) {
    var weeks = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    return weeks[new Date(2016+"-"+a+"-"+b).getDay()];
}