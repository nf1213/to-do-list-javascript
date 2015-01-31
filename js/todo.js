document.forms['todo'].add.addEventListener('click', addItem);

function addItem() {
  var item = $('#new')
  if(item.val() !== "") {
    var list = $('#list')
    var checkbox = $('<input type="checkbox">');
    list.append(checkbox);
    list.append(item.val() + '<br>')
    item.val("");
  }
}

function enterAdd(e) {
  if (e.keyCode == 13 || e.which == 13) {
    addItem();
    return false;
  }
}
