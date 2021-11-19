const btnReq = document.querySelector('.mview_req .proj_approval .btn_div .btn.req');
const showReq = document.querySelector('.mview_req .proj_approval .btn_div .reqinfo_popup');
const btnDeleg = document.querySelector('.mview_req .proj_approval .btn_div .btn.deli');
const showDeleg = document.querySelector('.mview_req .proj_approval .btn_div .deleg_popup');

btnReq.addEventListener('click', (e) => {
    if (!showReq.classList.contains('show')) {
        showReq.classList.add('show')
        showDeleg.classList.remove('show');
    }
    else {
        showReq.classList.remove('show');
    }

})

btnDeleg.addEventListener('click', () => {
    if (!showDeleg.classList.contains('show')) {
        showDeleg.classList.add('show');
        showReq.classList.remove('show');
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
        }
    }
})