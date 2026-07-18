if (require("electron-squirrel-startup")) {
    process.exit(0);
}

const { app, BrowserWindow } = require("electron");
const path = require("path");
app.setAppUserModelId("com.squirrel.IdeaBoard.IdeaBoard");

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 1400,
        height: 900,
        minWidth: 1000,
        minHeight: 700,
        title: "Idea Board",
        backgroundColor: "#111827",
        show: false,
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: false
        }
    });

    mainWindow.loadFile(path.join(__dirname, "index.html"));

    mainWindow.once("ready-to-show", function () {
        mainWindow.show();
    });
}

app.whenReady().then(function () {
    createWindow();

    app.on("activate", function () {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        app.quit();
    }
});