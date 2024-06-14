import { handle } from "./cmds.js";

const msg = "hello visitor, welcome to qwert labs. this is my corner of the internet. feel free to look around...";
const welcome = `<div class="nomobile">
<span data-color="lime">
  ____                         _    __  __               _       _____             
 / __ \\                       | |  |  \\/  |             | |     / ____|                |    |  
| |  | |__      __  ___  _ __ | |_ | \\  / |  __ _   ___ | |__  | (___    ___   ___      \\()/ 
| |  | |\\ \\ /\\ / / / _ \\| '__|| __|| |\\/| | / _\` | / __|| '_ \\  \\___ \\  / _ \\ / __|    /(__)\\
| |__| | \\ V  V / |  __/| |   | |_ | |  | || (_| || (__ | | | | ____) ||  __/| (__    |      |
 \\___\\_\\  \\_/\\_/   \\___||_|    \\__||_|  |_| \\__,_| \\___||_| |_||_____/  \\___| \\___|    |    |  

                                                                                   
</span></div>
type <span data-color="lime">help</span> for list of available commands
`;
const sleep = (m) => new Promise((r) => setTimeout(r, m));
const terminal = document.querySelector("pre");
const history = [];
let prompt = document.querySelector("#prompt-template").content.cloneNode(true);
let lastOutputEnd = 0; // Track where the last command output ended

setTimeout(async () => {
  for (let i = 0; i < msg.length; i++) {
    terminal.innerText += msg[i];
    await sleep(100);
  }
  terminal.innerHTML += welcome;
  terminal.appendChild(prompt);
  lastOutputEnd = terminal.scrollHeight; // Initial position after welcome message
}, 500);

window.addEventListener("DOMContentLoaded", () => {
  document.onclick = () => {
    let prompts = document.querySelectorAll("input");
    if (!window.getSelection().toString()) prompts[prompts.length - 1].focus();
  };
  window.onkeydown = async (e) => {
    let prompts = document.querySelectorAll("input");
    let command = prompts[prompts.length - 1];
    if (e.key === "Enter") {
      command.setAttribute("placeholder", command.value);
      command.setAttribute("readonly", true);
      document
        .querySelectorAll(".help")
        .forEach((el) => el.parentElement.remove());

      if (command.value.includes("&&")) {
        let runs = command.value.split("&&");
        for (let cmds of runs) {
          await handle(cmds, terminal, history);
          terminal.innerHTML += "\n";
        }
      } else {
        await handle(command.value, terminal, history);
      }
      history.push(command.value);

      // Add space after the last command output
      terminal.innerHTML += "<br><br>"; // Adjust the number of <br> as needed

      // Append the new command prompt
      prompt = document
        .querySelector("#prompt-template")
        .content.cloneNode(true);
      terminal.appendChild(prompt);

      // Focus on the new input field
      prompts = document.querySelectorAll("input");
      prompts[prompts.length - 1].focus();

      // Update lastOutputEnd to the current end of terminal content
      lastOutputEnd = terminal.scrollHeight;

      // Scroll to the bottom of the terminal
      document.body.scrollTop = document.body.scrollHeight;
    } else if (e.key === "ArrowUp") {
      command.value = history[history.length - 1];
    } else if (e.key === "ArrowDown") {
      command.value = "";
    }
  };
});
