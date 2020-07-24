
function hellojs(name, email) {
    document.write("<h1>");
    document.write("welcome " + name);
    document.write("<br>");
    document.write("we 've sent an e-mial to:");
    document.write(email);    
    document.write("</h1>");
    window.open("mailto:" + email);
}



