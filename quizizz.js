var elem = document.createElement("button");
var body = document.getElementsByTagName("body")[0];
elem.innerHTML = "Inject Cheat";
elem.style = `color: #4DFF00; position: fixed; z-index: 2147483647; right: 0; bottom: 0; padding: 5px; cursor: pointer;`;
elem.style.width = '200px';
elem.style.height = '40px';
elem.style.background = 'blue';
elem.onclick = () => {
    let x = document.createElement('script');
    x.src = 'https://cdn.jsdelivr.net/gh/DYLOjestem/Cheats@main/quizizzcode.js';
    x.onload = () => { x.remove() };
    (document.head || document.documentElement).appendChild(x);

    elem.remove();
}
(document.body || document.documentElement).appendChild(elem);
elem.style.borderRadius = '1em';
document.getElementsByClassName("quiz-container themed-background classic question-theme").length>0&&(document.getElementsByClassName("quiz-container themed-background classic question-theme")[0].style="background-image: url('https://cdn.discordapp.com/attachments/784001945719275521/923179555160727652/output.jpg');");
