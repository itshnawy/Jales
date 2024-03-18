function sharing() {
    var shareData = {
        title: "Jales | الجليس",
        text: "جلسات راحة مع القرأن الكريم",
        url: window.location.href
    }


    navigator.share(shareData)
}