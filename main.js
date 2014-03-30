var foo = function () {


    var retweetNumber = 0;

    // get content of tweet in title
    function showTweetContent(content) {
        var originalTitle = document.title;
        var elem = document.getElementById("tweet-content");
        document.title += elem.innerHTML;
    }

    showTweetContent();
    foo();
}


