export default function(output, _hist, ...args) {
    let social = args[0];
    if (social) output.innerHTML += '<span data-color="orange">Opening ' + social + '...</span>';
    switch (social) {
        case 'github':
            window.open('https://github.com/shrush7');
            break;
        case 'email':
            window.open('qwertmachsec@gmail.com');
            break;
        default:
            output.innerHTML += `\
<span data-color="green">Github: <a href="https://github.com/shrush7">@github</a></span>
<span data-color="green">Email: <a>qwertmachsec@gmail.com</a></span>`;
        return;
    }
}