var //some random variables
    a = 33;
    b = 10;
    c = "test";
    breakline = "<br>";
var result;

document.write("a = ", a);
document.write(breakline);

document.write("b = " + b);
document.write(breakline);

document.write("c = " , c);
document.write(breakline);

document.write("<hr>");

result = a + b;
document.write("a + b = ");
document.write(result);
document.write(breakline);

result = a - b;
document.write("a - b = ");
document.write(result);
document.write(breakline);

result = a / b;
document.write("a / b = ");
document.write(result);
document.write(breakline);


result = a % b;
document.write("a % b = ");
document.write(result);
document.write(breakline);

result = a + b + c;
document.write("a + b + c = ");
document.write(result);
document.write(breakline);

a = ++a;
document.write("++a = ");
document.write(a);
document.write(breakline);

b = --b;
document.write("--b = ");
document.write(b);
document.write(breakline);

b = b--;
document.write("b-- = ");
document.write(b);
document.write(breakline);

a = a--; 
/*
    a = a;
    a - 1;
*/
document.write("a-- = ");
document.write(a);
document.write(breakline);