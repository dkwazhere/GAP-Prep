function redirect() {
    var selectedChoice = document.getElementById("choices").value;
    console.log(selectedChoice);

    document.forms[0].onsubmit = function(e) {
        e.preventDefault();
        var list = document.getElementById('choices');
        window.location.href = list.options[list.selectedIndex].value;
    }
}

redirect();


