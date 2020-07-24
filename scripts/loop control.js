for (var i = 0; i < 20; i++) {
                   
    for (var j = 0; j < 20; j++) {
        document.write("i: " + i);        
        document.write("&nbsp; &nbsp; &nbsp;");
        document.write("j: " + j);        
        document.write("<br><br>");        
    }
    
    if (i == 3) {
        break outerloop;
    }
}