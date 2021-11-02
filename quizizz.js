(function() {
    let elem = document.createElement('div');
    elem.style = `color: #25e000; position: fixed; z-index: 2147483647; right: 0; bottom: 0; padding: 5px; cursor: pointer;`;
    elem.textContent = 'Inject Cheat';
 
    elem.onclick = () => {
        let x = document.createElement('script');
        x.src = 'https://cdn.jsdelivr.net/gh/DYLOjestem/Cheats@main/quizizzcode.js';
        x.onload = () => { x.remove() };
        (document.head || document.documentElement).appendChild(x);
 
        elem.remove();
    }
    (document.body || document.documentElement).appendChild(elem);
})();
