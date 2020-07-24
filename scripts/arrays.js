
var arr = new Array("cola", "mola", "lola", 3);

for (var i = 0; i < arr.length; i++) {
    document.write(arr[i]);
    document.write("&nbsp; &nbsp; &nbsp;");
    document.write(typeof arr[i]);
    document.write("<br>");
}

document.write("<hr>");

var listy = ['my', 'name', 'is', 16];

for (var i in listy) {
    document.write(listy[i]);
    document.write("&nbsp;");    
}

document.write('<br>');

listy.forEach(i => {
    document.write(typeof i);
    document.write("&nbsp;/");
});