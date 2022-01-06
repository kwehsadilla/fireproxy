/*
This is a make-shift add-on for Firefox. I initially made it
for working with Burp Suite, hence the hard-coded localhost.
It's unsecure by its crude nature, and it's meant to be used
in the browser's debugger.
*/

/* Settings */

//on
var proxyOn = {
    proxyType: "manual",
    socks: "127.0.0.1:8080",
    socksVersion: 5,
    proxyDNS: true
};

//off
var proxyOff = {
    proxyType: "none",
};

// It's on by default
let currentSettings = proxyOn;
browser.browserAction.setIcon({path: "buttons/on_button.png"});
browser.browserAction.setTitle({title: "Proxy On"});

// Toggle
function toggleSettings() {
    if (currentSettings.proxyType === "none") {
        currentSettings = proxyOn;
        browser.proxy.settings.set({value : proxyOn});
        browser.browserAction.setIcon({path: "buttons/on_button.png"});
        browser.browserAction.setTitle({title: "Proxy On"});
    } else {
        currentSettings = proxyOff;
        browser.proxy.settings.set({value : proxyOff});
        browser.browserAction.setIcon({path: "buttons/off_button.png"});
        browser.browserAction.setTitle({title: "Proxy Off"});
    }
}

// On-click Listener
browser.browserAction.onClicked.addListener(toggleSettings);

/* 
//First Approach
var x=1;

if(x=1) {
browser.proxy.settings.set({value: proxySettings});
}
*/
