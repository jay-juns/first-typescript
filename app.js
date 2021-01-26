"use strict";
var bio = '나는 문자열이다';
var score = 233;
var go = true;
var year = 2021;
var score1 = {
    bio: '바꿔보자 정보를',
    score: 12,
    year: 2021,
    go: false
};
function getInfomation(score) {
    return {
        bio: '바꿔보자 정보를',
        score: 12,
        go: false
    };
}
function saveScore(saveScore) {
}
saveScore(score1);
