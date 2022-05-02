function hoursAm(event) {
    if (event.key === "Enter"){
        let hours =Number( document.getElementById("boxQ1").value);

        if (hours<=40){
            document.getElementById("amount").innerHTML="$"+ hours*12;
        }
        else {
            document.getElementById("amount").innerHTML="$"+((40*12)+((hours-40)*18));
        }
            
    }
}
function CompVal() {
   let numOne= document.getElementById("boxQ2").value;
   let numTwo= document.getElementById("boxTQ2").value;

    if(Number(numOne)===0 || Number(numTwo)===0){
        document.getElementById("output").innerHTML="You entered a zero";
    } else if (numOne===numTwo) { 
        document.getElementById("output").innerHTML="They are each divisible by the other."; 
    } else if (numOne % numTwo==0) {
        document.getElementById("output").innerHTML="The first is divisible by the second";
    } else if(numTwo % numOne==0) {
        document.getElementById("output").innerHTML="The second is divisible by the first";
    }else {
        document.getElementById("output").innerHTML="They are not divisible";
    }
    

}
function yearCheck() {
    let year=Number(document.getElementById("boxQ3").value);
        if (year<1582) {
            document.getElementById("leapOut").innerHTML=year +" is invalid";
        } 
        else if (year%4==0 && (year%100)!=0) {
            document.getElementById("leapOut").innerHTML= year + " is a leap year";
    
        }
        else if ((year %4)==0 && (year%100)== 0 &&(year%400)==0){
            document.getElementById("leapOut").innerHTML= year +" is a leap year";
        }
        else{
            document.getElementById("leapOut").innerHTML= year+" is not leap year";
        }
}

