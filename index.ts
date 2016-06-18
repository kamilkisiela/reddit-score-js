export default class RedditScore {
  private epoch: Date;
  private base: number = 1134028003; // 8th December 2005 7:46:43 AM UTC

  constructor(base?: number) {
    this.epoch = new Date(1970, 1, 1);

    if (base) {
      this.base = base;
    }
  }

  public hot(ups: number, downs: number, date: Date): number {
    const score = this.score(ups, downs);
    const order = this.order(score);
    const sign = this.sign(score);
    const seconds = this.seconds(date) - this.base;

    // calc the result
    const result = sign * order + seconds / 45000;

    // rounds to 7th decimal
    return Math.round(Math.pow(10, 7) * result) / Math.pow(10, 7);
  }

  public score(ups: number, downs: number): number {
    return ups - downs;
  }

  private order(score: number): number {
    return this.log10(Math.max(Math.abs(score), 1));
  }

  private sign(score: number): number {
    if (score > 0) {
      return 1;
    }

    if (score < 0) {
      return -1;
    }

    return 0;
  }

  private seconds(date: Date): number {
    const td = date.getTime() - this.epoch.getTime();

    return Math.abs(td / 1000);
  }

  private log10(value: number): number {
    return Math.log(value) / Math.LN10;
  }
}
