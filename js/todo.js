document.forms['todo'].add.addEventListener('click', addItem);

function addItem() {
  var item = document.getElementById('new');
  if(item.value !== "") {
    var list = document.getElementById('list');
    var li = document.createElement('li');
    li.innerHTML = item.value;
    list.appendChild(li);
    item.value = "";
  }
}

function enterAdd(e) {
  if (e.keyCode == 13 || e.which == 13) {
    addItem();
    return false;
  }
}
