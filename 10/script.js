function main() {
  const htmlEl = document.getElementById("paragraph");
  const text = "I'm typing away something";
  typeWrite(text, htmlEl);
}

function typeWrite(text, htmlEl, options = {}) {
  const nChars = text.length;
  let lastTimeout = 0;
  const timeoutStep = 10;

  for (let i = 0; i < nChars; i++) {
    const newText = cutText(text, i+1);
    const randomTimeout = getRandomTimeout(10, 100)
    setTimeout(() => {
        // console.log(newText)
      htmlEl.textContent = "";
      htmlEl.textContent += newText;
    }, lastTimeout);
    lastTimeout += timeoutStep + randomTimeout;
  }
}

function cutText(text, iUntil) {
  return text.slice(0, iUntil);
}

function getRandomTimeout(start = 10, end = 50) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}


main()