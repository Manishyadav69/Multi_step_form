function takevalue(){


    let name=document.getElementById("name").value;
   
    let number=document.getElementById("number").value;
   

    let email=document.getElementById("email").value;

    let address=document.getElementById("address").value;


    let gender;
    if(document.getElementById("Male").checked){
        gender="Male";
    }
    else if(document.getElementById("Female").checked){
        gender="Female";
    }
    else if(document.getElementById("other").checked){
        gender="other";
    }
   

    document.write("Your Name is " + name +"<br>"+ "<br>") 
    document.write("Your  Registered Number is " +number + "<br>"+"<br>")
    document.write("Your Registered Email is "+email + "<br>"+"<br>")
    document.write("Your Registered Address is "+address +"<br>"+"<br>")
    document.write("Your  Gender  is "+gender +"<br>"+"<br>")
    







}