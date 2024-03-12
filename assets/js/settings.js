const timeSpan = document.querySelector("div#timer span");
const scriptt = document.createElement("script");

function twnyfvmin() {
    setCookie('timerspan', "25:00" , 365 * 10)
    setCookie('timer', 24.9 ,365 * 10)
    location.reload();

};
function twnymin() {
    setCookie('timerspan', "20:00" , 365 * 10)
    setCookie('timer', 19.9 ,365 * 10)
    location.reload();

};
function fifmin() {
    setCookie('timerspan', "15:00" , 365 * 10)
    setCookie('timer', 14.9 ,365 * 10)
    location.reload();
};
function tenmin() {
    setCookie('timerspan', "10:00" , 365 * 10)
    setCookie('timer', 9.9 , 365 * 10)
    location.reload();
};

function settings() {
    let settings = document.createElement('div');
    settings.id = 'settings';






    settings.innerHTML = '<div id="closebtndiv"><button id="closebtn" onclick="closeit()">✖</button></div>'
    + `<section id="ren">
    <h3 id="stitle">تحديد وقت المؤقت</h3>
    <div class="chooseTimerTime">
    <button class="timertime" onclick="tenmin()"><i class="fa-solid fa-hourglass-half"></i> <p>10 دقيقة</p></button>
    <button class="timertime" onclick="fifmin()"><i class="fa-solid fa-hourglass-half"></i> <p>15 دقيقة</p></button>
    <button class="timertime" onclick="twnymin()"><i class="fa-solid fa-hourglass-half"></i> <p>20 دقيقة</p></button>
    <button class="timertime" onclick="twnyfvmin()"><i class="fa-solid fa-hourglass-half"></i> <p>25 دقيقة</p></button>
    </div>
    <h3 id="stitle">تحديد القارئ</h3>
    قريبا
    
    
    
    
    
    
    
    </section>`








    document.body.appendChild(settings)













}

function closeit() {document.getElementById('settings').remove()}