function solution(n) {
    return  parseInt((parseInt(n,10).toString(3).split("").reverse().join("")),3);
}