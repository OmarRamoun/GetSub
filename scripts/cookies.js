function save() {
    name = document.forma.name.value;    
    email = document.forma.email.value;

    if (name == "" || email == "") {
        alert("Please Enter name or emial");
    }

    cookieusername = escape(name) + ";";
    cookieemail = escape(email) + ";";
    document.cookie="name=" + cookieusername + "email=" + cookieemail;
    document.write("name=" + cookieusername);
    document.write("email=" + cookieemail);
}

function readCookies() {
    var cookies = document.cookie;
    document.getElementById("h1").innerHTML = (cookies);
}