// // Each tile should be a div
// Each tile's width is 11.1%
// Set each tile's float property to left
// Each tile's paddingBottom is 11.1% --do not need height 


var board = document.getElementsByTagName('body')[0]; //create the board by targeting the body, 0 sets the  
board.style.background = "repeating-radial-gradient(teal, purple 10%, fuchsia 20%)";
//'createGradient(#000000 #c50106 #f5f100 #ffffff)'

for (var i = 0; i < 81; i++) { //81 gives me a 9/9 spaces board 
  var square = document.createElement('div');

  square.style.width = '11.1%';
  // square.style.height='100%'; no longer needed because of padding b
  square.style.paddingBottom = '11.1%';
  square.style.float = 'left';

  if (i % 2 === 0) { //if number is even color A else color B
    square.style.backgroundColor = '#8177A9';
    square.style.opacity = "0.5";

  } else {
    square.style.backgroundColor = '#4198BF';
    square.style.opacity = "0.5";
  }

  board.appendChild(square); // appending the squares to the board 

}




//  squere.style.borderColor = "red";
//     var board = document.createElement('body');
//     

//     for(var j = 1; j < 54; j++) {
//         var td = document.createElement('div ');
//         td.style.width="11.1%";
//     td.style.height="50px";
//     td.style.background = "green";
//     td.style.cssFloat = 'left';
//     td.style.border='1px';
// td.style.borderColor = "red";
//         if (i%2 === 0) {
//             td.className = "white";
//         } else {
//             td.className = "black";
//         }
//         square .appendChild(td);
//     }
//     body.appendChild(square);
// }
// document.body.appendChild(body);
