let str = "KKHSSSSSSSE";

function solution(str) {
    let ans = "";
    let tmp = 1;
    let pad_str = "";
    let padding = "1";
    pad_str += padding;
    pad_str += str;

    for (let i = 1; i < pad_str.length; i++) {
        if (pad_str[i] !== pad_str[i - 1]) {
            ans += pad_str[i];
            for (let j = i + 1; j < pad_str.length; j++) {
                if (pad_str[i] !== pad_str[j]) break;
                else {
                    tmp++;
                }
            }
            if (tmp > 1)
                ans += String(tmp);
            tmp = 1;
        }
    }
    return ans;
}

console.log(solution(str));