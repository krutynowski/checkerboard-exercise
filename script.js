//create and array with hex color codes codes
//use math floor and  math.random to generate random colors  


var board = document.getElementsByTagName('body')[0]; //create the board by targeting the body, 0 sets the  


function getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;

}

for (var i = 0; i < 81; i++) { //81 gives me a 9/9 spaces board 
  var square = document.createElement('div');

  square.style.width = '11.1%';
  square.style.paddingBottom = '11.1%';
  square.style.float = 'left';

  if (i % 2 === 0) { //if number is even color A else color B
    square.style.backgroundColor = getRandomColor();

  } else {
    square.style.backgroundColor = getRandomColor();
  }

  board.appendChild(square); // appending the squares to the board 

}

// '#' + (function co(lor){   
// return (lor += [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
//   [Math.floor(Math.random()*16)]) && (lor.length == 6) ?  lor : co(lor); })('');

// var colors = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];

// function random() {
// '#'+'0123456789abcdef'.split('').map(function(v,i,a){
//   return i>5 ? null : a[Math.floor(Math.random()*16)] }).join('');
// }

// colors=random(colors); 


// // Each tile should be a div
// Each tile's width is 11.1%
// Set each tile's float property to left
// Each tile's paddingBottom is 11.1% --do not need height 


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
