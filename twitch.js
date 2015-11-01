/**
 * Created by yicheng3 on 5/3/15.
 */

enabled = false

$(function () {

    chrome.storage.local.get('enabled', function (data) {
        console.log("data", data)
        if (jQuery.isEmptyObject(data)) {
            console.log("empty")
            chrome.storage.local.set({'enabled': enabled}, function () {
                console.log("saved")
            })
        }
        else {
            enabled = data['enabled']
        }

        if (enabled) {
            chrome.storage.local.set({'enabled': !enabled}, function () {
                console.log("saved")
            })
            var headline = $(".wsj-article-headline")[0].innerText
            var params = {q: headline};
            window.location.href = "https://www.google.com/search?" + $.param(params) + "+site:wsj.com";
        }
    })
});
