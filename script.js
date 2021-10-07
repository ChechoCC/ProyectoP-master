const toogle_btn = document.querySelector('.despliegue-toogle');
const navigation = document.querySelector('.heater .navigation')

toogle_btn.addEventListener('click', ()=>{
    if(navigation.classList.contains('active')){
        navigation.classList.remove('active')
    }
    else{
        navigation.classList.add('active')
    }
})

