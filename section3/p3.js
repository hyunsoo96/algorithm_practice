let str = "g0000en2T0s8eSoft";

function solution(str) {
    let ans = "";

    ans = str.replace(/[a-z]/ig, "");
    // ans = ans.replace(/0/i, "");
    while (ans[0] == 0) {
        ans = ans.replace("0", "");
    }
    return ans;
}

console.log(solution(str));