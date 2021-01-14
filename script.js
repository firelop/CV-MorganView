var textval = [
    {"value": "<u><h1>Je me présente !</h1></u> <h2><p>Je m'appelle Pierre Guchet.</p><p>J'ai 14 ans.</p><p>Je suis en 3ème au Collège Moliere de Beaufort-en-Anjou.</p><p>Telephone: 07 68 24 40 63</p><p>Email: <a href=\"mailto:guchet.p@gmail.com\">guchet.p@gmail.com</a></p></h2>", "color": "#070d13"},
    {"value": "<u><h1>Stage en montage vidéo.</h1></u><h2>Vidéaste amateur qui cherche à découvrir les métiers de la communication, la vidéo et le fonctionnement d'une entreprise.</h2>", "color": "#070D1D"},
    {"value": "<u><h1>Mes compétences</h1></u><h2><lu><li>Connaissances de bases en programmation</li><li>Montage vidéos simple: <ol style=\"margin-top: -0em; margin-left: 1em;\"><li>Premiere Pro: Montage</li><li>Hitfilm Express: Effets spéciaux</li></ol></lu></h2>", "color": "#070D2F"},
    {"value": "<u><h1>Mes loisirs:</h1></u><h2><p>Tennis</p><p>Théâtre</p><p>Vidéo</p><p>Programmation</p></h2>", "color": "#070D40"},
    {"value": "<u style=\"height: 90px;line-height: 90px;text-align: center;\"><h1><center>Stage du 15 au 20 février</center></h1></u>", "color": "#070d13"},
]

var positions = [0.13641732283464567, 0.25275590551181104, 0.4673228346456693, 0.7082677165354331,0.706496062992126]

document.addEventListener("DOMContentLoaded", function(e) {
    window.image = document.getElementById("principal");
    window.imagePosition = (window.screen.width/2) - (image.width/2);
    window.image.style.marginLeft = window.imagePosition.toString() + "px";
    window.cursor = document.getElementsByClassName("cursor")[0];
    window.cursorPosition = window.imagePosition + window.image.width*0.093;
    window.cursor.style.marginLeft = window.cursorPosition.toString() + "px";
    document.body.scrollTop = 0;
    window.text = document.getElementsByClassName("text")[0];
    window.text.style.marginLeft = (window.imagePosition + window.image.width*0.026).toString() + "px";
    window.text.style.width = (window.image.width * 0.95).toString() + "px";
    document.onscroll()
});

document.onscroll = function() {
    var i = 0;
    window.scrollPourcent = document.documentElement.scrollTop / document.documentElement.scrollHeight;
    window.cursor.style.marginLeft = window.cursorPosition + window.image.width*scrollPourcent + "px";

    for(var position in positions) {
        i++;
        if(window.scrollPourcent<positions[position]) {
            break;            
        }
    }
    window.text.innerHTML = textval[i-1].value;
    window.text.style.backgroundColor = textval[i-1].color;
}
