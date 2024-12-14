//連結:https://codepen.io/yuyeh1212/pen/qBeYoKK

const element = document.querySelector('#targetId');
if(element.getAttribute('name') === 'google') {
    element.setAttribute('herf', 'https://www.google.com/');
    element.setAttribute('target', '_blank');
    element.setAttribute('class', 'colorRed');
}