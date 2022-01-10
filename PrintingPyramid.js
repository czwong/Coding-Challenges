/**
 * Printing Pyramid
 *
 * A function is given with positive number N.
 * Then the function needs to print pyramid to the console using '*' as characters.
 * Make sure to have spaces around '*' to unify the length of each pyramid layers.
 *
 * ex)
 * printPyramid(2);
 * ' * '
 * '***'
 *
 * printPyramid(3);
 * '  *  '
 * ' *** '
 * '*****'
 *
 * printPyramid(4);
 * '   *   '
 * '  ***  '
 * ' ***** '
 * '*******'
 */

var printPyramid = (N) => {
  var col = 2 * N - 1;
  for (var i = 0; i < N; i++) {
    var starCounter = 2 * i + 1;
    var whitespaceCounter = N - 1 - i;
    var Row = "";
    for (var j = 0; j < col; j++) {
      if (whitespaceCounter) {
        Row = Row + "-";
      } else {
        if (starCounter) {
          Row = Row + "*";
        } else {
          Row = Row + "-";
        }
        starCounter === 0 ? starCounter : starCounter--;
      }
      whitespaceCounter === 0 ? whitespaceCounter : whitespaceCounter--;
    }
    console.log(Row);
  }
};

printPyramid(20);
