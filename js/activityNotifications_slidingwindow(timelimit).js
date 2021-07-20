/**
 * get insertionIndex by binary search
 * @param {number[]} arr
 * @param {number} t
 */
const insertion = (arr, t) => {
  const binarySearch = (start, end) => {
    if (t > arr[start] && t > arr[end - 1]) return end;
    if (t < arr[start] && t < arr[end - 1]) return start;

    const mid = parseInt((start + end) / 2);

    if (arr[mid] === t) return mid;
    else if (arr[mid] < t) return binarySearch(mid + 1, end);
    else return binarySearch(start, mid);
  };

  const index = binarySearch(0, arr.length);

  return arr.slice(0, index).concat(t).concat(arr.slice(index));
};

/**
 * https://www.hackerrank.com/challenges/fraudulent-activity-notifications/problem?isFullScreen=true
 * @param {number[]} expenditure
 * @param {number} d
 */
const activityNotifications = (expenditure, d) => {
  const median = (state) =>
    d % 2 === 0
      ? (state[parseInt(d / 2)] + state[parseInt(d / 2 - 1)]) / 2
      : state[parseInt(d / 2)];

  const init = {
    state: expenditure.slice(0, d).sort((a, b) => a - b),
    notifications: 0,
  };

  const { notifications } = expenditure.slice(d).reduce(
    ({ state, notifications }, c) => ({
      state: insertion(state.slice(1), c),
      notifications: c >= 2 * median(state) ? notifications + 1 : notifications,
    }),
    init
  );

  return notifications;
};

console.time("Test");

console.log(
  activityNotifications(
    [2, 3, 4, 2, 3, 6, 8, 4, 5],
    5
    //   new Array(2 * 10 ** 5).fill(0).map(() => Math.floor(Math.random() * 201)),
    //   10 ** 5
  )
);

console.timeEnd("Test");
