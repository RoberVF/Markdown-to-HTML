const {app, BrowserWindow}= require('electron')

let mainWindow= null

app.on('ready', ()=>{
    mainWindow= new BrowserWindow({
        show: false,
        webPreferences: {
            nodeIntegration: true
        }
    }) //Siempre se mantenga activa
    mainWindow.loadFile(__dirname + '/views/index.html')
    mainWindow.once('ready-to-show', ()=>{
        mainWindow.show()
    }) //Muestre la pantalla cuando los archivos esten listos
    mainWindow.on('closed', ()=>{
        mainWindow= null
    })
})