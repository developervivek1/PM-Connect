const btnReq = document.querySelector('.mview_req .proj_approval .btn_div .btn.req');
const showReq = document.querySelector('.mview_req .proj_approval .btn_div .reqinfo_popup');
const searchInput = document.querySelector('.mview_req .proj_approval .btn_div .reqinfo_popup .search_div input');
const searchInput2 = document.querySelector('.mview_req .proj_approval .btn_div .deleg_popup .search_div input');
const contactName = document.querySelectorAll('.mview_req .proj_approval .btn_div .reqinfo_popup .pop_grid .pop_grid2 p');
const contactName2 = document.querySelectorAll('.mview_req .proj_approval .btn_div .deleg_popup .pop_grid .pop_grid2 p');
const btnDeleg = document.querySelector('.mview_req .proj_approval .btn_div .btn.deli');
const showDeleg = document.querySelector('.mview_req .proj_approval .btn_div .deleg_popup');
const overlay = document.querySelector('.mview_req .myoverlay');
btnReq.addEventListener('click', () => {
if (!showReq.classList.contains('show')) {
showReq.classList.add('show')
showDeleg.classList.remove('show');
overlay.classList.add('active');
}
else {
showReq.classList.remove('show');
}
})
btnDeleg.addEventListener('click', () => {
if (!showDeleg.classList.contains('show')) {
showDeleg.classList.add('show');
showReq.classList.remove('show');
overlay.classList.add('active');
}
else {
showDeleg.classList.remove('show');
}
})
window.addEventListener('keyup', (e) => {
if (e.key === "Escape" || e.key === "ESC") {
if (showReq.classList.contains('show') || showDeleg.classList.contains('show')) {
showReq.classList.remove('show');
showDeleg.classList.remove('show');
overlay.classList.remove('active');
}
}
})
window.addEventListener('click', (e) => {
if (e.target==overlay) {
if(showReq.classList.contains('show') || showDeleg.classList.contains('show'))
{
showReq.classList.remove('show');
showDeleg.classList.remove('show');
overlay.classList.remove('active');
}
}
})
searchInput.addEventListener('keyup',(e)=>
{
let searchName = e.target.value.toLowerCase();
contactName.forEach((name)=>
{
searchContact(name,searchName);
})
})
searchInput2.addEventListener('keyup',(e)=>
{
let searchName = e.target.value.toLowerCase();
contactName2.forEach((name)=>
{
searchContact(name,searchName);
})
})
function searchContact(name,searchName)
{
if(name.innerText.toLowerCase().includes(searchName))
{
let closePop = name.closest('.pop');
closePop.style.display="block";
}
else
{
let closePop = name.closest('.pop');
closePop.style.display="none";
}
}