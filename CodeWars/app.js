String.prototype.toJadenCase = function () {
  return this
      .split(" ")
      .map(function(w){return w[0].toUpperCase() + w.slice(1);})
      .join(" ")
      ;
};

function makeString(s){
  return s
      .split(" ")
      .map(function(w){return w[0];})
      .join("")
      ;
    //const makeString = s => s.split(' ').map(v => v.charAt(0)).join('');
    // return (s.match(/\b\w/g)).join('');
}


var str = "How can mirrors be real if our eyes aren't real";
var str2 = "sees eyes xray yoat";

console.log(makeString(str2));

function calculator(distance, busDrive, busWalk)  {
    var walk = 5
    var bus = 8 
//        switch(expression) {
//        case n:
//            code block
//            break;
//        case n:
//            code block
//            break;
//        default:
//            default code block  
//        }
}
                
function minutes(distance, speed){
    return distance * speed 
}


