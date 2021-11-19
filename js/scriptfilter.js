const showFilter = document.querySelector('.divfilter2 .top_up2 ul li:nth-child(2)');
const filterdiv = document.querySelector('.divfilter2 .top_up2 .filter_div');
const overlay = document.querySelector('.proj_filter .myoverlay');
const milediv = document.querySelector('.proj_filter .divfilter2 .project1 .expand .border-bottom .divcon3 #tree_open');
const showMile = document.querySelector('.proj_filter .divfilter2 .project1 .projectcon1 .milestone');
const milediv2 = document.querySelector('.proj_filter .divfilter2 .project1 .projectcon1 .milestone p');
const showMile2 = document.querySelector('.proj_filter .divfilter2 .project1 .projectcon1 .milestone .milehide');
const showFinalmile = document.querySelector('.proj_filter .divfilter2 .project1 .projectcon1 .main_mile');
const finalmile1 = document.querySelector('.proj_filter .divfilter2 .project1 .projectcon1 .milestone  .milestone2');
const finalmile2 = document.querySelector('.proj_filter .divfilter2 .project1 .projectcon1 .milestone .milestone2 div');
const finalmile3 = document.querySelector('.proj_filter .divfilter2 .project1 .projectcon1 .milestone .milestone2 button');
const showTable = document.querySelectorAll('.proj_filter .divfilter2 .project1 .projectcon1 .head1 span:first-child');
const addColumn = document.querySelector('.proj_filter .divfilter2 .project1 .projectcon1 .head11 button span i');
const dropmenu = document.querySelector('.proj_filter .divfilter2 .project1 .projectcon1 .head9 .dropdown-menu');
let root = document.querySelector(':root');
let divfilter = document.querySelector('.divfilter2');
let tabnum = document.querySelectorAll('.divfilter2 .tab_content');
let mainul = document.querySelectorAll('.divfilter2 .top_up ul li');
let liIcon = document.querySelectorAll('.divfilter2 .top_up ul li i');
const plannedInput = document.querySelectorAll('.proj_filter .divfilter2 .project1 .projectcon1 .expand .divcon4 input');
const startdateInput = document.querySelectorAll('.proj_filter .divfilter2 .project1 .projectcon1 .expand .divcon5 input');
const editTitle = document.querySelectorAll('.proj_filter .divfilter2 .project1 .projectcon1 > .row h5');
const clickEdit = document.querySelectorAll('.proj_filter .divfilter2 .project1 .projectcon1 .expand .divcon10 div');
const showEdit = document.querySelectorAll('.proj_filter .divfilter2 .project1 .projectcon1 .expand .addedit');
const chooseEdit = document.querySelectorAll('.proj_filter .divfilter2 .project1 .projectcon1 .expand .addedit p');
const chooseEdit2 = document.querySelectorAll('.proj_filter .divfilter2 .project1 .projectcon1 .expand .addedit input');
const addEdit = document.querySelectorAll('.proj_filter .divfilter2 .project1 .projectcon1 .expand .addedit .btndiv');
const addEdit2 = document.querySelectorAll('.proj_filter .divfilter2 .project1 .projectcon1 .expand .addedit .btndiv2');
const doneEdit = document.querySelectorAll('.proj_filter .divfilter2 .project1 .projectcon1 .expand .addedit .btndiv2 .bg-success');
const discardEdit = document.querySelectorAll('.proj_filter .divfilter2 .project1 .projectcon1 .expand .addedit .btndiv2 .bg-secondary');
let statusColor, statusText, textVal, value;

showFilter.addEventListener('click', () => {
    if (!filterdiv.classList.contains('showfilter')) {
        filterdiv.classList.add('showfilter');
        showFilter.classList.add('active');
        overlay.classList.add('active');
    }
    else {
        filterdiv.classList.remove('showfilter');
        showFilter.classList.remove('active');
        overlay.classList.remove('active');
    }
})
window.addEventListener('click', hideFilterdiv);
function hideFilterdiv(e) {
    if (e.type === "ESC" || e.type === "Escape" || e.type === "click" && e.target == overlay) {
        filterdiv.classList.remove('showfilter');
        showFilter.classList.remove('active');
        overlay.classList.remove('active');
        mainul[mainul.length - 1].classList.remove('active');
        divfilter.querySelector('.addview').classList.remove('active');
        tabnum[0].classList.add('active');
        mainul[0].classList.add('active');
        showEdit.forEach((showEdit) => {
            showEdit.classList.remove('active');
        })
        // if (dropmenu.classList.contains('show')) {
        //     dropmenu.classList.remove('show');
        // }
        addColumn.innerText = "add";
    }
}


milediv.addEventListener('click', () => {
    if (!showMile.classList.contains('showmilestone')) {
        showMile.classList.add('showmilestone');
        root.style.setProperty("--caret", '"\f0d7"');
    }
    else {
        showMile.classList.remove('showmilestone');
        showMile2.classList.remove('showmilestone2');
        showFinalmile.classList.remove('showmain_mile');
    }
})

milediv2.addEventListener('click', () => {
    if (!showMile2.classList.contains('showmilestone2')) {
        showMile2.classList.add('showmilestone2');
    }
    else {
        showMile2.classList.remove('showmilestone2');
    }
})

finalmile1.addEventListener('click', () => {
    showFinal();
})

function showFinal() {
    if (!showFinalmile.classList.contains('showmain_mile')) {
        showFinalmile.classList.add('showmain_mile');
        showMile.classList.add('showmilestone');
        showMile2.classList.remove('showmilestone2');
    }
    else {
        showFinalmile.classList.remove('showmain_mile');
    }
}

mainul.forEach((val) => {
    val.addEventListener('click', (e) => {
        let li = e.target;
        if (!e.target.classList.contains('active')) {
            let target = e.target.getAttribute('data-target');
            if (target === '.addview') {
                showaddView(target, li);
                return;
            }
            showTabCon(target, li);
        }
    })
});
liIcon.forEach((val) => {
    val.addEventListener('click', (e) => {
        e.stopPropagation();
        let li = e.target.closest('li');
        if (!li.classList.contains('active')) {
            let target = li.getAttribute('data-target');
            if (target === '.addview') {
                showaddView(target, li);
                return;
            }
            showTabCon(target, li);
        }
    })
});

function showTabCon(target, li) {
    let removeactive = divfilter.querySelector('ul li.active');
    removeactive.classList.remove('active');
    for (let i = 0; i < tabnum.length; i++) {
        tabnum[i].classList.remove('active');
    }
    li.classList.add('active');
    divfilter.querySelector(target).classList.add('active');
}

function showaddView(target, li) {
    let removeactive = divfilter.querySelector('ul li.active');
    let removeCon = removeactive.getAttribute('data-target');
    removeactive.classList.remove('active');
    divfilter.querySelector(removeCon).classList.add('active');
    li.classList.add('active');
    divfilter.querySelector(target).classList.add('active');
    overlay.classList.add('active');
}

showTable.forEach((expand) => {
    expand.addEventListener('click', (e) => {
        e.stopPropagation();
        let expand_div = e.target.closest('.projectcon1').querySelector('.expand');
        let expand_text = e.target;
        if (!expand_div.classList.contains('active')) {
            expand_div.classList.add('active');
            expand_text.innerText = "expand_more";
        }
        else {
            expand_div.classList.remove('active');
            expand_text.innerText = "expand_less";
        }
    })
})

// addColumn.addEventListener('click', (e) => {
//     e.stopPropagation();
//     let target = e.target;
//     let dropmenu = e.target.closest('.head9').querySelector('.dropdown-menu');
//     if (dropmenu.classList.contains('show')) {
//         target.innerText = 'clear';
//         overlay.classList.add('active');
//     }
//     else {
//         target.innerText = "add";
//     }
// }, true);

clickEdit.forEach((edit) => {
    edit.addEventListener('click', (e) => {
        let closestAddedit = e.target.closest('.expand').querySelector('.addedit');
        statusColor = e.target;
        statusText = e.target;
        if (!closestAddedit.classList.contains('active')) {
            closestAddedit.classList.add('active');
            overlay.classList.add('active');
            chooseEdit.forEach((choose) => {
                choose.addEventListener('click', (e) => {
                    if (!choose.hasAttribute('contenteditable'))
                        choosedefault(e, statusColor, statusText, closestAddedit);
                })
            });
        }
    })
})
function choosedefault(e, statusColor, statusText, closestAddedit) {
    let colorval = e.target.getAttribute('value');
    let target = e.target.getAttribute('text-target');
    let targettext = e.target.closest('.addedit').querySelector(target).innerText;
    statusColor.style.backgroundColor = `${colorval}`;
    statusText.innerText = `${targettext}`;
    closestAddedit.classList.remove('active');
    overlay.classList.remove('active');
}
addEdit.forEach((addEdit, ind) => {
    addEdit.addEventListener('click', (e) => {
        let activeCheck = e.target.parentNode;
        let colorInput = activeCheck.closest('.expand').querySelector('.addedit').querySelectorAll('input');
        let paraText = activeCheck.closest('.expand').querySelector('.addedit').querySelectorAll('p');
        if (activeCheck.classList.contains('active') && !addEdit2[ind].classList.contains('active')) {
            addEdit2[ind].classList.add('active');
            activeCheck.classList.remove('active');
            colorInput.forEach((input) => {
                input.removeAttribute('disabled');
            })
            paraText.forEach((text) => {
                text.setAttribute('contenteditable', 'true');
                if (text.hasAttribute('contenteditable')) {
                    paraText.forEach((text) => {
                        text.addEventListener('input', (e) => {
                            // let targetDiv = e.target.closest('.projmaincon').querySelector('.divcon10 div');
                            textVal = e.target.innerText;
                            statusText.innerText = `${textVal}`;
                        })
                    })
                    colorInput.forEach((input) => {
                        input.addEventListener('input', (e) => {
                            value = e.target.value;
                            // let targetDiv = e.target.closest('.projmaincon').querySelector('.divcon10 div');
                            statusColor.style.backgroundColor = `${value}`;
                        })
                    })
                }
            })
        }
    })
})

doneEdit.forEach((doneEdit) => {
    doneEdit.addEventListener('click', (e) => {
        statusText.setAttribute('textval', `${textVal}`);
        statusColor.setAttribute('colorval', `${value}`);
        finalEdit(e);
    })
})
discardEdit.forEach((discardEdit) => {
    discardEdit.addEventListener('click', (e) => {
        let textVal = statusText.getAttribute('textval');
        let colorVal = statusColor.getAttribute('colorval');
        statusColor.style.backgroundColor = `${colorVal}`;
        statusText.innerText = `${textVal}`;
        finalEdit(e);
    })
})
function finalEdit(e) {
    let newbtndiv = e.target.closest('.addedit').querySelector('.btndiv');
    let newbtndiv2 = e.target.closest('.addedit').querySelector('.btndiv2');
    let targetAddedit = e.target.closest('.addedit');
    targetAddedit.classList.remove('active');
    let colorInput = e.target.closest('.expand').querySelector('.addedit').querySelectorAll('input');
    let paraText = e.target.closest('.expand').querySelector('.addedit').querySelectorAll('p');

    colorInput.forEach((input) => {
        input.setAttribute('disabled', 'disabled');
    })
    paraText.forEach((text) => {
        text.removeAttribute('contenteditable');
    })
    newbtndiv2.classList.remove('active');
    newbtndiv.classList.add('active');
    overlay.classList.remove('active');
}

const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
function setPlannedDate() {
    let date = new Date();
    let currentMonth = month[date.getMonth()];
    let currentYear = date.getFullYear();
    let currentDate = date.getDate();
    plannedInput.forEach((input) => {
        input.value = `${currentMonth} ${currentDate}-${currentDate + 5}`;
    })
    startdateInput.forEach((input) => {
        input.value = `${currentMonth} ${currentDate},${currentYear}`;
    })
}
setPlannedDate();

editTitle.forEach((title) => {
    title.addEventListener('dblclick', (e) => {
        for (let i = 0; i < editTitle.length; i++) {
            editTitle[i].removeAttribute('contenteditable');
        }
        let target = e.target;
        target.setAttribute('contenteditable', 'true');
    })
})

$(function () {

    $('input[name="datefilter"]').daterangepicker({
        autoUpdateInput: false,
        locale: {
            cancelLabel: 'Clear'
        }
    });

    $('input[name="datefilter"]').on('apply.daterangepicker', function (ev, picker) {
        $(this).val(picker.startDate.format('MMM DD') + ' - ' + picker.endDate.format('DD'));
    });

    $('input[name="datefilter"]').on('cancel.daterangepicker', function (ev, picker) {
        $(this).val('');
    });

});

$.datetimepicker.setDateFormatter('moment')

$('#picker').add('#picker2').add('#picker3').add('#picker4').add('#picker5').
    add('#picker6').add('#picker7').add('#picker8').add('#picker9').add('#picker10').add('#picker11').datetimepicker(
        {
            timepicker: false,
            datepicker: true,
            format: 'MMM DD,YYYY'
        });