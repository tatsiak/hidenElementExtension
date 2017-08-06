
var re = /yapi.(?:[\w\.]+)\/stat\/\?g=(\w+)/g;
var value = re.exec(document.documentElement.innerHTML);
if (value != null && value[1] != '') {
    var popup = document.createElement('div');
    var htmlMessage = document.createElement('span');
    popup.style.zIndex = 999;
    popup.style.width = '350px';
    popup.style.height = '20px';
    popup.style.backgroundColor = "#FFFFFF"
    popup.style.position = "absolute";
    popup.style.right = 0;
    popup.style.top = 0;
    htmlMessage.innerHTML = 'Value is' + ": "+ value[1] + '</br>';
    popup.appendChild(htmlMessage);
    document.body.appendChild(popup);
}
