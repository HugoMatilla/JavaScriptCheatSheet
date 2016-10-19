function minutes(distance, speed){
  return (distance * 60) / speed ;
}
function calculator(distance, busDrive, busWalk)  {
    var walkMinutes = minutes(distance,walk)
    var busMinutes = minutes(busDrive,bus) + minutes(busWalk,walk)  
    var difference = busMinutes - walkMinutes
    if (walkMinutes < 10)
        return "Walk";    
    else if (walkMinutes > 120 && busMinutes > 120)
        return "Bus";    
    else if ( difference >= 0 )
        return "Walk";
    else if (difference < 0)
        return "Bus";    
}


// calculator(5, 6, 1)
// calculator(4, 5, 1)
// calculator(5, 8, 0)
// calculator(5, 4, 3)
// calculator(11, 15, 2)
// calculator(0.6, 0.4, 0)
// calculator(10, 0.4, 0)
