setInterval(myfunc , 1000) ; 

// calling function 
function myfunc()
        {
    const date = new Date() ; 
    const hour = date.getHours() ; 
    const minute = date.getMinutes() ; 
    const seconds = date.getSeconds() ;
    const day = date.getDay() ; 

    let dayArr =  [ "Sunday" ,"Monday" , "Tuesday" ,"Wednesday","Thursday" ,"Friday" ,"Saturday" ]

    // degrees of three hands
    const secDegree = ((seconds / 60) * 360) + 90;
        
    const minDegree = ((minute /60) *360) + ((seconds/60) * 6) + 90 ; 

    const hourDegree = ((hour/12)*360) + ((minute/60) * 30) + 90 ;  
        
    //getting values
    const hourHand = document.getElementById("hourHand") ; 
    const minuteHand = document.getElementById("minuteHand") ; 
    const secondHand = document.getElementById("secondHand") ;
    const monthHand = document.getElementById("myDay").innerHTML = dayArr[day] ;  

    //assigning values
    hourHand.style.transform = `rotate(${hourDegree}deg)` ;
    minuteHand.style.transform = `rotate(${minDegree}deg)`;
    secondHand.style.transform = `rotate(${secDegree}deg)`;   
        }

myfunc();