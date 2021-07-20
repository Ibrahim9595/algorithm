/**
 * calculate median from frequency record
 * @param {Record<number, number>} countRecord
 * @param {number} count
 */
const countRecordMedian = (countRecord, count) => {
  let acc = 0;
  let prev = 0;
  let i = 0;
  // 200 because it is the maximum number
  for (i = 0; i <= 200; i++) {
    acc += countRecord[i] || 0;
    if (acc > count / 2) break;
    prev = countRecord[i] ? i : prev;
  }

  return acc - countRecord[i] < count / 2
    ? i
    : count % 2 === 0
    ? (i + prev) / 2
    : i;
};

/**
 * https://www.hackerrank.com/challenges/fraudulent-activity-notifications/problem?isFullScreen=true
 * @param {number[]} expenditure
 * @param {number} d
 */
const activityNotifications = (expenditure, d) => {
  // Construct the frequency record
  let countRecord = expenditure
    .slice(0, d)
    .reduce((p, c) => Object.assign(p, { [c]: (p[c] || 0) + 1 }), {});

  let notifications = 0;

  for (let i = d; i < expenditure.length; i++) {
    // Simulate the sliding window by subtracting 1 from the element in the left and adding 1 to the new element
    const m = countRecordMedian(countRecord, d);
    countRecord[expenditure[i]] = (countRecord[expenditure[i]] || 0) + 1;
    countRecord[expenditure[i - d]] = countRecord[expenditure[i - d]] - 1 || 0;
    notifications = expenditure[i] >= 2 * m ? notifications + 1 : notifications;
  }

  return notifications;
};

const fs = require("fs");
const data = fs
  .readFileSync("./activity.txt")
  .toString()
  .split(" ")
  .map((el) => parseInt(el));
console.time("Test");

console.log(
  activityNotifications(
    // [2, 3, 4, 2, 3, 6, 8, 4, 5],
    // 5
    data,
    10000
  )
);
console.timeEnd("Test");
