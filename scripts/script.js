const electron = require('electron');
const url = require('url');
const path = require('path');
var python = require('python-shell');

const {app, BrowserWindow, Menu} = electron;


function checkFcode(code){
    const { spawn } = require('child_process');
const temperatures = []; // Store readings

    const sensor = spawn('python', ['H:/YNW-PAY-CHARGE-master/YNW_PAY_CHARGE.py'],code);

sensor.stdout.on('data', function(data) {

    // convert Buffer object to Float
    temperatures.push(data);
    alert(temperatures);
});
}

let win;

app.on('ready', function(){
    win = new BrowserWindow({width:1000, height:800, icon:"logo2.png"});
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol:'file:',
        slashes: true

    }));

    const mainMenu = Menu.buildFromTemplate(mainMenuTemp);
    Menu.setApplicationMenu(mainMenu);
});

function login() {
    // Simulate an HTTP redirect:
window.location.href("login.html");
}

function checkCode(code) {    
    document.getElementById('code').value = "";

    var options = {
        scriptPath : 'H:/YNW-PAY-CHARGE-master/YNW_PAY_CHARGE.py',
        pythonPath:"C:/Program Files/Python 3.5",
        args : [code]
    }

    var passCode = new python('YNW_PAY_CHARGE.py', options)

    passCode.on('message',function(message){
        document.getElementById('modal').style.visibility = 'visible'
        document.getElementById('msg').value = message;
        alert(message)
    })
}

//passCode.end(function(message){
    //do some shit
//})

const mainMenuTemp = [
    {
        label: 'File',
        submenu:[
            {
                label:'log in',
                click(){
                    login();
                }
            },
            {
                label:'exit',
                accelerator:process.platform == 'win32' ? 'Ctrl+Q' : 'Command+Q',
                click(){
                    app.quit();
                }
            }
        ]
    }
];