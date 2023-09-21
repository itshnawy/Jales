const startingMinutes = 14.9;
let time = (startingMinutes * 60) + 5;
let playbtn = document.querySelector("#playpauseBtn");
let timer = document.querySelector("#timer span");
let isNotClicked = true;
let intervalId; // Variable to store the interval ID
let surahName = document.querySelector(".surahName h3");
let sessions = document.querySelector("#sessionHistory")
const audio = document.getElementById('myAudio');

window.addEventListener('load', function () {
    loadSessions();
});

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    timer.innerHTML = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    time--;
}

function setCookie(name, value, days) {
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + days); // Set the expiration date to the future
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

function createSessionCard(session) {
    let sessionCard = document.createElement('div');
    sessionCard.classList.add('card');
    let sessionHistoryDiv = document.createElement("div");
    sessionHistoryDiv.setAttribute('id',"suraHistory");
    let iconSurah = document.createElement("div");
    iconSurah.classList.add('icon');
    iconSurah.innerHTML = '<i class="fa-solid fa-music"></i>';
    let surahDataa = document.createElement("div")
    surahDataa.setAttribute('id',"surahData");
    let surahTitle = document.createElement("div")
    surahTitle.classList.add("surahTitle")
    let surahDatee = document.createElement("div")
    surahDatee.classList.add("surahDate")
    surahTitle.innerHTML = '<h3> '+ session.surah +'</h3>'
    surahDatee.innerHTML = '<p>' + session.date + '</p>'
    let br = document.createElement("br")
    surahDataa.appendChild(surahTitle)
    surahDataa.appendChild(br)
    surahDataa.appendChild(surahDatee)
    let surahTimerTime = document.createElement("div")
    surahTimerTime.setAttribute('id','surahTimerTime')
    surahTimerTime.innerHTML = '<p>' + session.time + '</p>'


    sessionHistoryDiv.appendChild(iconSurah)
    sessionHistoryDiv.appendChild(surahDataa)
    sessionHistoryDiv.appendChild(br)
    sessionCard.appendChild(sessionHistoryDiv)
    sessionCard.appendChild(surahTimerTime)

    sessions.appendChild(sessionCard); // Append the session card to the session history
}

function getCookie(name) {
    const cookieValue = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
    return cookieValue ? cookieValue[2] : null;
}
    let sessionHistory = []; // Array to store session data

    function createSession() {
        let sessionSurah = getCookie('countdownSurah');
        let sessionTime = getCookie('countdownTime');
        let sessionDate = getCookie('countdownDate');
    
        // Create a session object
        let session = {
            surah: sessionSurah,
            time: sessionTime,
            date: sessionDate,
        };
    
        sessionHistory.push(session); // Add the session to the history
    
        // Create a session card in the session history
        createSessionCard(session);
    
        // Store the updated session history in a cookie
        setCookie('sessions', JSON.stringify(sessionHistory), 365 * 10);
        // Store session history for 10 years (as an example)
    }
    
       
function playfn() {
    let theDate = new Date();
    let dDate = theDate.getDate();
    let mDate = theDate.getMonth() + 1;
    let yDate = theDate.getFullYear();
    let playDate = dDate + "/" + mDate + "/" +yDate;
    const minutes = Math.floor((time + 1) / 60);
    let seconds = "00";
    let theCTime = minutes + ":" + seconds;
    if (isNotClicked) {
        intervalId = setInterval(updateCountdown, 1000); // Store the interval ID
        isNotClicked = false;
        playbtn.innerHTML = '<i class="fa-solid fa-close"></i>';
        setCookie('countdownTime', theCTime, 365 * 10); // Store countdown time for 10 years (as an example)
        setCookie('countdownDate', playDate, 365 * 10); // Store play date for 10 years
        setCookie('countdownSurah', surahName.textContent, 365 * 10); // Store surah name for 10 years
        createSession();
        audio.play();
    } else {
        clearInterval(intervalId); // Clear the interval using the stored ID
        time = (startingMinutes * 60) + 6;
        updateCountdown(); // Update the timer display immediately
        playbtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        isNotClicked = true;
        audio.pause();
    }
}


function loadSessions() {
    let savedSessions = getCookie('sessions'); // Retrieve the saved sessions from a cookie

    if (savedSessions) {
        sessionHistory = JSON.parse(savedSessions); // Parse the JSON data

        // Populate the session history with the loaded sessions
        sessionHistory.forEach(function (session) {
            createSessionCard(session);
        });
    }
}

