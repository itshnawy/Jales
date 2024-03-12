const startingMinutes = 14.9;
let time = (startingMinutes * 60) + 5;
let playbtn = document.querySelector("#playpauseBtn");
let timer = document.querySelector("#timer span");
let isNotClicked = true;
let intervalId; // Variable to store the interval ID
let surahName = document.querySelector(".surahName h3");
let sessions = document.querySelector("#sessionHistory")
const audio = document.querySelector('#myAudio');
let chooseSurah = document.querySelector('.chooseSurah');
let surahId = document.querySelector("#surahId");
const timerSpan = document.querySelector("div#timer span");

window.addEventListener('load', function () {
    loadSessions();
});

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    // Update the timer display
    timer.innerHTML = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

    // Check if the timer has reached "00:00"
    if (minutes === 0 && seconds === 0) {
        clearInterval(intervalId); // Clear the interval
        audio.pause(); // Pause the audio
        // Additional logic to handle what should happen when the timer reaches "00:00"
        // For example, you can display a message or perform some other action.
    } else {
        time--;
    }
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
        audio.play();
    } else {
        clearInterval(intervalId); // Clear the interval using the stored ID
        time = (startingMinutes * 60) + 6;
        updateCountdown(); // Update the timer display immediately
        playbtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        isNotClicked = true;
        audio.pause();
    }
    intervallId
}

audio.addEventListener('ended', () => {
    if (timerSpan.textContent === "00:00") {
      audio.pause();
    } else {
      audio.currentTime = 0;
      audio.play();
    }
  });

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

function choosetheSurah() {
    let modal = document.createElement("div");
    modal.classList.add("modal");
    let row = document.createElement("div");
    row.classList.add("row");
    modal.innerHTML = `<div id="header"><button id="close-btn" title="Close Button">✖</button><h1>إختر السورة</h1></div>`
    modal.appendChild(row)

    surahId.style.cursor = "context-menu"
    document.body.style.cursor = "context-menu"
    fetch('../assets/Json/Surahdata.json') // Fetch the JSON file
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Parse the JSON response
    })
    .then(data => {
      // Iterate over each object in the JSON array
      data.forEach(item => {
        const sname = item.name;
        const audioSrc = item.src;
        let content = "<div class='SurahCardSelection' data-audio-src='" + audioSrc + "' data-name='" + "سورة " + sname + "'>"  + "سورة " + sname +'<i class="fa-solid fa-add" style="color: #01ACEF;background: #0000002b;padding: 4px 5px;border-radius: 10px;font-size: 13px;"></i>'+ "</div>";
        row.innerHTML += content;
      });
      document.body.appendChild(modal);

      let close = document.getElementById("close-btn");
      let SurahCardSelections = document.querySelectorAll(".SurahCardSelection");
      SurahCardSelections.forEach(card => {
        card.addEventListener('click', setAndClose);
      });

      function closefn() {
        modal.remove()
        surahId.style.cursor = "pointer"
        document.body.style.cursor = "auto"
       }
       
    close.addEventListener('click', closefn);



    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });

}

function setAndClose(event) {
    let modal = document.querySelector(".modal")
  let audioSrc = event.currentTarget.dataset.audioSrc;
  let sname = event.currentTarget.dataset.name;
  let theAudio = document.querySelector('#myAudio');
  document.querySelector(".surahName h3").innerHTML = sname;
  surahId.style.cursor = "pointer"
  document.body.style.cursor = "auto"
  theAudio.src = audioSrc;
  modal.remove()
}

surahId.addEventListener('click', choosetheSurah);


function toast(text,color,fontColor) {
    let toast = document.createElement("div");
    toast.classList.add("toast");
   let closebtn = "<button id='close' onclick='colseToast()'>"+ "<i class='fa-solid fa-close'></i>" + "</button>";
   let ttext = "<p id='toastext' style='color:"+ fontColor +";'"+">" +  text + "</p>";
    toast.innerHTML = ttext + closebtn;
    toast.style.background = color;

    document.body.appendChild(toast)
}
function colseToast() {
 let toast = document.querySelector(".toast")
 toast.remove()
}


let intervallId = setInterval(afterTimer, 1000); // Store the interval ID

function afterTimer() {
    const timerSpan = document.querySelector("div#timer span");
    if (timerSpan.textContent === "00:00" || timerSpan.textContent === "0:00") {
        toast("انتهت الجلسة بنجاح", "#0c4f65", "#fff");
        createSession();
        clearInterval(intervallId); // Stop the interval when the condition is met
    } 
}