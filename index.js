"use strict";
var RedditScore = (function () {
    function RedditScore(base) {
        this.base = 1134028003;
        this.epoch = new Date(1970, 1, 1);
        if (base) {
            this.base = base;
        }
    }
    RedditScore.prototype.hot = function (ups, downs, date) {
        var score = this.score(ups, downs);
        var order = this.order(score);
        var sign = this.sign(score);
        var seconds = this.seconds(date) - this.base;
        var result = sign * order + seconds / 45000;
        return Math.round(Math.pow(10, 7) * result) / Math.pow(10, 7);
    };
    RedditScore.prototype.score = function (ups, downs) {
        return ups - downs;
    };
    RedditScore.prototype.order = function (score) {
        return this.log10(Math.max(Math.abs(score), 1));
    };
    RedditScore.prototype.sign = function (score) {
        if (score > 0) {
            return 1;
        }
        if (score < 0) {
            return -1;
        }
        return 0;
    };
    RedditScore.prototype.seconds = function (date) {
        var td = date.getTime() - this.epoch.getTime();
        return Math.abs(td / 1000);
    };
    RedditScore.prototype.log10 = function (value) {
        return Math.log(value) / Math.LN10;
    };
    return RedditScore;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RedditScore;
//# sourceMappingURL=index.js.map