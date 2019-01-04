paintTable();
createSpanInBlockByID('hello');
createSpanInBlockByID('hello');
createSpanInBlockByID('hello');
createCloneNode(document.getElementsByClassName('cloned__div')[0]);
addChildrenTo('ul', 5, 'li');
replaceElementBy('newElement', 'oldElement');
paintCharacters(document.getElementById('textNode'), ['#00ff00', '#66ccff', '#ffff66', '#ff00ff', '#ff3300', '#999966', '#003300']);

function getAttributes() {
  var doc = document.getElementById('w3r');
  var res = '',
    arr = ['href', 'hreflang', 'rel', 'target', 'type'];

  for (var i = 0; i < arr.length; i++) {
    res += doc.getAttribute(arr[i]) + ' ';
  }
  console.log(res);
}

function paintTable() {
  var table = document.getElementById('table');
  var trr;

  for (var i = 0; i < 10; i++) {
    trr = table.rows[i];
    trr.cells[i].style.backgroundColor = 'red';
  }
}

function createSpanInBlockByID(blockID) {
  var elem = document.getElementById(blockID);  

  if (!elem.querySelector('span')) {
    var sp = document.createElement('span');
    sp.innerHTML = 'hello';
    elem.appendChild(sp);
  }
}

function createCloneNode(block) {
  var newBlock = block.cloneNode(true);
  document.body.appendChild(newBlock);
}

function addChildrenTo(block, count, type) {
  var newBlock = document.createElement(block);

  for (var i = 0; i < count; i++) {
    newBlock.appendChild(document.createElement(type));
  }
  document.body.appendChild(newBlock);
}

function replaceElementBy(blockCurrent, blockToReplace) {
  var newBlock = document.getElementById(blockCurrent);
  var replaceBlock = document.getElementById(blockToReplace);
  var cloneBlock = newBlock.cloneNode(true);  
  replaceBlock.parentNode.replaceChild(cloneBlock, replaceBlock);
}

function paintCharacters(elem, arr) {
  var text = elem.textContent;
  var newElement = elem.cloneNode(false);
  var check = '';

  function randomColor(arr) {
    var min = 0,
      max = arr.length - 1;

    return arr[Math.round(Math.random() * (max - min)) + min];
  }

  function setCheck() {
    if (text[i] !== ' ') {
      check = newElement.children[i].style.color;
    }
  }

  for (var i = 0; i < text.length; ) {
    newElement.appendChild(document.createElement('span'));
    newElement.children[i].innerHTML = text[i];
    newElement.children[i].style.color = randomColor(arr);

    if (i > 0) {
      if (check !== newElement.children[i].style.color) {
        setCheck();
        i++;
      }
    } else {
      setCheck();
      i++;
    }
  }
  elem.parentElement.replaceChild(newElement, elem);
}

