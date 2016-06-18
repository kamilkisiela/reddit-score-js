# Reddit hot ranking algorithm

Implemented in JavaScript

```js
import {
  RedditScore,
} from './index';

const reddit = new RedditScore;

const ups = 320;
const downs = 51;
const createdAt = new Date(2015, 5, 5);

const score = reddit.hot(ups, downs, createdAt);
```
