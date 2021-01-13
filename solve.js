A sudoku puzzle consists of nine three by three boxes 
and in each box there has to be the numbers one through nine 
but can not have that same number in the row or column that it is in
*/
//in the start function call on a function that gets a user inputed puzzle
var _puzzle = [[0, 9, 0, 0, 4, 2, 1, 3, 6],
    [0, 0, 0, 9, 6, 0, 4, 8, 5],
    [0, 0, 0, 5, 8, 1, 0, 0, 0],
    [0, 0, 4, 0, 0, 0, 0, 0, 0],
    [5, 1, 7, 2, 0, 0, 9, 0, 0],
    [6, 0, 2, 0, 0, 0, 3, 7, 0],
    [1, 0, 0, 8, 0, 4, 0, 2, 0],
    [7, 0, 6, 0, 0, 0, 8, 1, 0],
    [3, 0, 0, 0, 9, 0, 0, 0, 0]];
    

//for (var r = 1;r<10;r++){
//    //println("Testing the number "+r)
//    println(_puzzle[0].indexOf(r));
//}
//check box valid works and returns false
//println(checkBoxValid(9,_puzzle,0,1));
//println(_puzzle.length);
solve(_puzzle);
/* write a function that the start function can call on 
to solve the puzzle, that function will call on another 
function 9 times that is called solveBow that solves one row of the 
sudoku
*/
function solve(puzzle){
    //Loop through the rows and coulmns
    for(var r = 0;r<9;r++){
        for(var c = 0;c<9;c++){
            if(puzzle[r][c] == 0){
                for(var num = 1;num<=9;num++){
                    if(checkRowAndColumnValid(num, puzzle, r, c) == true && checkBoxValid(num, puzzle, r, c)){
                        puzzle[r][c] = num;
        
                    }
                }
            }
        }
    }
    println(puzzle);
}
function getRowInts(row,col) {
    if (row < 4 && row >= 0) {
        return [1,3];
    }
    if (row < 7 && row >= 3) {
        return [4,6];
    }
    if (row < 10 && row >= 6) {
        return [7,9];
    }
}
function getColInts(row, col){
    if (col < 4 && col >= 0) {
        return [1,3];
    }
    if (col < 7 && col >= 3) {
        return [4,6];
    }
    if (col < 10 && col >= 6) {
        return [7,9];
    }
}
function checkBoxValid(number, board, row , col) {
    //Determine if a 3x3 box has any duplicate integers
    //For example: does the number 1 occur more than once
    var col_range = getColInts(row,col);
    var row_range = getRowInts(row,col);
    var numCount = 0;
    for(var num = 1;num<=9;num++){
        for(var c = col;c<col_range[1];c++){
            for(var r = row;r<row_range[1];r++){
                if(board.length - 1 > r){
                    if(board[r][c] == num){
                        numCount += 1;
                    }
                }
                if(numCount == 2 || board[r][c] == number){
                    return false;
                }
            }
        }
    }
    return true;
}

function checkRowAndColumnValid(num, puzzle, row, column){
    puzzle[row].indexOf(num)
    if(puzzle[row].indexOf(num) != -1){
            return false;
        }
    for(var i = 0;i<9;i++){
        const arrayColumn = (arr, n) => arr.map(x => x[n]);
        if(arrayColumn(puzzle, i).indexOf(num) != -1){
            return false;
        }
    }
    return true;
}
//write the get puzzle function
/*function getPuzzle(){
    ask the person to input the first number etc. in the puzzle 81 times 
    and then return that puzzle as a list
    var puzzle = [[0,0,0],[0,0,0],[0,0,0],
    [0,0,0],[0,0,0],[0,0,0],
    [0,0,0],[0,0,0],[0,0,0],
    [0,0,0],[0,0,0],[0,0,0],
    [0,0,0],[0,0,0],[0,0,0],
    [0,0,0],[0,0,0],[0,0,0],
    [0,0,0],[0,0,0],[0,0,0],
    [0,0,0],[0,0,0],[0,0,0],
    [0,0,0],[0,0,0],[0,0,0],];
    //make two counter vars
    var counter = 0;
    var counter2 = 0;
    for(var i = 1;i<82;i++){
        if(i % 3 == 0){
            counter++;
        }
        if(counter2 == 2){
            counter2 = 0;
        }
        var num = readInt("What is the number at index " + i + " in your puzzle? a zero represents nothing");
        puzzle[counter, counter2] = num;
        counter2++;
    }
    return puzzle;
    
}*/
