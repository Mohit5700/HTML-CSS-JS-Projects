"use strict";

const btnEl = document.querySelector("button");
const emojiNameEl = document.querySelector("h3");

const emoji = [];

async function fetchEmoji() {
  try {
    const response = await fetch(
      "https://emoji-api.com/emojis?access_key=bea20eab7ea4a4731b4ba62e32a5f87b81068536"
    );

    const data = await response.json();

    for (let i = 0; i < 1500; i++) {
      emoji.push({
        character: data[i].character,
        name: data[i].unicodeName,
      });
    }
  } catch (err) {
    console.log(err);
  }
}

fetchEmoji();
btnEl.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * emoji.length);
  btnEl.innerText = emoji[randomNum].character;
  emojiNameEl.innerText = emoji[randomNum].name;
});
