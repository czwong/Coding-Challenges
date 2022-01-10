let axios = require("axios");

function getTopTitles(s) {
  // Write your code here
  let url = "https://jsonmock.hackerrank.com/api/articles";

  axios.get(url, { params: { page: s } }).then((response) => {
    let newData = response.data.data;

    newData.sort((a, b) => {
      if (b.num_comments === a.num_comments) {
        if (b.author > a.author) {
          return -1;
        } else {
          return 1;
        }
      }
      return b.num_comments - a.num_comments;
    });

    newData = newData.slice(0, s).map((obj) => {
      if (obj.title) {
        return obj.title;
      } else {
        return obj.story_title;
      }
    });

    return newData;
  });
}

for (var i = 0; i < 6; i++) {
  getTopTitles(i);
}
