export default function(output, _hist, ...args) {
    let projects = args[0];
    if (projects) output.innerHTML += '<span data-color="orange">Opening ' + projects + '...</span>';
    switch (projects) {
        case 'qwertmachsec':
            window.open('https://github.com/shrush7/qwertmachsec');
            break;
        case 'CODSOFT':
            window.open('https://github.com/shrush7/CODSOFT');
            break;
        case 'nodekeylogger':
            window.open('https://github.com/shrush7/nodekeylogger')
        default:
            output.innerHTML += `
<span class="asdf"data-color="lime"><a href="https://github.com/shrush7/qwertmachsec"target="_blank">qwertmachsec</a>: This wesbite.</span>
<span class="asdf"data-color="lime"><a href="https://github.com/shrush7/CODSOFT"target="_blank">codsoft</a>: Data Science projects that I did in my internship.</span>
<span class="asdf"data-color="lime"><a href="https://github.com/shrush7/nodekeylogger"target="_blank">nodekeylogger</a>: A simple linux node keylogger.</span>

(tip: click the project title to visit it's github page)`;
        return;
    }
}