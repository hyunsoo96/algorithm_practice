let str = "teachermode";
let char = "e";

function solution(str, char) {
    let index = [];
    let ans = [];
    tmp = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < str.length; i++) {
        if (str[i] == char) index.push(i);
    }

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < index.length; j++) {
            if (Math.abs(i - index[j]) < tmp) {
                tmp = Math.abs(i - index[j]);
            }
        }
        ans.push(tmp);
        tmp = Number.MAX_SAFE_INTEGER;
    }
    return ans;
}

console.log(solution(str, char));