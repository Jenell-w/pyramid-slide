const rangeSelection = document.getElementById("range-selection")
const rangeValue = document.getElementById("range")
const brickType = document.getElementById("brick-type")

let height = document.getElementById("myPyramid").value
//rangeValue.innerHTML = rangeSelection.value;  //error is here - why is innerHTML null?.
//redraw pyramid with diff types of bricks, depends on selection of user
brickType.onchange = function(event) {
    let height = rangeSelection.value;
    drawPyramid(height);
    
rangeSelection.oninput = function(event) {
    let height = rangeSelection.value
    drawPyramid(height);
}   
function sliderFunction(){
    return drawPyramid(height);
}
function drawPyramid(height) {
    //clear content
    document.getElementById("myPyramid").innerHTML = "";
    rangeValue.innerHTML = rangeSelection.value

    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp"; // this is the HTML encoding for a space " "
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += brickType.value;
        };
       rowStr.push(rowStr);
       } 
    return rowStr;
}
}
