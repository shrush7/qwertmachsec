export default function(output) {
    output.innerHTML += `
here is a list of commands:
    <span data-color="lime">help</span> <span data-color="grey">-</span> <span data-color="green">list of commands.</span>
    <span data-color="lime">about</span> <span data-color="grey">-</span> <span data-color="green">about me</span>
    <span data-color="lime">projects </span> <span data-color="grey">-</span> <span data-color="green">my projects</span>
    <span data-color="lime">socials</span> <span data-color="grey">-</span> <span data-color="green">contact me</span>
    <span data-color="lime">whoami</span> <span data-color="grey">-</span> <span data-color="green">what is your name</span>
    <span data-color="lime">history</span> <span data-color="grey">-</span> <span data-color="green">prints command history</span>
    <span data-color="lime">hostname</span> <span data-color="grey">-</span> <span data-color="green">what is this</span>
    <span data-color="lime">echo [text]</span> <span data-color="grey">-</span> <span data-color="green">prints [text].</span>
    <span data-color="lime">clear</span> <span data-color="grey">-</span> <span data-color="green">clears the terminal</span>
`;
}