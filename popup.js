$("#enable").click(function(){
    chrome.storage.local.set({'enabled': true}, function () {
        console.log("saved")
    })
    chrome.tabs.getSelected(null, function(tab) {
        var code = 'window.location.reload();';
        chrome.tabs.executeScript(tab.id, {code: code});
    });
    window.close();

})

$("#disable").click(function(){
    chrome.storage.local.set({'enabled': false}, function () {
        console.log("saved")
    })
    chrome.tabs.getSelected(null, function(tab) {
        var code = 'window.location.reload();';
        chrome.tabs.executeScript(tab.id, {code: code});
    });
    window.close();

})
