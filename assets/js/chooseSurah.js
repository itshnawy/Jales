let chooseSurah = document.querySelector('.chooseSurah');
let surahId = document.querySelector("#surahId");

function choosetheSurah() {
    let modal = document.createElement("div");
    modal.classList.add("modal");
    let row = document.createElement("div");
    row.classList.add("row");
    modal.innerHTML = `<div id="header"><button id="close-btn" title="Close Button">✖</button><h1>إختر السورة</h1></div>
    <div id="search"><input type="text" placeholder="ابحث" /></div>
    `
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
