var selector = "[name=presale]";
if (document.querySelector(selector).value != '') {
    var hidenElementValue = document.querySelector(selector).value;
    var popup = document.createElement('div');
    var htmlMessage = document.createElement('span');
    popup.style.zIndex = 999;
    popup.style.width = '280px';
    popup.style.height = '20px';
    popup.style.backgroundColor = "#FFFFFF"
    popup.style.position = "absolute";
    popup.style.right = 0;
    popup.style.top = 0;
    htmlMessage.innerHTML = selector + ": "+ hidenElementValue + '</br>';
    popup.appendChild(htmlMessage);
    document.body.appendChild(popup);
}