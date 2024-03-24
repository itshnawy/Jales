const timeSpan = document.querySelector("div#timer span");
const scriptt = document.createElement("script");

function changeTimer(timer,timerspan) {setCookie('timerspan', timerspan , 365 * 10);setCookie('timer', timer ,365 * 10);location.reload(); }
function changeQareaa(name) {
setCookie('Qareaa', name , 365 * 10);
location.reload();
}

function settings() {
    let settings = document.createElement('div');
    settings.id = 'settings';
    let overlay = document.createElement('div');
    overlay.id = 'overlay';
    document.body.appendChild(overlay)






    settings.innerHTML = '<div id="closebtndiv"><button id="closebtn"><i class="fa-solid fa-x"></i></button></div>'
    + `<section id="ren">
    <h3 id="stitle">تحديد وقت المؤقت</h3>
    <div class="chooseTimerTime">
    <button class="timertime" onclick="changeTimer('9.9','10:00')"><i class="fa-solid fa-hourglass-half"></i> <p>10 دقيقة</p></button>
    <button class="timertime" onclick="changeTimer('14.9','15:00')"><i class="fa-solid fa-hourglass-half"></i> <p>15 دقيقة</p></button>
    <button class="timertime" onclick="changeTimer('19.9','20:00')"><i class="fa-solid fa-hourglass-half"></i> <p>20 دقيقة</p></button>
    <button class="timertime" onclick="changeTimer('24.9','25:00')"><i class="fa-solid fa-hourglass-half"></i> <p>25 دقيقة</p></button>
    </div>

    <h3 id="stitle">تحديد القارئ</h3>
    <div class="chooseQareaa">
    <button class="theQareaa" onclick="changeQareaa('src')">
<img src="https://i1.sndcdn.com/artworks-yqaFIhjTMlyQyFHL-5PmjKw-t500x500.jpg" alt="yasser"/>
<p>ياسر الدوسري<p>
    </button>
    <button class="theQareaa" onclick="changeQareaa('qtm')">
<img src="https://pbs.twimg.com/profile_images/1174520057591947264/NQVlLDtk_400x400.jpg" alt="qtm"/>
<p>ناصر القطامي<p>
    </button>
    <button class="theQareaa" onclick="changeQareaa('maher')">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Maher_Al_Mueaqly.png/270px-Maher_Al_Mueaqly.png" alt="maher"/>
    <p> ماهر المعيقلي<p>
        </button>
        <button class="theQareaa" onclick="changeQareaa('afs')">
        <img src="https://i1.sndcdn.com/artworks-000019055020-yr9cjc-t500x500.jpg" alt="afs"/>
        <p>مشاري العفاسي<p>
            </button>
            <button class="theQareaa" onclick="changeQareaa('shatri')">
            <img src="https://way2quran.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fway2quran_storage%2Fimgs%2Fabu-bakr-al-shatri.jpg&w=640&q=75" alt="shatri"/>
            <p>أبو بكر الشاطري<p>
                </button>
                <button class="theQareaa" onclick="changeQareaa('husr')">
                <img src="https://elhosary.co/wp-content/uploads/2023/01/%D8%A7%D9%84%D8%B4%D9%8A%D8%AE-%D9%85%D8%AD%D9%85%D9%88%D8%AF-%D8%AE%D9%84%D9%8A%D9%84-%D8%A7%D9%84%D8%AD%D8%B5%D8%B1%D9%8A.jpg" alt="husr"/>
                <p>الحصري<p>
                    </button>
                    <button class="theQareaa" onclick="changeQareaa('minsh')">
                    <img src="https://i1.sndcdn.com/artworks-000284633237-7gdg9t-t500x500.jpg" alt="minsh"/>
                    <p> المنشاوي<p>
                        </button>
                        <button class="theQareaa" onclick="changeQareaa('basit')">
                        <img src="https://i1.sndcdn.com/artworks-000051458372-tqvzus-t500x500.jpg" alt="basit"/>
                        <p>عبدالباسط عبدالصمد<p>
                            </button>
    
    
    
    
    
    
    
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
    document.getElementById('closebtn').addEventListener('click', closeit)
    
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

