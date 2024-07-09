function solution(sizes) {
    var rotated = sizes.map(([w,h])=> w < h ? [h,w]:[w,h]);
    return Math.max.apply(null,rotated.map((rotated)=>rotated[0])) * Math.max.apply(null,rotated.map((rotated)=>rotated[1]));
}