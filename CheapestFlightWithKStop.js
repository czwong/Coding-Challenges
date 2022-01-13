var findCheapestPrice = function (n, flights, src, dst, k) {
  let obj = {};
  let arr = new Array(n);

  class Queue {
    constructor() {
      this.item = {};
      this.first = 0;
      this.last = 0;
    }

    enqueue(element) {
      this.item[this.last] = element;
      this.last++;
    }

    dequeue() {
      let deleteItem = this.item[this.first];
      delete this.item[this.first];
      if (this.last - this.first > 0) {
        this.first++;
      }
      return deleteItem;
    }

    size() {
      return this.last - this.first;
    }
  }

  let queue = new Queue();

  for (var i = 0; i < flights.length; i++) {
    let currentFlight = flights[i];

    let currentArr = arr[currentFlight[0]];
    if (currentArr) {
      currentArr.push([currentFlight[1], currentFlight[2]]);
    } else {
      arr[currentFlight[0]] = [[currentFlight[1], currentFlight[2]]];
    }
  }

  queue.enqueue([src, -1, 0]);

  while (queue.size() > 0) {
    let v = queue.dequeue();
    let srce = v[0];
    let s = v[1];
    let p = v[2];

    if (srce !== dst && s === k) continue;

    if (obj[srce]) {
      let check = obj[srce];
      p < check.price && s <= k ? ((check.price = p), (check.stops = s)) : null;
    } else {
      obj[srce] = { price: p, stops: s };
    }
    if (arr[srce]) {
      let currArr = arr[srce];
      for (let w = 0; w < currArr.length; w++) {
        let currSrc = currArr[w][0];
        let currPrice = currArr[w][1];
        let newPrice = currPrice + p;

        if (!obj[currSrc]) {
          obj[currSrc] = { price: Infinity, stops: 0 };
        }

        newPrice < obj[currSrc].price
          ? queue.enqueue([currSrc, s + 1, newPrice])
          : null;
      }
    }
  }

  if (obj[dst]) {
    return obj[dst].price;
  }
  return -1;
};

let n = 5;
let flights = [
  [0, 1, 1],
  [0, 2, 5],
  [1, 2, 1],
  [2, 3, 1],
  [3, 4, 1],
];

let src = 0;
let dst = 4;
let k = 2;

//**Recursion Method**//

// var findCheapestPrice = function (n, flights, src, dst, k) {
//   let obj = {};

//   for (var i = 0; i < flights.length; i++) {
//     let currentFlight = flights[i];
//     if (!obj[currentFlight[0]]) {
//       obj[currentFlight[0]] = {};
//     }
//     if (!obj[currentFlight[1]]) {
//       obj[currentFlight[1]] = {};
//     }
//     obj[currentFlight[0]][currentFlight[1]] = {
//       children: obj[currentFlight[1]],
//       value: currentFlight[2] + obj[currentFlight[1]].value,
//     };
//   }
//   console.log(obj);
//   let min = Infinity;

//   function traverse(obj, ...args) {
//     let cities = Object.keys(obj.children);
//     let stops = args[0],
//       city = parseInt(args[1]),
//       price;

//     args[2] ? (price = args[2] + obj.value) : (price = obj.value);

//     for (var i = 0; i < cities.length; i++) {
//       let currentCity = obj.children[cities[i]];
//       stops = args[0];

//       if (stops <= k && city != dst) {
//         traverse(currentCity, ++stops, cities[i], price);
//       } else {
//         break;
//       }
//     }

//     if (city === dst && stops <= k && price < min) {
//       min = price;
//     }
//   }

//   let newObj = Object.keys(obj[src]);

//   for (var j = 0; j < newObj.length; j++) {
//     let children = obj[src][newObj[j]];
//     traverse(children, 0, newObj[j]);
//   }

//   min === Infinity ? (min = -1) : null;

//   return min;
// };

let something = findCheapestPrice(n, flights, src, dst, k);
console.log(something);
