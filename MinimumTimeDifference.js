function strToMins(t) {
  var s = t.split(":");
  return Number(s[0]) * 60 + Number(s[1]);
}

//O(n^2)

// var findMinDifference = function (timePoints) {
//   let min;
//   for (var i = 0; i < timePoints.length - 1; i++) {
//     for (var j = i + 1; j < timePoints.length; j++) {
//       let temp1 = Math.abs(strToMins(timePoints[i]) - strToMins(timePoints[j]));
//       let temp2 = 1440 - temp1;
//       let temp;

//       if (temp1 < temp2) {
//         temp = temp1;
//       } else {
//         temp = temp2;
//       }

//       if (min != undefined) {
//         if (temp < min) {
//           min = temp;
//         }
//       } else {
//         min = temp;
//       }
//     }
//   }
//   return min;
// };

//O(n)
var findMinDifference = function (timePoints) {
  let timeObj = {};
  let temp;

  let n = timePoints.length;
  let buckets = new Array(n);

  for (let i = 0; i < timePoints.length; i++) {
    if (timeObj[timePoints[i]]) {
      return 0;
    } else {
      timeObj[timePoints[i]] = true;
    }
    timePoints[i] = strToMins(timePoints[i]);
    buckets[i] = [];
  }

  for (let i = 0; i < n; i++) {
    let idx = Math.floor(timePoints[i] / (1440 / n));
    buckets[idx].push(timePoints[i]);
  }

  let newBucket = [];
  for (let i = 0; i < n; i++) {
    buckets[i].sort((a, b) => a - b);
    newBucket = [...newBucket, ...buckets[i]];
  }
  newBucket.push(newBucket[0] + 1440);
  temp = newBucket[1] - newBucket[0];
  for (let i = 2; i < newBucket.length; i++) {
    let newTemp = newBucket[i] - newBucket[i - 1];
    if (newTemp < temp) {
      temp = newTemp;
    }
  }

  return temp;
};

let timePoints = ["00:00", "23:59", "22:00", "05:12"];

findMinDifference(timePoints);
