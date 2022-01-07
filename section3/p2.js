let str = "found7,  time:  study;  Yduts;  emit,  7Dnuof";

function solution(str) {
    let ans = "YES";
    let tmp = str.toUpperCase();
    tmp = tmp.replace(/\s|;|:|,/g, "");
    console.log(tmp);

    for (let i = 0; i < tmp.length; i++) {
        if (tmp[i] !== tmp[tmp.length - 1 - i]) {
            ans = "NO";
            break;
        }
    }
    return ans;
}

console.log(solution(str));
