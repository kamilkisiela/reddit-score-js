export default class RedditScore {
    private epoch;
    private base;
    constructor(base?: number);
    hot(ups: number, downs: number, date: Date): number;
    score(ups: number, downs: number): number;
    private order(score);
    private sign(score);
    private seconds(date);
    private log10(value);
}
