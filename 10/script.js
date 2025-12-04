function main() {
  const htmlEl = document.getElementById("paragraph");
  const text = "I'm typing away something";
  typeWrite(text, htmlEl);
}

async function typeWrite(text, htmlEl, options = {}) {
  const cursorExists = true;

  for (let i = 0; i < text.length; i++) {
    const newText = text.slice(0, i + 1);
    const randomTimeout = getRandomTimeout(10, 100);

    updateText(newText, htmlEl, cursorExists);
    await wait(randomTimeout);
  }

  removeCursorIfExists(htmlEl, cursorExists);
}

function updateText(text, htmlEl, addCursor = false) {
  const cursor = addCursor ? "|" : "";
  htmlEl.textContent = text + cursor;
}

function removeCursorIfExists(htmlEl, cursorExists) {
  if (cursorExists) {
    htmlEl.textContent = htmlEl.textContent.slice(0, -1);
  }
}

function getRandomTimeout(start = 10, end = 50) {
  return Math.floor(Math.random() * (end - start + 1)) + start;
}

function wait(ms) {
  return new Promise((res) => {
    setTimeout(res, ms)
  });
}

main();
