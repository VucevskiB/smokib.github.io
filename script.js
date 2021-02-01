window.onload = function() {
    var projectTemplate = document.getElementById("project");
    var breakLine = document.getElementById("line-break");
    var body = document.getElementById("body");


    for (var i = 0; i < 3; i++) {
        var clone = projectTemplate.cloneNode(true);
        var clone2 = breakLine.cloneNode(true);
        //body.appendChild(clone2);
        //body.appendChild(clone);

    }
}