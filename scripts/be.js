const electron = require( "electron" );
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
electron.crashReporter.start( { companyName: "my company", submitURL: "https://mycompany.com" } );

var mainWindow = null;

app.on(
    "window-all-closed",
    function()
    {
        // if ( process.platform != "darwin" )
        {
            app.quit();
        }
    }
);

app.on(
    "ready",
    function()
    {
        var subpy = require( "child_process" ).spawn( "python", [ "./YNW_PAY_CHARGE.py" ] );
        // var subpy = require( "child_process" ).spawn( "./dist/hello.exe" );
        var rp = require( "request-promise" );
        var mainAddr = "http://localhost:5000";

        var OpenWindow = function()
        {
            mainWindow = new BrowserWindow( { width: 800, height: 600 } );
            // mainWindow.loadURL( "file://" + __dirname + "/index.html" );
            mainWindow.loadURL( "http://localhost:5000" );
            mainWindow.webContents.openDevTools();
            mainWindow.on(
                "closed",
                function()
                {
                    mainWindow = null;
                    subpy.kill( "SIGINT" );
                }
            );
        };

        var StartUp = function()
        {
            rp( mainAddr )
            .then(
                function( htmlString )
                {
                    console.log( "server started!" );
                    OpenWindow();
                }
            )
            .catch(
                function( err )
                {
                    console.log( "waiting for the server start..." );
                    // without tail call optimization this is a potential stack overflow
                    StartUp();
                }
            );
        };

        // fire!
        StartUp();
});