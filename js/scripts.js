function clearSelection(name) {
    var options = document.getElementsByName(name);
    for (var i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}
