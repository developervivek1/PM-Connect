const menu_overlay = document.querySelector('.menu_overlay');
const mobileTrigger = document.querySelector('.mobile-menuhead .hamberger-menu span');
const mobileMenu = document.querySelector('nav');
const noticonTab = document.querySelectorAll('.notification_div #owntabs');
const notiTrigger= document.querySelector('nav #show_noti');
const notiActive= document.querySelector('.notification_div');
const notiOverlay= document.querySelector('.noti_overlay');
const helpsuppDiv= document.querySelector('.helpsupport_div');
const helpTrigger= document.querySelector('#show_helpSupp');
const searchAny= document.querySelector('.search_div .col-md-12 > input');
const searchCon= document.querySelector('.search_div .search_con');
const backTrigger =document.querySelectorAll('.col-md-12 > .backArrow');
const searchDiv2= document.querySelector('.search_div');
const searchTrigger= document.querySelector('#showSearch');
const logochange =document.querySelector('.div1 h3 img:nth-child(2)');
const hamberChange =document.querySelector('.div1 h3 img:nth-child(3)');
const linavActive = document.querySelectorAll('nav ul li');

linavActive.forEach((liActive,ind)=>
{
    liActive.addEventListener('click',(e)=>
    {
        navIndex = ind;
        e.target.closest('li').querySelector('img:first-child').classList.add('active');
        e.target.closest('li').querySelector('img:last-child').classList.add('deactive');
    })
})
mobileTrigger.addEventListener('click', () => {
    if (!mobileMenu.classList.contains('active')) {
        mobileMenu.classList.add('active');
        menu_overlay.classList.add('active');
    }
})
hamberChange.addEventListener('click', () => {
    if (mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        menu_overlay.classList.remove('active');
    }
})

window.addEventListener('click', hideFilterdiv);

function hideFilterdiv(e) {
    if (e.type === "click" && e.target == menu_overlay) {
        mobileMenu.classList.remove('active');
        menu_overlay.classList.remove('active');
    }
    else if(e.target==notiOverlay)
    {
        notiActive.classList.remove('active');
        helpsuppDiv.classList.remove('active')
        searchDiv2.classList.remove('active');
        notiOverlay.classList.remove('active');
        let img1 = linavActive[navIndex].querySelector('img:first-child');
        let img2 = linavActive[navIndex].querySelector('img:last-child');
        img1.classList.remove('active');
        img2.classList.remove('deactive');
    }
}

window.addEventListener('resize', () => {
    if (this.innerWidth < 849) {
        menu_overlay.classList.remove('active');
        mobileMenu.classList.remove('active');
        notiActive.classList.remove('active');
        helpsuppDiv.classList.remove('active')
        searchDiv2.classList.remove('active');
        notiOverlay.classList.remove('active');
        logochange.src="./icons/emmar2.png";
        hamberChange.src="./icons/hambergerMob.png";
    }
    else
    {
        top_up.style.zIndex='6';
        logochange.src="./icons/logo.svg";
        hamberChange.src="./icons/hambergerON.svg";
    }
})
window.addEventListener('load',()=>
{
    if(this.innerWidth < 849)
    {
       logochange.src="./icons/emmar2.png";
       hamberChange.src="./icons/hambergerMob.png";
    }
    else
    {
        logochange.src="./icons/logo.svg";
        hamberChange.src="./icons/hambergerON.svg";
    }
})

noticonTab.forEach((noti) => {
    noti.addEventListener('click', (e) => {
        if (!e.target.classList.contains('active')) {
            e.stopPropagation();
            e.target.closest('.notification_div').querySelector('.tabnoti_con.active').classList.remove('active');
            e.target.closest('.nav_div').querySelector('#owntabs.active').classList.remove('active');
            let target = e.target.getAttribute('data-target');
            e.target.classList.add('active');
            e.target.closest('.notification_div').querySelector(target).classList.add('active');
        }
    })
})
notiTrigger.addEventListener('click',(e)=>
{
    if(!notiActive.classList.contains('active'))
    {
        notiActive.classList.add('active');
        notiOverlay.classList.add('active');
    }
    else
    {
        notiActive.classList.remove('active');
        notiOverlay.classList.remove('active');
    }
})
helpTrigger.addEventListener('click',(e)=>
{
    if(!helpsuppDiv.classList.contains('active'))
    {
        helpsuppDiv.classList.add('active');
        notiOverlay.classList.add('active');
    }
    else
    {
        helpsuppDiv.classList.remove('active');
        notiOverlay.classList.remove('active');
    }
})
searchTrigger.addEventListener('click',(e)=>
{
    if(!searchDiv2.classList.contains('active'))
    {
        searchDiv2.classList.add('active');
        notiOverlay.classList.add('active');
    }
    else
    {
        searchDiv2.classList.remove('active');
        notiOverlay.classList.remove('active');
    }
})
searchAny.addEventListener('keyup',(e)=>
{
    let val = e.target.value;
    if(val=="" || val=='undefined')
    {
        searchCon.classList.remove('active');
    }
    else
    {
        searchCon.classList.add('active');
    }
})

backTrigger.forEach((back)=>
{
    back.addEventListener('click',(e)=>
    {
        let img1 = linavActive[navIndex].querySelector('img:first-child');
        let img2 = linavActive[navIndex].querySelector('img:last-child');
        img1.classList.remove('active');
        img2.classList.remove('deactive');
        e.target.closest('.active').classList.remove('active');
        notiOverlay.classList.remove('active');
    })
})