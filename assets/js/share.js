function sharing() {
    var shareData = {
        title: window.location.title,
        text: "جلسات راحة مع القرأن الكريم",
        url: window.location.href
    }


    navigator.share(shareData)
}