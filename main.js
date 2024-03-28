const {app, BroweserWindow} = require('electron')

function createWindow(){
    const win=new BroweserWindow({
        width:800,
        height:600,
        webPreferences:{
            nodeIntegration:true
        }
    })

    win.loadFile('index.html')
}

app.whenReady().then(createWindow)