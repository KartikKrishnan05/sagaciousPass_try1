console.log('Hello World');


chrome.browserAction.onClicked.addListener(buttonClick);

function buttonClick(tab){
    let msg = {
        txt: "hello"
    }
    chrome.tabs.sendMessage(tab.id, msg);
}
