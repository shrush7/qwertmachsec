export default function(output, _hist, ...args) {
    output.innerHTML += `
<span class="asdf" data-color="lime">Opening Google...</span>`;
    window.open('https://google.com/search?q=' + args.join(' '));
}