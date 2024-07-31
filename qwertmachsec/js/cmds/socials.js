export default function(output, _hist, ...args) {
    let social = args[0];
    if (social) output.innerHTML += '<span data-color="orange">Opening ' + social + '...</span>';
    switch (social) {
        case 'github':
            window.open('https://github.com/shrush7');
            break;
        case 'twitter':
            window.open('https://x.com/ShrushPatil');
            break;
        case 'linkedin':
            window.open('https://www.linkedin.com/in/shrushpatil1153/');
            break;
        case 'email':
            window.open('qwertmachsec@gmail.com');
            break;
        default:
            output.innerHTML += `
<span class="asdf"data-color="lime">github: <a href="https://github.com/shrush7"target="_blank">@github</a></span>
<span class="asdf"data-color="lime">linkedin: <a href="https://www.linkedin.com/in/shrushpatil1153/"target="_blank">linkedin</a></span>
<span class="asdf"data-color="lime">twitter: <a href="https://x.com/ShrushPatil"target="_blank">@twitter/X</a></span>
<span class="asdf"data-color="lime">email: <a>qwertmachsec@gmail.com</a></span>`;
        return;
    }
}