function validate(){
    var x = document.forms["myForm"];
    var y =  document.getElementById("username").value; 
    var z = document.getElementById("email").value;
    var checkbox = document.getElementsByClassName("checkbox").value ;

    if (x == null || x == ""){
        alert("Incomplete fields must be filled out");
        return false;
    }else if (y == null || y == ""){
        alert ("username needs to be filled");
        return false;
    }else if (z == null || z == ""){
        alert ("email needs to be completed");
        return false;
    }else if (checkbox == null || checkbox == ""){
        alert ("checkbox needs to be clicked");
        return false;
    }
}