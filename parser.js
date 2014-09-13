remoteStorage.articles.init();

var text = document.body.innerText,
    title = document.head.title,
    date = new Date().toString();

remoteStorage.articles.update({
    link: window.location.href,
    date: date,
    title: title,
    text: text
}).then(function () {
    remoteStorage.articles.updateFeed("rss.xml");
}, function (err) {
    console.log(err);
});
