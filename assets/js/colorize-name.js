const knownAuthors = {
  'Easy Dynamics': '#FF6600',
  'NIST': '#000000',
}

const colorizeName = (name) => {
  if (knownAuthors[name]) {
    return knownAuthors[name];
  }

  let hash = 0;
  for (let i = 0; i < name.length; i += 1) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';
  for (let i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  return color;
}

const colorizeAllNames = () => {
  const authorDivs = document.querySelectorAll('.tool-author-name');
  console.log(authorDivs);
  authorDivs.forEach((div) => {
    console.log(div);
    const name = div.innerText;
    const color = colorizeName(name);
    div.style["border-color"] = color;
    div.style["border-style"] = "solid";
    div.style["border-width"] = ".5px";
    div.style["background-color"] = `${color}2F`;
  });
}

// (() => {
//   colorizeAllNames();
// })()

window.onload = colorizeAllNames;
