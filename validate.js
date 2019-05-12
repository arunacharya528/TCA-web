function prompt(){
    var name = document.getElementById("name").value;
    //alert(name);
    var email = document.getElementById("email").value;
    //alert(email);
    if(name == ''){
        document.getElementById("remarks").innerHTML
        ="Enter a name so that we may know you by something";
    }
    else if (email == ''){
        document.getElementById("remarks").innerHTML
        ="Enter your Email for contacting you";
    }
}