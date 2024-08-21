export default function(output, _hist, ...args) {
    let projects = args[0];
    if (projects) output.innerHTML += '<span data-color="orange">Opening ' + projects + '...</span>';
    switch (projects) {
        case 'qwertmachsec':
            window.open('https://github.com/shrush7/qwertmachsec');
            break;
        case 'insecure_xss':
            window.open('https://github.com/shrush7/insecure_xss');
            break;
        case 'arbitary_code_execution':
            window.open('https://github.com/shrush7/Arbitary_code_execution');
            break;
        case 'exposed_phpinfo':
            window.open('https://github.com/shrush7/exposed_phpinfo');
            break;
        case 'PHP_web_shell':
            window.open('https://github.com/shrush7/PHP_web_shell');
            break;
        case 'nodekeylogger':
            window.open('https://github.com/shrush7/nodekeylogger')
        default:
            output.innerHTML += `
<span class="asdf"data-color="lime"><a href="https://github.com/shrush7/qwertmachsec"target="_blank">qwertmachsec</a>: This wesbite.</span>
<span class="asdf"data-color="lime"><a href="https://github.com/shrush7/insecure_xss"target="_blank">insecure_xss</a>: A deliberately vulnerable web application with insecure XSS filters.</span>
<span class="asdf"data-color="lime"><a href="https://github.com/shrush7/Arbitary_code_execution"target="_blank">arbitary_code_execution</a>: A vulnerable web application that is susceptible to arbitrary command execution.</span>
<span class="asdf"data-color="lime"><a href="https://github.com/shrush7/exposed_phpinfo"target="_blank">exposed_phpinfo</a>: A simple PHP web application with an exposed php.info page.</span>
<span class="asdf"data-color="lime"><a href="https://github.com/shrush7/PHP_web_shell"target="_blank">PHP_web_shell</a>: A PHP backdoor accessible via your browser, that allows you to execute malicious commands on the compromised web server.</span>
<span class="asdf"data-color="lime"><a href="https://github.com/shrush7/nodekeylogger"target="_blank">nodekeylogger</a>: A simple linux node keylogger.</span>
`;
        return;
    }
}