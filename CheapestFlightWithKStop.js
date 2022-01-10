var findCheapestPrice = function (n, flights, src, dst, k) {
  let obj = {};
  let graph = {};
  let arr = new Array(n);

  let Loop = (currentFlight) => {
    if (obj[currentFlight[0]]) {
      let newPrice = currentFlight[2] + obj[currentFlight[0]].price;
      let newStop = obj[currentFlight[0]].stops + 1;

      if (obj[currentFlight[1]]) {
        newPrice < obj[currentFlight[1]].price && newStop <= k
          ? newStop === k && currentFlight[1] != dst
            ? null
            : ((obj[currentFlight[1]].price = newPrice),
              (obj[currentFlight[1]].stops = newStop))
          : null;
      } else {
        newStop <= k
          ? (obj[currentFlight[1]] = {
              price: obj[currentFlight[0]].price + currentFlight[2],
              stops: obj[currentFlight[0]].stops + 1,
            })
          : null;
      }
    }
  };

  for (var i = 0; i < flights.length; i++) {
    let currentFlight = flights[i];

    if (!graph[currentFlight[0]]) {
      graph[currentFlight[0]] = {};
    }
    graph[currentFlight[0]][currentFlight[1]] = currentFlight[2];

    if (currentFlight[0] === src) {
      obj[currentFlight[1]] = {
        price: currentFlight[2],
        stops: 0,
      };
    } else {
      let currentArr = arr[currentFlight[0]];
      if (currentArr) {
        currentArr.push(currentFlight);
      } else {
        arr[currentFlight[0]] = [currentFlight];
      }
    }
  }

  console.log(obj);

  if (dst > src) {
    for (var l = 0; l < arr.length; l++) {
      if (arr[l]) {
        for (var j = 0; j < arr[l].length; j++) {
          let currentFlight = arr[l][j];
          Loop(currentFlight);
        }
      }
    }
  } else {
    for (var l = arr.length; l >= 0; l--) {
      if (arr[l]) {
        for (var j = 0; j < arr[l].length; j++) {
          let currentFlight = arr[l][j];
          Loop(currentFlight);
        }
      }
    }
  }
  console.log(graph);
  if (obj[dst]) {
    return obj[dst].price;
  }
  return -1;
};

let n = 5;
let flights = [
  [0, 1, 5],
  [1, 2, 5],
  [0, 3, 2],
  [3, 1, 2],
  [1, 4, 1],
  [4, 2, 1],
];
let src = 0;
let dst = 2;
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
