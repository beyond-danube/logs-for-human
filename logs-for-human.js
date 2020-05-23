// ==UserScript==
// @name Logs for Human
// @author Alexey Siniavtsev
// @match https://your-jenkins.com/* - add your resource, where you view logs here
// @match https://anothreresource.org/* - or here
// ==/UserScript==

function highLight(word, color, bgcolor) {
    var pre = document.getElementsByTagName('pre');
    var div = document.getElementsByTagName('div');

    reColorCollection(pre, word, color, bgcolor);
    reColorCollection(div, word, color, bgcolor);
}

function reColor(str, word, color, bgcolor){
    var regexp = new RegExp(word, 'g')
    var colored = '<span style="background-color:' + bgcolor + ';color:' + color + '">' + word + '</span>';

    str = str.replace(regexp, colored);
    return str;
}

function reColorCollection(collection, word, color, bgcolor) {
    for (var n = 0; n < collection.length; n++) {
        collection[n].innerHTML = reColor(collection[n].innerHTML, word, color, bgcolor);

    }
}

highLight('ERROR', 'white', '#a60000');
highLight('FATAL', 'white', '#a60000');

highLight('WARNING', 'white', '#ff0080');
highLight('WARN', 'white', '#ff0080');

highLight('DEBUG', 'black', '#dfdf00');

highLight('TRACE', 'white', '#008080');

highLight('INFO', '#0080c0', 'white');