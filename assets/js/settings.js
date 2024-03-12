function settings() {
    let settings = document.createElement('div');
    settings.id = 'settings';

    settings.innerHTML = '<div id="closebtndiv"><button id="closebtn" onclick="closeit()">✖</button></div>'
    + `<section id="ren">
    <h3 id="stitle">تحديد وقت المؤقت<h3>
    
    
    
    
    
    
    
    
    
    
    
    </section>`








    document.body.appendChild(settings)













}

function closeit() {document.getElementById('settings').remove()}