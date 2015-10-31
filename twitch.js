/**
 * Created by yicheng3 on 5/3/15.
 */
console.log("content injection!!!")

var enabled = true;




//var p = undefined

$(function () {
//    $("object")[0]
//    $(".real").append('<h2>hello world</h2>')
//
//    var btn = $('<button></button>').text(">>5 min").click(function(){
//        console.log("button clicked")
//    })
//
////    $(".channel-actions").append('<button>>>5 min</button>')
//    $(".real").append(btn)

    chrome.storage.local.get('enabled', function(data){
        console.log("data", data)
        if (jQuery.isEmptyObject(data)) {
            console.log("empty")
            chrome.storage.local.set({'enabled': enabled}, function () {
                console.log("saved")
            })
        }
        else{
            enabled = data['enabled']
        }


        if (!enabled) return;
        var text = document.body.textContent
        $("body").remove()
        var body = $("<body></body>").append(
            $("<textarea style='height:100%; width:80%; margin-left: auto; margin-right: auto'></textarea>").val(text))
        $("html").append(body)




    })




});


//$(body).append($('<h1></h1>').text("hello world"))
console.log("content end")
