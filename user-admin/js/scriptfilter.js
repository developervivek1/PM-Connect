const showFilter = document.querySelector('.divfilter2 .top_up2 ul li:nth-child(2)');
const filterdiv = document.querySelector('.divfilter2 .top_up2 .filter_div');
const top_up = document.querySelector('.proj_filter .divfilter2 .top_up');
const filterImg = document.querySelector('.divfilter2 .top_up2 ul li:nth-child(2) img');
const overlay = document.querySelector('.proj_filter .myoverlay');
const topup2_overlay = document.querySelector('.proj_filter .divfilter2 .top_up2 .topup2_overlay');
const drop_overlay = document.querySelector('.proj_filter .divfilter2 .drop_overlay');
const milediv = document.querySelector('.proj_filter .divfilter2 .project1 .expand .border-bottom .divcon3 #tree_open');
const showMile = document.querySelector('.proj_filter .divfilter2 .project1 .projectcon1 .milestone');
const milediv2 = document.querySelector('.proj_filter .divfilter2 .project1 .projectcon1 .milestone p');
const showMile2 = document.querySelector('.proj_filter .divfilter2 .project1 .projectcon1 .milestone .milehide');
const showFinalmile = document.querySelector('.proj_filter .divfilter2 .project1 .projectcon1 .main_mile');
const dflexVisible = document.querySelector('.proj_filter .divfilter2 .project1 .projectcon1 .milestone > .d-flex');
const finalmile1 = document.querySelector('.proj_filter .divfilter2 .project1 .projectcon1 .milestone  .milestone2');
const finalmile2 = document.querySelector('.proj_filter .divfilter2 .project1 .projectcon1 .milestone .milestone2 div');
const finalmile3 = document.querySelector('.proj_filter .divfilter2 .project1 .projectcon1 .milestone .milestone2 button');
const showTable = document.querySelectorAll('.proj_filter .divfilter2 .project1 .projectcon1 .head1 span:first-child');
const addColumn = document.querySelectorAll('.proj_filter .divfilter2 .project1 .projectcon1 .head11 button');
const addColumnicon = document.querySelectorAll('.proj_filter .divfilter2 .project1 .projectcon1 .head11 button img');
const disableIcon = document.querySelectorAll('.proj_filter .divfilter2 .project1 .projectcon1 .head11 .dropdown-menu .column a');
const dropmenu = document.querySelector('.proj_filter .divfilter2 .project1 .projectcon1 .head9 .dropdown-menu');
let root = document.querySelector(':root');
let divfilter = document.querySelector('.divfilter2');
let tabnum = document.querySelectorAll('.divfilter2 .tab_content');
let mainul = document.querySelectorAll('.divfilter2 .top_up ul li');
let liIcon = document.querySelectorAll('.divfilter2 .top_up ul li img');
let plannedDiv = document.querySelectorAll('.proj_filter .divfilter2 .project1 .projectcon1 .expand .divcon4');
const editTitle = document.querySelectorAll('.proj_filter .divfilter2 .project1 .projectcon1 > .child-border .row h5');
let clickEdit = document.querySelectorAll('.proj_filter .divfilter2 .project1 .projectcon1 .expand .divcon10 div');
let showEdit = document.querySelectorAll('.proj_filter .divfilter2 .project1 .projectcon1 .expand .addedit');
let chooseEdit = document.querySelectorAll('.proj_filter .divfilter2 .project1 .projectcon1 .expand .addedit p');
let chooseEdit2 = document.querySelectorAll('.proj_filter .divfilter2 .project1 .projectcon1 .expand .addedit input');
let addEdit = document.querySelectorAll('.proj_filter .divfilter2 .project1 .projectcon1 .expand .addedit .btndiv');
let addEdit2 = document.querySelectorAll('.proj_filter .divfilter2 .project1 .projectcon1 .expand .addedit .btndiv2');
let doneEdit = document.querySelectorAll('.proj_filter .divfilter2 .project1 .projectcon1 .expand .addedit .btndiv2 .done');
let discardEdit = document.querySelectorAll('.proj_filter .divfilter2 .project1 .projectcon1 .expand .addedit .btndiv2 .cancel');
const mobileTrigger = document.querySelector('.mobile-menuhead .hamberger-menu span');
const mobileMenu = document.querySelector('.proj_filter nav');
const proj_edit = document.querySelector('.manage_view .proj_edit'); 
const proj_con = document.querySelector('.manage_view .proj_edit .proj_content'); 
const proj_overlay = document.querySelector('.manage_view .proj_overlay'); 
const tabproj_btn = document.querySelectorAll('.manage_view .proj_edit .proj_content .tab-btn .btn');
let projdetail_btn = document.querySelectorAll('.proj_filter .divfilter2 .project1 .projmaincon .divcon1 span');
const projDet_close = document.querySelector('.manage_view .proj_edit .col-md-3 span');
const update_Talk = document.querySelector('.manage_view .proj_edit .attach_div .divfile2 button');
const update_append = document.querySelector('.manage_view .proj_edit .update');
const emoji_Btn = document.querySelector('.manage_view .proj_edit .attach_div .divfile1 .emoji_div:nth-child(2) p');
const emoji_Container = document.querySelector('.manage_view .proj_edit .attach_div .divfile1 .emoji_div:nth-child(2) .giflist');
const emoji_ContainerIn = document.querySelector('.manage_view .proj_edit .attach_div .divfile1 .emoji_div:nth-child(2) .giflist .gifin');
const emoji_Input = document.querySelector('.manage_view .proj_edit .attach_div .divfile1 .emoji_div:nth-child(2) .giflist input');
let calendar_data = document.querySelectorAll('.proj_filter .divfilter2 #rangePicker');
const showSubscribe = document.querySelectorAll('.proj_filter .proj_edit .subscribe #subcribe_pop');
const subs_overlay = document.querySelector('.proj_filter .subscribe_overlay');
const subs_Div = document.querySelector('.proj_filter .proj_edit .subscribe .subscriber_div');
const close_subsdiv = document.querySelector('.proj_filter .proj_edit .subscribe .subscriber_div > .row span');
const userDel = document.querySelectorAll('.proj_filter .proj_edit .subscribe .subscriber_div .subs_con .col-4 i');
const projadd_div = document.querySelector('.proj_filter .proj_add');
const projadd_Close = document.querySelector('.proj_filter .proj_add .col-md-12 > span');
const showprojAdd = document.querySelectorAll('.proj_filter .divfilter2 .project1 .border-bottom .last_div');
const closeProjadd = document.querySelector('.proj_filter .proj_add .projadd_bottom .btn:nth-child(1)');
const saveProjadd = document.querySelector('.proj_filter .proj_add .projadd_bottom .btn:nth-child(2)');
const searchDiv = document.querySelector('.proj_filter .proj_add .assignee_div .usersearch_div');
const assignee_overlay = document.querySelector('.proj_filter .proj_add .assignee_div .assignee_overlay');
const disableInput= document.querySelector('.proj_filter .proj_add .main_add #disabledValue');
let editText =document.querySelectorAll('.proj_filter #editText');
let statusColor, statusText, textVal, value,pageYedit,h5con,adjacentNode ; 

const ImageDisable=[{disSrc: 'icons/ColorImage/assignees_disab.png',enabSrc: 'icons/Assigness.svg'},
{disSrc: 'icons/ColorImage/subitem_disab.png',enabSrc: 'icons/subitem.svg'},
{disSrc: 'icons/ColorImage/calendar_disab.png',enabSrc: 'icons/calender-blue.svg'},
{disSrc: 'icons/ColorImage/calendar_disab.png',enabSrc: 'icons/calender-blue.svg'},
{disSrc: 'icons/ColorImage/actualBudg_disab.png',enabSrc: 'icons/actual budget.svg'},
{disSrc: 'icons/ColorImage/actualBudg_disab.png',enabSrc: 'icons/actual budget.svg'},
{disSrc: 'icons/ColorImage/user_disab.png',enabSrc: 'icons/user.svg'},
{disSrc: 'icons/ColorImage/user_disab.png',enabSrc: 'icons/user.svg'},
{disSrc: 'icons/ColorImage/status_disab.png',enabSrc: 'icons/status.svg'},
{disSrc: 'icons/ColorImage/assignees_disab.png',enabSrc: 'icons/Assigness.svg'},
{disSrc: 'icons/ColorImage/subitem_disab.png',enabSrc: 'icons/subitem.svg'},
{disSrc: 'icons/ColorImage/calendar_disab.png',enabSrc: 'icons/calender-blue.svg'},
{disSrc: 'icons/ColorImage/calendar_disab.png',enabSrc: 'icons/calender-blue.svg'},
{disSrc: 'icons/ColorImage/actualBudg_disab.png',enabSrc: 'icons/actual budget.svg'},
{disSrc: 'icons/ColorImage/actualBudg_disab.png',enabSrc: 'icons/actual budget.svg'},
{disSrc: 'icons/ColorImage/user_disab.png',enabSrc: 'icons/user.svg'},
{disSrc: 'icons/ColorImage/user_disab.png',enabSrc: 'icons/user.svg'},
{disSrc: 'icons/ColorImage/status_disab.png',enabSrc: 'icons/status.svg'},
{disSrc: 'icons/ColorImage/assignees_disab.png',enabSrc: 'icons/Assigness.svg'},
{disSrc: 'icons/ColorImage/subitem_disab.png',enabSrc: 'icons/subitem.svg'},
{disSrc: 'icons/ColorImage/calendar_disab.png',enabSrc: 'icons/calender-blue.svg'},
{disSrc: 'icons/ColorImage/calendar_disab.png',enabSrc: 'icons/calender-blue.svg'},
{disSrc: 'icons/ColorImage/actualBudg_disab.png',enabSrc: 'icons/actual budget.svg'},
{disSrc: 'icons/ColorImage/actualBudg_disab.png',enabSrc: 'icons/actual budget.svg'},
{disSrc: 'icons/ColorImage/user_disab.png',enabSrc: 'icons/user.svg'},
{disSrc: 'icons/ColorImage/user_disab.png',enabSrc: 'icons/user.svg'},
{disSrc: 'icons/ColorImage/status_disab.png',enabSrc: 'icons/status.svg'}];

// Mobile Hamberger Menu
mobileTrigger.addEventListener('click',()=>
{
    if(!mobileMenu.classList.contains('active'))
    {
       mobileMenu.classList.add('active');
       overlay.classList.add('active');
    }
})

// proj_edit Hide/Show
projdetail_btn.forEach((detailProj)=>
{
    detailProj.addEventListener('click',(e)=>
    {
        showProjdetail();
    },true)
})
function showProjdetail()
{
    if(!proj_edit.classList.contains('active'))
    {
        proj_edit.classList.add('active');
        proj_overlay.classList.add('active');
    }    
}
setTimeout(()=>
{
    const textarea = document.querySelector('.manage_view .proj_edit .update .note-editing-area .note-editable');
    let textarea_Val;
    textarea.addEventListener('keyup',(e)=>
    {
        textarea_Val = e.target.innerText;
    })
    update_Talk.addEventListener('click',()=>
    {
        let userName = document.querySelector('.manage_view .proj_edit #firstName').getAttribute('alt');
        let profile_img = document.querySelector('.manage_view .proj_edit #firstName').getAttribute('src');
        let no_update = document.querySelector('.manage_view .proj_edit .update .no_updateyet');
        // let date = new Date()
        // let minute = date.getMinutes();
        if(textarea_Val === undefined || textarea_Val==="")
        {
            return;
        }
        else
        {
            no_update.style.display="none";
            let update_con = document.createElement('div');
            update_con.setAttribute('class','update_con');
            let row1 = document.createElement('div');
            row1.setAttribute('class','row has_pad');
            let user_div = document.createElement('div');
            let noti_con = document.createElement('div');
            let text_div = document.createElement('div');
            let seen_div = document.createElement('div');
            user_div.setAttribute('class','col justify-content-start align-items-center useractive_div');
            noti_con.setAttribute('class','col justify-content-end align-items-center d-flex noti_div');
            text_div.setAttribute('class','col-md-12 mt-5 pt-4 text_div');
            seen_div.setAttribute('class','col-md-12 mt-5 pt-3 d-flex justify-content-end seen_div');
            let user1 = document.createElement('div');
            let user2 = document.createElement('img');
            user2.src = `${profile_img}`;
            user1.appendChild(user2);
            let user3 = document.createElement('p');
            user3.innerText=`${userName}`; 
            let user4 = document.createElement('span');
            user_div.appendChild(user1);
            user_div.appendChild(user3);
            user_div.appendChild(user4);

            let noti1 = document.createElement('p');
            noti1.innerText="20m";
            let noti2 = document.createElement('i');
            noti2.setAttribute('class','material-icons');
            noti2.innerText="notifications_none";
            noti_con.appendChild(noti1);
            noti_con.appendChild(noti2);

            let text1 = document.createElement('p');
            text1.innerText=`${textarea_Val}`;
            text_div.appendChild(text1);

            let seen1 = document.createElement('p');
            seen1.innerText="2 seen";
            seen_div.appendChild(seen1);

            row1.appendChild(user_div);
            row1.appendChild(noti_con);
            row1.appendChild(text_div);
            row1.appendChild(seen_div);

            let row2 = document.createElement('div');
            row2.setAttribute('class','row no_margin');
            let like_div = document.createElement('div');
            let replay_div = document.createElement('div');
            like_div.setAttribute('class','col justify-content-center align-items-center d-flex like_div');
            replay_div.setAttribute('class','col justify-content-center align-items-center d-flex replay_div');
            let like1 = document.createElement('img');
            like1.src="icons/like.svg";
            let like2=document.createElement('p');
            like2.innerText="Like";
            like_div.appendChild(like1);
            like_div.appendChild(like2);
            let replay1 = document.createElement('img');
            replay1.src="icons/replay.svg";
            let replay2=document.createElement('p');
            replay2.innerText="Reply";
            replay_div.appendChild(replay1);
            replay_div.appendChild(replay2);
            row2.appendChild(like_div);
            row2.appendChild(replay_div);
            update_con.appendChild(row1);
            update_con.appendChild(row2);
            update_append.insertBefore(update_con, update_append.childNodes[7]);
            textarea.innerText="";
            textarea_Val=undefined;
        }
    })
},4000)

// Get data using GIF API
emoji_Btn.addEventListener('click',()=>
{
    if(!emoji_Container.classList.contains('active'))
    {
        emoji_Container.classList.add('active');
    }
    else
    {
        emoji_Container.classList.remove('active');
    }
})
window.addEventListener('keyup',(e)=>
{
    if(e.key==="Escape" && emoji_Container.classList.contains('active'))
    {
        emoji_Container.classList.remove('active');
    }
})
async function getapi(e)
{
    if(e.key==="Escape" && emoji_Container.classList.contains('active'))
    {
        emoji_Container.classList.remove('active');
        return;
    }
    e.stopPropagation();
    e.preventDefault();
    let removefig = emoji_ContainerIn.querySelectorAll('figure');
    for(let i =0;i<removefig.length;i++)
    {
        removefig[i].remove();
    }
    let url=`https://api.giphy.com/v1/gifs/search?api_key=12jskRsX6Qa4D5fm9Mkx7b0KW1TQshP1&limit=10&q=`;
    let str = emoji_Input.value.trim();
    let Searchdata = url.concat(str);
    let data = await fetch(`${Searchdata}`);
    let realdata = await data.json();
    let mapdata = realdata.data;
    mapdata.map( data =>
    {
        let fig = document.createElement("figure");
        let img = document.createElement("img");
        img.src = data.images.preview_gif.url;
        img.alt = data.title;
        fig.appendChild(img);
        emoji_ContainerIn.insertAdjacentElement("beforeend", fig);
    })
}
emoji_Input.addEventListener('keyup', getapi);

showSubscribe.forEach((subscribe)=>
{
    subscribe.addEventListener('click',(e)=>
    {
        e.stopPropagation();
       let showDiv = e.target.parentNode.parentNode.querySelector('.subscriber_div');
       if(!showDiv.classList.contains('active'))
       {
           showDiv.classList.add('active');
           subs_overlay.classList.add('active');
       }
       else
       {
           showDiv.classList.remove('active');
           subs_overlay.classList.remove('active');
       }
    })
})
close_subsdiv.addEventListener('click',()=>
{
    if(subs_Div.classList.contains('active'))
    {
       subs_Div.classList.remove('active');
       subs_overlay.classList.remove('active');
    }
})
userDel.forEach((userRem)=>
{
   userRem.addEventListener('click',(e)=>
   {
      let remNode = e.target.closest('.user_list');
      remNode.remove();
   })
})

// hide/show proj_add
showprojAdd.forEach((projAdd)=>
{
    projAdd.addEventListener('click',(e)=>
    {
        if(!projadd_div.classList.contains('active'))
        {
            projadd_div.classList.add('active');
            proj_overlay.classList.add('active');
            closestExpand = e.target.closest('.expand');
            h5con = e.target.closest('.child-border').querySelector('.head1 h5').innerText;
            disableInput.placeholder=`${h5con}`
            adjacentNode = e.target.closest('.border-bottom').previousElementSibling;
            adjacentAppendDiv = e.target.closest('.expand');
        }
        else
        {
            projadd_div.classList.remove('active');
            proj_overlay.classList.remove('active');
        }
    })
})

saveProjadd.addEventListener('click',()=>
{
    let Clone = adjacentNode.cloneNode(true);
    adjacentNode.insertAdjacentElement('afterend', Clone);
    projadd_div.classList.remove('active');
    proj_overlay.classList.remove('active');
    clickEdit = document.querySelectorAll('.proj_filter .divfilter2 .project1 .projectcon1 .expand .divcon10 div');
    showEdit = document.querySelectorAll('.proj_filter .divfilter2 .project1 .projectcon1 .expand .addedit');
    chooseEdit = document.querySelectorAll('.proj_filter .divfilter2 .project1 .projectcon1 .expand .addedit p');
    chooseEdit2 = document.querySelectorAll('.proj_filter .divfilter2 .project1 .projectcon1 .expand .addedit input');
    addEdit = document.querySelectorAll('.proj_filter .divfilter2 .project1 .projectcon1 .expand .addedit .btndiv');
    addEdit2 = document.querySelectorAll('.proj_filter .divfilter2 .project1 .projectcon1 .expand .addedit .btndiv2');
    doneEdit = document.querySelectorAll('.proj_filter .divfilter2 .project1 .projectcon1 .expand .addedit .btndiv2 .done');
    discardEdit = document.querySelectorAll('.proj_filter .divfilter2 .project1 .projectcon1 .expand .addedit .btndiv2 .cancel');
    projdetail_btn = document.querySelectorAll('.proj_filter .divfilter2 .project1 .projmaincon .divcon1 span');
    plannedDiv = document.querySelectorAll('.proj_filter .divfilter2 .project1 .projectcon1 .expand .divcon4');
    actualcloseDate = closestExpand.querySelectorAll('.divcon5 input');
    actualtotalDate = document.querySelectorAll('.proj_filter .divfilter2 .project1 .projectcon1 .expand .divcon5 input');
    calendar_data = document.querySelectorAll('.proj_filter .divfilter2 #rangePicker');
    let newCal = actualcloseDate[actualcloseDate.length -1];
    newCal.setAttribute('id',`picker${actualtotalDate.length +4}`);
    setSpan();
    clickEdit.forEach((edit)=>
    {
        edit.addEventListener('click',(e)=>
        {
            showStatus(e);
        })
    });
    projdetail_btn.forEach((projdetail)=>
    {
        projdetail.addEventListener('click',(e)=>
        {
            showProjdetail();
        })
    });
    calendar_data.forEach(data=>
    {
        ['mouseenter','mouseout'].forEach((e)=>
        {
            data.addEventListener(e, hoverData);
        });
    })
})

// Close proj_add, proj_edit 
proj_overlay.addEventListener('click',hideProjdetail);
projDet_close.addEventListener('click',hideProjdetail);
projadd_Close.addEventListener('click', hideProjdetail);
closeProjadd.addEventListener('click', hideProjdetail);

function hideProjdetail()
{
    if(proj_edit.classList.contains('active') || projadd_div.classList.contains('active'))
    {
        proj_edit.classList.remove('active');
        projadd_div.classList.remove('active');
        proj_overlay.classList.remove('active');
        emoji_Container.classList.remove('active');
        subs_Div.classList.remove('active');
        searchDiv.classList.remove('active');
        subs_overlay.classList.remove('active');
    }  
}

window.addEventListener('click', hideFilterdiv);
function hideFilterdiv(e) {
    if (e.target == overlay) {
        filterdiv.classList.remove('showfilter');
        showFilter.classList.remove('active');
        mobileMenu.classList.remove('active');
        mainul[mainul.length - 1].classList.remove('active');
        divfilter.querySelector('.addview').classList.remove('active');
        tabnum[0].classList.add('active');
        mainul[0].classList.add('active');
        showEdit.forEach((showEdit) => {
            showEdit.classList.remove('active');
        });
        overlay.style.zIndex="6";
        overlay.classList.remove('active');
    }
    else if(e.target==topup2_overlay)
    {
        filterdiv.classList.remove('showfilter');
        showFilter.classList.remove('active');
        topup2_overlay.classList.remove('active');
        filterImg.src=`icons/filter.svg`;
        filterImg.style.cssText='width:14px; height:14px';
        if(e.clientX < 749)
        {
            top_up.style.zIndex='4';
        }
        else
        {
            top_up.style.zIndex='6';
        }
    }
    else if(e.target==drop_overlay)
    {
        addColumnicon.forEach((addIcon)=>
        {
            addIcon.innerText = "add";
        });
        drop_overlay.classList.remove('active');
    }
    else if(e.target==subs_overlay)
    {
        subs_Div.classList.remove('active');
        subs_overlay.classList.remove('active');
    }
    else if(e.target==assignee_overlay)
    {
        searchDiv.classList.remove('active');
        assignee_overlay.classList.remove('active');
    }
}

// window resize function
window.addEventListener('resize',()=>
{
    if(this.innerWidth < 849)
    {
       overlay.classList.remove('active');
       mobileMenu.classList.remove('active');
    }
    else
    {
        top_up.style.zIndex='6';
    }
})

// Hide and Show filter Div
showFilter.addEventListener('click', (e) => {
    if (!filterdiv.classList.contains('showfilter')) {
        filterdiv.classList.add('showfilter');
        showFilter.classList.add('active');
        topup2_overlay.classList.add('active');
        filterImg.src=`icons/filter2.png`;
        filterImg.style.cssText='width:14px; height:10px';
        let xWidth = e.clientX;
        if(xWidth<749)
        {
            top_up.style.zIndex='3';
        }
        else
        {
            top_up.style.zIndex="6";
        }
    }
    else {
        filterdiv.classList.remove('showfilter');
        showFilter.classList.remove('active');
        topup2_overlay.classList.remove('active');
        filterImg.src=`icons/filter.svg`;
        filterImg.style.cssText='width:14px; height:14px';
    }
})

// Milestone Expand/Collapse 
milediv.addEventListener('click', () => {
    if (!showMile.classList.contains('showmilestone')) {
        showMile.classList.add('showmilestone');
        root.style.setProperty("--rot", "90deg");
        dflexVisible.classList.add('visible');
    }
    else {
        showMile.classList.remove('showmilestone');
        showMile2.classList.remove('showmilestone2');
        showFinalmile.classList.remove('showmain_mile');
        root.style.setProperty("--rot", "0deg");
        dflexVisible.classList.remove('visible');
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

// Status Update Edit and Done
clickEdit.forEach((edit) => {
    edit.addEventListener('click', (e) => {
        showStatus(e);
    })
})

function showStatus(e)
{
    pageYedit = e.pageY;
    let closestAddedit = e.target.closest('.expand').querySelector('.addedit');
    statusColor = e.target;
    statusText = e.target;
    if (!closestAddedit.classList.contains('active')) {
        overlay.style.zIndex="1";
        closestAddedit.classList.add('active');
        overlay.classList.add('active');
        chooseEdit.forEach((choose) => {
            choose.addEventListener('click', (e) => {
                if (!choose.hasAttribute('contenteditable'))
                    choosedefault(e, statusColor, statusText, closestAddedit);
            })
        });
    }
}

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

//edit Title
editTitle.forEach((title) => {
    title.addEventListener('dblclick', (e) => {
        for (let i = 0; i < editTitle.length; i++) {
            editTitle[i].removeAttribute('contenteditable');
        }
        let target = e.target;
        target.setAttribute('contenteditable', 'true');
    })
})
editText.forEach((edit)=>
{
    edit.addEventListener('click',(e)=>
    {
        e.stopPropagation();
        let targetEdit = e.target.closest('.d-flex').querySelector(':first-child');
        if(!targetEdit.hasAttribute('contenteditable'))
        {
            targetEdit.setAttribute('contenteditable','true');
        }
        else
        {
            targetEdit.removeAttribute('contenteditable');
        }
    })
})

// Tabs and Pills the Data
tabproj_btn.forEach((tabBtn)=>
{
    tabBtn.addEventListener('click',(e)=>
    {
        if(!e.target.classList.contains('active'))
        {
            let tabconActive = proj_con.querySelector('.tabproj_con.active');
            let tabbtnActive = proj_con.querySelector('.btn.active');
            tabconActive.classList.remove('active');
            tabbtnActive.classList.remove('active');
            let data_target = e.target.getAttribute('data-target');
            e.target.classList.add('active');
            let targetCon = proj_con.querySelector(data_target);
            targetCon.classList.add('active');
        }
    })
})
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

// hide/show Main Table
showTable.forEach((expand) => {
    expand.addEventListener('click', (e) => {
        e.stopPropagation();
        let expand_div = e.target.closest('.projectcon1').querySelector('.expand');
        let img_rot = e.target;
        if (!expand_div.classList.contains('active')) {
            expand_div.classList.add('active');
            img_rot.style.transform="rotate(0deg)";
        }
        else {
            expand_div.classList.remove('active');
            img_rot.style.transform="rotate(180deg)";
        }
    })
})

// Enable/Disable Table Column 
addColumn.forEach((addColumn)=>
{
    addColumn.addEventListener('click',(e)=>
    {
        let target = e.target.closest('.head11').querySelector('button img');
        let dropmenu = e.target.closest('.head11').querySelector('.dropdown-menu');
        if (dropmenu.classList.contains('show')) {
            target.innerText = 'clear';
            drop_overlay.classList.add('active');
        }
        else {
            target.innerText = "add";
        }
    },true)
})
disableIcon.forEach((disable,ind)=>
{
    disable.addEventListener('click',(e)=>
    {
        e.preventDefault();
        e.stopPropagation();
        let targetDel = e.target.getAttribute('disable-data');
        let targetImg = e.target.querySelector('img');
        let nearestTarget = e.target.closest('.projectcon1').querySelectorAll(targetDel);
        let nearestHead = e.target.closest('.head11').querySelector('.dropdown-menu');
        let nearestClear = e.target.closest('.head11').querySelector('button img');
        nearestTarget.forEach((removeNode)=>
        {
            if(!removeNode.classList.contains('disable'))
            {
                removeNode.classList.add('disable');
                targetImg.src = `${ImageDisable[ind].disSrc}`;
            }
            else
            {
                removeNode.classList.remove('disable');
                targetImg.src = `${ImageDisable[ind].enabSrc}`;
            }
        })
        nearestClear.innerText="add";
        nearestHead.classList.remove('show');
    },true)
})

// hovering Data on Planned Date
function setSpan()
{
   plannedDiv.forEach((appendSpan)=>
   {
        let span = document.createElement('span');
        span.style.display="none";
        appendSpan.appendChild(span);
   })
}
setSpan();

calendar_data.forEach(data=>
{
    ['mouseenter','mouseout'].forEach((e)=>
    {
        data.addEventListener(e, hoverData);
    });
})

function hoverData(e)
{
    if(e.type==='mouseenter')
    {
    let dateRange = e.target.value;
    let extractDate= dateRange.substr(4,8);
    let date1 = +extractDate.substr(0,2);
    let date2 = +extractDate.substr(4,6);
    let putDiv = e.target.closest('.plannedDate');
    let hideInput = putDiv.querySelector('input');
    let showSpan = putDiv.querySelector('span');
    showSpan.innerText=`${date2 - date1} Days`
    hideInput.style.display="none";
    showSpan.style.display="block";
    }
    else if(e.type==='mouseout')
    {
    let putDiv = e.target.closest('.plannedDate');
    let hideSpan = putDiv.querySelector('span');
    let showInput = putDiv.querySelector('input');
    hideSpan.style.display="none";
    showInput.style.display="block";
    }
}

// $(function () {

//     $('input[name="datefilter"]').daterangepicker({
//         autoUpdateInput: false,
//         locale: {
//             cancelLabel: 'Clear'
//         }
//     });

//     $('input[name="datefilter"]').on('apply.daterangepicker', function (ev, picker) {
//         $(this).val(picker.startDate.format('MMM DD') + ' - ' + picker.endDate.format('DD'));
//     });

//     $('input[name="datefilter"]').on('cancel.daterangepicker', function (ev, picker) {
//         $(this).val('');
//     });

// });

$.datetimepicker.setDateFormatter('moment')

$('#picker').add('#picker2').add('#picker3').add('#picker4').add('#picker5').
    add('#picker6').add('#picker7').add('#picker8').add('#picker9').add('#picker10').add('#picker11').datetimepicker(
{
    timepicker: false,
    datepicker: true,
    format: 'MMM DD,YYYY'
});

$('#picker12').add('#picker13').datetimepicker(
{
    timepicker: false,
    datepicker: true,
    format: 'MMMM DD,YYYY'
});
$('#picker14').datetimepicker(
    {
        timepicker: true,
        datepicker: true,
        format: 'MMMM DD,YYYY, hh:mma'
    });

$('.h1fixed').scroll(function() {
    $(this).find('.mysticky').css('left', $(this).scrollLeft());
});        
// $('#expand1').scroll(function() {
//     $(this).find('.mysticky2').css('left', $(this).scrollLeft());
// });   
$(document).ready(function() {
    $('#summernote').summernote({
        placeholder: 'Write an update',
        tabsize: 2,
        height: 120,
        toolbar: [
          ['style', ['style']],
          ['font', ['bold', 'underline', 'clear']],
          ['color', ['color']],
          ['para', ['ul', 'ol', 'paragraph']],
          ['table', ['table']],
          ['insert', ['link', 'picture', 'video']],
          ['view', ['fullscreen', 'codeview', 'help']]
        ]
      });
  });

  // const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// function setPlannedDate() {
//     let date = new Date();
//     let currentMonth = month[date.getMonth()];
//     let currentYear = date.getFullYear();
//     let currentDate = date.getDate();
//     plannedInput.forEach((input) => {
//         input.value = `${currentMonth} ${currentDate}-${currentDate + 5}`;
//     })
//     startdateInput.forEach((input) => {
//         input.value = `${currentMonth} ${currentDate},${currentYear}`;
//     })
// }
// setPlannedDate();

  // window.addEventListener('scroll',(e)=>
// {
//     let winPageY = this.pageYOffset;
//     if(e.target.scrollingElement.clientWidth < 800 && winPageY > (pageYedit -290))
//     {
//         let activeEdit = e.target.querySelectorAll('.proj_filter .divfilter2 .addedit');
//         activeEdit.forEach((edit)=>
//         {
//             if(edit.classList.contains('active'))
//             {
//                 edit.classList.remove('active');
//                 overlay.classList.remove('active');
//             }
//         })
//         // if(Array.from(activeEdit).some(edit => edit.classList.contains('active')))
//     }
// })