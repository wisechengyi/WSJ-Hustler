/**
 * Created by yicheng3 on 5/3/15.
 */

$(function () {
    var headline = $(".wsj-article-headline")[0].innerText;
    chrome.storage.local.set({'headline': headline}, function () {
        console.log("saved")
    })
});
