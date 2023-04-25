// создаем функцию  под названии burgerMenuAction
// создаем переменную mobileMenu  даем функцию document.getElementById("") 
// которая будет  искать по айди она содержить целый тег 
function burgerMenuAction(){
    let mobileMenu = document.getElementById("desktop-menu");
    // если mobileMenu cтилистика дисплей проверяет === нон
    // вместо дисплей можно вставить любое значение css
    if(mobileMenu.style.display === "none"){
        mobileMenu.style.display ="block";
    }else{
        mobileMenu.style.display ="none";
    }
    console.log(mobileMenu);
} 