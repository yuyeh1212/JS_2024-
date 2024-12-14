// 連結:https://codepen.io/yuyeh1212/pen/ZEgMXZV

//(1)
const el = document.querySelector('#targetInput');
const triggerBtn = document.querySelector('#triggerBtn');

triggerBtn.addEventListener('click', function(){
    let newValue = Number(el.value);
    newValue += 300;
    el.value = newValue;
    console.log(newValue);

    const attributeValue = el.getAttribute('value');
    console.log(attributeValue);
});

//(2)
const selectPets = document.querySelector('.selectPets');
const choosePet = document.querySelector('.choosePet');

selectPets.addEventListener('change', function(){
    choosePet.textContent = selectPets.options[selectPets.selectedIndex].text;
})