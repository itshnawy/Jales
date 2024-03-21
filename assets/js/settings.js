const timeSpan = document.querySelector("div#timer span");
const scriptt = document.createElement("script");

function changeTimer(timer,timerspan) {setCookie('timerspan', timerspan , 365 * 10);setCookie('timer', timer ,365 * 10);location.reload(); }

function settings() {
    let settings = document.createElement('div');
    settings.id = 'settings';
    let overlay = document.createElement('div');
    overlay.id = 'overlay';
    document.body.appendChild(overlay)






    settings.innerHTML = '<div id="closebtndiv"><button id="closebtn" onclick="closeit()">✖</button></div>'
    + `<section id="ren">
    <h3 id="stitle">تحديد وقت المؤقت</h3>
    <div class="chooseTimerTime">
    <button class="timertime" onclick="changeTimer('9.9','10:00')"><i class="fa-solid fa-hourglass-half"></i> <p>10 دقيقة</p></button>
    <button class="timertime" onclick="changeTimer('14.9','15:00')"><i class="fa-solid fa-hourglass-half"></i> <p>15 دقيقة</p></button>
    <button class="timertime" onclick="changeTimer('19.9','20:00')"><i class="fa-solid fa-hourglass-half"></i> <p>20 دقيقة</p></button>
    <button class="timertime" onclick="changeTimer('24.9','25:00')"><i class="fa-solid fa-hourglass-half"></i> <p>25 دقيقة</p></button>
    </div>

    <h3 id="stitle">تحديد القارئ</h3>
    قريبا
    
    
    
    
    
    
    
    </section>`








    document.body.appendChild(settings)




    const settingsOpening = [
        { transform: "translateX(200px)" },
        { transform: "translateX(0px)" },
      ];
      
      const settingsOpeningTiming = {
        duration: 300,
        iterations: 1,
      };
      
      settings.animate(settingsOpening, settingsOpeningTiming)
    






    document.getElementById('overlay').addEventListener('click', closeit)

    
    function closeit() {
        const settingsClosing = [
            { transform: "translateX(0px)" },
            { transform: "translateX(200px)" },
          ];
          
          const settingsClosingTiming = {
            duration: 300,
            iterations: 1,
          };
          
       const animation = settings.animate(settingsClosing, settingsClosingTiming)
        animation.onfinish = function() {
            document.getElementById('settings').remove();
            document.getElementById('overlay').remove();
          };
    
    }

}

