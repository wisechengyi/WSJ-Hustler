chrome.storage.local.get('headline', function (data) {
    var headline = data.headline;
    var target_url = "https://www.google.com/search?q=" + encodeURIComponent(headline);
    chrome.windows.create({"url": target_url, "incognito": true});
})
