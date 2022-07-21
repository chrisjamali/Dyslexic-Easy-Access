const body = document.querySelector('body').style;
body.fontFamily = 'OpenDyslexic-Regular';

body.letterSpacing = '0.15em';
body.wordSpacing = '0.6em';
body.lineHeight = '1.5em';
body.backgroundColor = '#ffff00 ';
body.textDecoration = 'none';
body.color = '#000000 !important';
body.textShadow = '10px 10px 10px #ffff00';
// body.style.fontStyle = 'normal'
// console.log('WE MADE IT');
// body.setAttribute('class', 'regular');

// // const child = links.childNodes
// // child.forEach(x => x.style.textDecoration = 'none');
// while (body.attributes.length > 0) {

//   console.log(body.attributes[0]);
//   body.removeAttribute(body.attributes[0].name);
// }

// body.setAttribute('class', 'regular');
const divArr = document.getElementsByTagName('div');

for (let i = 0; i < divArr.length; i++) {
  let item = divArr.item(i).style;
  item.letterSpacing = '0.15em !important';
  item.wordSpacing = '0.6em !important';
  item.fontFamily = 'OpenDyslexic-Regular';
  item.backgroundColor = '#ffff00';
  item.lineHeight = '1.5em !important';
  item.color = 'black !important';
  item.textDecoration = 'none';
  item.textShadow = '1px 1px 10px #ffff00';
  if ((item.color = '#C9D1D9')) {
    item.color = 'black';
  }
  // item.style.fontStyle = 'normal'
}

const links = document.querySelectorAll('a');

for (let i = 0; i < links.length; i++) {
  links[i].style.textDecoration = 'none';
  links[i].style.color = 'blue';
  // links[i].style.background = '#ffff00';
}

// links.textDecoration = 'none'
// body.classList = 'code';
// .setAttribute('className', 'regular');
// bodyText.setAttribute("className",'.regular')
const italics = document.getElementsByTagName('i');
for (let i = 0; i < italics.length; i++) {
  italics[i].style.fontStyle = 'normal';

  // links[i].style.background = '#ffff00';
}

const tableArr = document.getElementsByTagName('span');
for (let i = 0; i < tableArr.length; i++) {
  if (
    (tableArr[i].style.fontFamily = 'Consolas,Menlo,"courier new",monospace')
  ) {
    tableArr[i].style.fontFamily = 'OpenDyslexicMono-Regular';
  }
  if (tableArr[i].style.color = '#C9D1D9') {
    tableArr[i].style.color = 'black';
  }
}

document.getElementById('content').style.backgroundColor = 'yellow';
