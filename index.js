const {default: axios} = require("axios");
const fs = require("fs");
const playwright = require("playwright");
const proxies = fs.readFileSync("./proxies.txt").toString().replace(/\r/gi, "").split("\n");

(async  function() {
    while (true) {
        for(let proxy of proxies){
            await GenerateToken(proxy);
        }
    }
})();

function GenerateToken(Proxy) {
    return new Promise(async function(resolve) {
        console.log("[STARTED] " + Proxy);
        const PBrowser = await playwright.firefox.launch({headless: false, proxy:{server:Proxy}});
        const PContext = await PBrowser.newContext();
        const PPage = await PContext.newPage();
        var startTime = Date.now();
        try {
            try {
                await PPage.goto("https://discord.com/", {"timeout": 120000, "waitUntil": "networkidle"});
                console.log("[WORKING] " + Proxy);
            }
            catch {
                console.log("[BAD] " + Proxy);
                throw false;
            }
       
          
        }
        catch {
            console.error("[ERROR] " + Proxy);
        }
        resolve(startTime + 150000 - Date.now());
    });
}

 
    const tokens = fs.createWriteStream('tokens.txt', {flags:'a'})
    async function dsne(page, infoname, info){
        const p = await page.$('input[name=' + infoname + ']');
        await p.focus();
        await page.keyboard.type(info);
      }
 
