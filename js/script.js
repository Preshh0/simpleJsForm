function validate(){
    var x = document.forms["myForm"] [document.getElementById("email")].value [document.getElementById("username")].value [document.getElementsByClassName("checkbox")].value ;

    if (x == null || x == ""){
        alert("Incomplete fields must be filled out");
        return false;
    }
}