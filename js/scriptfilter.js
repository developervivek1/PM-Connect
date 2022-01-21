const showFilter = document.querySelector('.divfilter2 .top_up2 ul li:nth-child(2)');
const filterdiv = document.querySelector('.divfilter2 .top_up2 .filter_div');
const top_up = document.querySelector('.proj_filter .divfilter2 .top_up');
const filterImg = document.querySelector('.divfilter2 .top_up2 ul li:nth-child(2) img');
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
const expandTable = document.querySelectorAll('.proj_filter .divfilter2 .project1 .projectcon1 .expand');
const rottableArrow = document.querySelectorAll('.proj_filter .divfilter2 .project1 .projectcon1 .head1 span img');
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
let addLabel = document.querySelectorAll('.proj_filter .divfilter2 .project1 .projectcon1 .expand .addedit .add_label .btn');
const proj_edit = document.querySelector('.manage_view .proj_edit');
const proj_con = document.querySelector('.manage_view .proj_edit .proj_content');
const proj_overlay = document.querySelector('.manage_view .proj_overlay');
const tabproj_btn = document.querySelectorAll('.manage_view .proj_edit .proj_content .tab-btn .btn');
const tabproj_btn2 = document.querySelectorAll('.manage_view .proj_edit .proj_content .tab-btn #showTab');
const showFavorite = document.querySelector('.manage_view .proj_edit .proj_content .tab-btn #showFav');
const favDiv = document.querySelector('.manage_view .proj_edit .proj_content .tab-btn .favDiv');
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
const userDel = document.querySelectorAll('.proj_filter .proj_edit .subscribe .subscriber_div .subs_con .col-4 img');
const projadd_div = document.querySelector('.proj_filter .proj_add');
const projadd_Close = document.querySelector('.proj_filter .proj_add .col-md-12 > span');
const showprojAdd = document.querySelectorAll('.proj_filter .divfilter2 .project1 .border-bottom .last_div');
const closeProjadd = document.querySelector('.proj_filter .proj_add .projadd_bottom .btn:nth-child(1)');
const saveProjadd = document.querySelector('.proj_filter .proj_add .projadd_bottom .btn:nth-child(2)');
const searchDiv = document.querySelector('.proj_filter .proj_add .assignee_div .usersearch_div');
const assignee_overlay = document.querySelector('.proj_filter .proj_add .assignee_div .assignee_overlay');
const disableInput = document.querySelector('.proj_filter .proj_add .main_add #disabledValue');
let editText = document.querySelectorAll('.proj_filter #editText');
const openMore = document.querySelectorAll('.proj_filter .proj_edit .proj_content .files .uploaded .open #openMore');
const openOption = document.querySelectorAll('.proj_filter .proj_edit .proj_content .files .uploaded .open .openOption');
const file_overlay = document.querySelector('.proj_filter .proj_edit .proj_content .files .file_overlay');
const filterLog = document.querySelector('.proj_filter .proj_edit .proj_content .active_log .btnleft .btn:nth-child(1)');
const personFilter = document.querySelector('.proj_filter .proj_edit .proj_content .active_log .btnleft .btn:nth-child(2)');
const activelog_overlay = document.querySelector('.proj_filter .proj_edit .proj_content .active_log .activelog_overlay');
const filterLogcon = document.querySelector('.proj_filter .proj_edit .proj_content .active_log .btnleft .filterlog_con');
const personFiltercon = document.querySelector('.proj_filter .proj_edit .proj_content .active_log .btnleft .person_con');
const open_Task = document.querySelector('.proj_filter .divfilter2 .project1 .projectcon1 .main_mile .milestone3 #openTask');
const milestone4 = document.querySelector('.proj_filter .divfilter2 .project1 .projectcon1 .milestone4');
const open_taskName = milestone4.querySelector('.addtask_hide');
const open_taskAdded = milestone4.querySelector('.taskname_hide');
const addedTask = milestone4.querySelector('.task_added');
const open_SubTask = milestone4.querySelector('#addSubtask');
const open_SubtaskName = milestone4.querySelector('.addSubtask_hide');
const open_SubtaskAdded = milestone4.querySelector('.Subtaskname_hide');
const addedSubtask = milestone4.querySelector('.Subtask_added');
const overlay = document.querySelector('.myoverlay');
const addView_overlay = document.querySelector('.addview_overlay');
const hoverProject = document.querySelectorAll('.proj_filter .divfilter2 .project1 .projmaincon .divcon1');
const listFilter = document.querySelector('.divfilter2 .list');
const boxTrigger = document.querySelectorAll('.box11');
const boxArrow = document.querySelectorAll('.box11 img');
const boxContent = document.querySelectorAll('.box11 p');
const options = document.querySelectorAll('.option-container2 .option2');
const optionsCon = document.querySelectorAll('.option-container2 p');
const optContain = document.querySelectorAll('.option-container2');
const accordian_file = document.querySelectorAll('.proj_filter .proj_edit .proj_content .files .fileuploaded > .row > .col-9');
const checkRadio = document.querySelectorAll('.proj_filter .proj_edit .radio_div input');
const checkSelectBox = document.querySelector('.proj_filter .proj_edit .proj_content .files .custom-select .box11');
let statusColor, statusText, textVal, value, pageYedit, h5con, adjacentNode, fixedValue1 = 121, replyCount=0,
    fixedValue2 = 121,
    fixedValue3 = 121;
const ImageDisable = [{
        disSrc: 'icons/ColorImage/assignees_disab.png',
        enabSrc: 'icons/Assigness.svg'
    },
    {
        disSrc: 'icons/ColorImage/subitem_disab.png',
        enabSrc: 'icons/subitem.svg'
    },
    {
        disSrc: 'icons/ColorImage/calendar_disab.png',
        enabSrc: 'icons/calender-blue.svg'
    },
    {
        disSrc: 'icons/ColorImage/calendar_disab.png',
        enabSrc: 'icons/calender-blue.svg'
    },
    {
        disSrc: 'icons/ColorImage/actualBudg_disab.png',
        enabSrc: 'icons/actual budget.svg'
    },
    {
        disSrc: 'icons/ColorImage/actualBudg_disab.png',
        enabSrc: 'icons/actual budget.svg'
    },
    {
        disSrc: 'icons/ColorImage/user_disab.png',
        enabSrc: 'icons/user.svg'
    },
    {
        disSrc: 'icons/ColorImage/user_disab.png',
        enabSrc: 'icons/user.svg'
    },
    {
        disSrc: 'icons/ColorImage/status_disab.png',
        enabSrc: 'icons/status.svg'
    },
    {
        disSrc: 'icons/ColorImage/assignees_disab.png',
        enabSrc: 'icons/Assigness.svg'
    },
    {
        disSrc: 'icons/ColorImage/subitem_disab.png',
        enabSrc: 'icons/subitem.svg'
    },
    {
        disSrc: 'icons/ColorImage/calendar_disab.png',
        enabSrc: 'icons/calender-blue.svg'
    },
    {
        disSrc: 'icons/ColorImage/calendar_disab.png',
        enabSrc: 'icons/calender-blue.svg'
    },
    {
        disSrc: 'icons/ColorImage/actualBudg_disab.png',
        enabSrc: 'icons/actual budget.svg'
    },
    {
        disSrc: 'icons/ColorImage/actualBudg_disab.png',
        enabSrc: 'icons/actual budget.svg'
    },
    {
        disSrc: 'icons/ColorImage/user_disab.png',
        enabSrc: 'icons/user.svg'
    },
    {
        disSrc: 'icons/ColorImage/user_disab.png',
        enabSrc: 'icons/user.svg'
    },
    {
        disSrc: 'icons/ColorImage/status_disab.png',
        enabSrc: 'icons/status.svg'
    },
    {
        disSrc: 'icons/ColorImage/assignees_disab.png',
        enabSrc: 'icons/Assigness.svg'
    },
    {
        disSrc: 'icons/ColorImage/subitem_disab.png',
        enabSrc: 'icons/subitem.svg'
    },
    {
        disSrc: 'icons/ColorImage/calendar_disab.png',
        enabSrc: 'icons/calender-blue.svg'
    },
    {
        disSrc: 'icons/ColorImage/calendar_disab.png',
        enabSrc: 'icons/calender-blue.svg'
    },
    {
        disSrc: 'icons/ColorImage/actualBudg_disab.png',
        enabSrc: 'icons/actual budget.svg'
    },
    {
        disSrc: 'icons/ColorImage/actualBudg_disab.png',
        enabSrc: 'icons/actual budget.svg'
    },
    {
        disSrc: 'icons/ColorImage/user_disab.png',
        enabSrc: 'icons/user.svg'
    },
    {
        disSrc: 'icons/ColorImage/user_disab.png',
        enabSrc: 'icons/user.svg'
    },
    {
        disSrc: 'icons/ColorImage/status_disab.png',
        enabSrc: 'icons/status.svg'
    }
];

// proj_edit Hide/Show
projdetail_btn.forEach((detailProj) => {
    detailProj.addEventListener('click', () => {
        showProjdetail();
    }, true)
})

function showProjdetail() {
    if (!proj_edit.classList.contains('active')) {
        proj_edit.classList.add('active');
        proj_overlay.classList.add('active');
    }
}
tabproj_btn.forEach((tabBtn) => {
    tabBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!e.target.classList.contains('active')) {
            let tabconActive = proj_con.querySelector('.tabproj_con.active');
            let tabbtnActive = proj_con.querySelector('.btn.active');
            let tabbtnp = proj_con.querySelector('.btn.active p.active');
            tabconActive.classList.remove('active');
            tabbtnActive.classList.remove('active');
            tabbtnp.classList.remove('active');
            let data_target = e.target.getAttribute('data-target');
            e.target.classList.add('active');
            e.target.querySelector('p').classList.add('active');
            let targetCon = proj_con.querySelector(data_target);
            targetCon.classList.add('active');
        }
    })
})
tabproj_btn2.forEach((tabBtn) => {
    tabBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!e.target.parentNode.classList.contains('active')) {
            e.target.classList.add('active');
            let tabconActive = proj_con.querySelector('.tabproj_con.active');
            let tabbtnActive = proj_con.querySelector('.btn.active');
            let tabbtnp = proj_con.querySelector('.btn.active p.active');
            tabconActive.classList.remove('active');
            tabbtnActive.classList.remove('active');
            tabbtnp.classList.remove('active');
            let data_target = e.target.parentNode.getAttribute('data-target');
            e.target.parentNode.classList.add('active');
            let targetCon = proj_con.querySelector(data_target);
            targetCon.classList.add('active');
        }
    })
})
showFavorite.addEventListener('click', (e) => {
    e.stopPropagation();
    let checkfile = e.target.closest('.proj_content').querySelector('.files');
    if (!favDiv.classList.contains('active') && checkfile.classList.contains('active')) {
        favDiv.classList.add('active');
        file_overlay.classList.add('active');
    } else {
        favDiv.classList.remove('active');
        file_overlay.classList.remove('active');
    }
})
setTimeout(() => {
    const textarea = document.querySelector('.manage_view .proj_edit .update .note-editing-area .note-editable');
    let textarea_Val;
    textarea.addEventListener('keyup', (e) => {
        textarea_Val = e.target.innerText;
    })
    update_Talk.addEventListener('click', () => {
        let userName = document.querySelector('.manage_view .proj_edit #firstName').getAttribute('alt');
        let profile_img = document.querySelector('.manage_view .proj_edit #firstName').getAttribute('src');
        let no_update = document.querySelector('.manage_view .proj_edit .update .no_updateyet');
        // let date = new Date()
        // let minute = date.getMinutes();
        if (textarea_Val === undefined || textarea_Val === "") {
            return;
        } else {
            no_update.style.display = "none";
            let update_con = document.createElement('div');
            update_con.setAttribute('class', 'update_con');
            update_con.innerHTML=`
            <div class="row has_pad">
                <div class="col justify-content-start align-items-center useractive_div">
                    <div><img src="${profile_img}"></div>
                    <p>${userName}</p>
                    <span></span>
                </div>
                <div class="col justify-content-end align-items-center d-flex noti_div">
                    <p>2 seen</p>
                    <img src="icons/noti_bell.svg">
                </div>
                <div class="col-md-12 mt-5 pt-3 text_div">
                    <p>${textarea_Val}</p>
                </div>
                <div class="col-md-12 mt-5 pt-3 d-flex justify-content-start seen_div">
                    <div class="grid">
                        <div class="grid1">
                           <p>15 min ago</p>
                        </div>
                        <div class="grid2">
                            <img src="icons/like.svg" onclick='incrementLike(event)'>
                            <p class="mr-2">Like</p>
                            <span>3</span>
                        </div>
                        <div class="grid3">
                            <img src="icons/replay.svg" onclick='showReply(event)'>
                            <p>Reply</p>
                        </div>
                    </div>
                </div>
            </div>`;
            update_append.insertBefore(update_con, update_append.childNodes[7]);
            textarea.innerText = "";
            textarea_Val = undefined;
        }
    })
}, 4000)

function incrementLike(e)
{
    e = e || window.event;
    let span = e.target.closest('.grid2').querySelector('span');
    let likenum = +e.target.closest('.grid2').querySelector('span').innerText;
    if(!span.classList.contains('num'))
    {
        span.classList.add('num');
        e.target.src='icons/thumbs_blue.svg';
        likenum++;
        span.innerText=likenum;
    }
    else
    {
        span.classList.remove('num');
        e.target.src='icons/like.svg';
        likenum--;
        span.innerText=likenum;
    }      
}

function showReply(e)
{
    if(replyCount<1)
    {
        let appendDiv = e.target.closest('.update_con');
        let noteDiv = document.createElement('div');
        noteDiv.setAttribute('class','refDivonly');
        // let textarea = document.createElement('textarea');
        // textarea.setAttribute('id','summernote');
        noteDiv.innerHTML=`
        <div class="note-editor note-frame" style="border-top: 1px solid #dbdbdb;border-bottom: 1px solid #dbdbdb;">
        <div class="note-dropzone">
            <div class="note-dropzone-message"></div>
        </div>
        <div class="note-toolbar" role="toolbar" style="padding: 5px 15px;">
            <div class="note-btn-group note-style">
                <div class="note-btn-group"><button type="button"
                        class="note-btn dropdown-toggle" tabindex="-1"
                        data-toggle="dropdown" aria-label="Style"><i
                            class="note-icon-magic"></i> <span
                            class="note-icon-caret"></span></button>
                    <div class="note-dropdown-menu dropdown-style"
                        role="list" aria-label="Style"><a
                            class="note-dropdown-item" href="#"
                            data-value="p" role="listitem" aria-label="p">
                            <p>Normal</p>
                        </a><a class="note-dropdown-item" href="#"
                            data-value="blockquote" role="listitem"
                            aria-label="blockquote">
                            <blockquote>Quote</blockquote>
                        </a><a class="note-dropdown-item" href="#"
                            data-value="pre" role="listitem"
                            aria-label="pre">
                            <pre>Code</pre>
                        </a><a class="note-dropdown-item" href="#"
                            data-value="h1" role="listitem"
                            aria-label="h1">
                            <h1>Header 1</h1>
                        </a><a class="note-dropdown-item" href="#"
                            data-value="h2" role="listitem"
                            aria-label="h2">
                            <h2>Header 2</h2>
                        </a><a class="note-dropdown-item" href="#"
                            data-value="h3" role="listitem"
                            aria-label="h3">
                            <h3>Header 3</h3>
                        </a><a class="note-dropdown-item" href="#"
                            data-value="h4" role="listitem"
                            aria-label="h4">
                            <h4>Header 4</h4>
                        </a><a class="note-dropdown-item" href="#"
                            data-value="h5" role="listitem"
                            aria-label="h5">
                            <h5>Header 5</h5>
                        </a><a class="note-dropdown-item" href="#"
                            data-value="h6" role="listitem"
                            aria-label="h6">
                            <h6>Header 6</h6>
                        </a></div>
                </div>
            </div>
            <div class="note-btn-group note-font"><button type="button"
                    class="note-btn note-btn-bold" tabindex="-1"
                    aria-label="Bold (CTRL+B)"><i
                        class="note-icon-bold"></i></button><button
                    type="button" class="note-btn note-btn-underline"
                    tabindex="-1" aria-label="Underline (CTRL+U)"><i
                        class="note-icon-underline"></i></button><button
                    type="button" class="note-btn" tabindex="-1"
                    aria-label="Remove Font Style (CTRL+\)"><i
                        class="note-icon-eraser"></i></button></div>
            <div class="note-btn-group note-color">
                <div class="note-btn-group note-color note-color-all">
                    <button type="button"
                        class="note-btn note-current-color-button"
                        tabindex="-1" aria-label="Recent Color"
                        data-backcolor="#FFFF00"
                        data-forecolor="#000000"><i
                            class="note-icon-font note-recent-color"
                            style="background-color: rgb(255, 255, 0); color: rgb(0, 0, 0);"></i></button><button
                        type="button" class="note-btn dropdown-toggle"
                        tabindex="-1" data-toggle="dropdown"
                        aria-label="More Color"> <span
                            class="note-icon-caret"></span></button>
                    <div class="note-dropdown-menu" role="list">
                        <div class="note-palette">
                            <div class="note-palette-title">Background
                                Color</div>
                            <div><button type="button"
                                    class="note-color-reset btn btn-light btn-default"
                                    data-event="backColor"
                                    data-value="transparent">Transparent</button>
                            </div>
                            <div class="note-holder"
                                data-event="backColor">
                                <!-- back colors -->
                                <div class="note-color-palette">
                                    <div class="note-color-row"><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#000000"
                                            data-event="backColor"
                                            data-value="#000000"
                                            data-title="Black"
                                            aria-label="Black"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#424242"
                                            data-event="backColor"
                                            data-value="#424242"
                                            data-title="Tundora"
                                            aria-label="Tundora"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#636363"
                                            data-event="backColor"
                                            data-value="#636363"
                                            data-title="Dove Gray"
                                            aria-label="Dove Gray"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#9C9C94"
                                            data-event="backColor"
                                            data-value="#9C9C94"
                                            data-title="Star Dust"
                                            aria-label="Star Dust"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#CEC6CE"
                                            data-event="backColor"
                                            data-value="#CEC6CE"
                                            data-title="Pale Slate"
                                            aria-label="Pale Slate"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#EFEFEF"
                                            data-event="backColor"
                                            data-value="#EFEFEF"
                                            data-title="Gallery"
                                            aria-label="Gallery"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#F7F7F7"
                                            data-event="backColor"
                                            data-value="#F7F7F7"
                                            data-title="Alabaster"
                                            aria-label="Alabaster"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#FFFFFF"
                                            data-event="backColor"
                                            data-value="#FFFFFF"
                                            data-title="White"
                                            aria-label="White"
                                            data-toggle="button"
                                            tabindex="-1"></button></div>
                                    <div class="note-color-row"><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#FF0000"
                                            data-event="backColor"
                                            data-value="#FF0000"
                                            data-title="Red"
                                            aria-label="Red"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#FF9C00"
                                            data-event="backColor"
                                            data-value="#FF9C00"
                                            data-title="Orange Peel"
                                            aria-label="Orange Peel"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#FFFF00"
                                            data-event="backColor"
                                            data-value="#FFFF00"
                                            data-title="Yellow"
                                            aria-label="Yellow"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#00FF00"
                                            data-event="backColor"
                                            data-value="#00FF00"
                                            data-title="Green"
                                            aria-label="Green"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#00FFFF"
                                            data-event="backColor"
                                            data-value="#00FFFF"
                                            data-title="Cyan"
                                            aria-label="Cyan"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#0000FF"
                                            data-event="backColor"
                                            data-value="#0000FF"
                                            data-title="Blue"
                                            aria-label="Blue"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#9C00FF"
                                            data-event="backColor"
                                            data-value="#9C00FF"
                                            data-title="Electric Violet"
                                            aria-label="Electric Violet"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#FF00FF"
                                            data-event="backColor"
                                            data-value="#FF00FF"
                                            data-title="Magenta"
                                            aria-label="Magenta"
                                            data-toggle="button"
                                            tabindex="-1"></button></div>
                                    <div class="note-color-row"><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#F7C6CE"
                                            data-event="backColor"
                                            data-value="#F7C6CE"
                                            data-title="Azalea"
                                            aria-label="Azalea"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#FFE7CE"
                                            data-event="backColor"
                                            data-value="#FFE7CE"
                                            data-title="Karry"
                                            aria-label="Karry"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#FFEFC6"
                                            data-event="backColor"
                                            data-value="#FFEFC6"
                                            data-title="Egg White"
                                            aria-label="Egg White"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#D6EFD6"
                                            data-event="backColor"
                                            data-value="#D6EFD6"
                                            data-title="Zanah"
                                            aria-label="Zanah"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#CEDEE7"
                                            data-event="backColor"
                                            data-value="#CEDEE7"
                                            data-title="Botticelli"
                                            aria-label="Botticelli"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#CEE7F7"
                                            data-event="backColor"
                                            data-value="#CEE7F7"
                                            data-title="Tropical Blue"
                                            aria-label="Tropical Blue"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#D6D6E7"
                                            data-event="backColor"
                                            data-value="#D6D6E7"
                                            data-title="Mischka"
                                            aria-label="Mischka"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#E7D6DE"
                                            data-event="backColor"
                                            data-value="#E7D6DE"
                                            data-title="Twilight"
                                            aria-label="Twilight"
                                            data-toggle="button"
                                            tabindex="-1"></button></div>
                                    <div class="note-color-row"><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#E79C9C"
                                            data-event="backColor"
                                            data-value="#E79C9C"
                                            data-title="Tonys Pink"
                                            aria-label="Tonys Pink"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#FFC69C"
                                            data-event="backColor"
                                            data-value="#FFC69C"
                                            data-title="Peach Orange"
                                            aria-label="Peach Orange"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#FFE79C"
                                            data-event="backColor"
                                            data-value="#FFE79C"
                                            data-title="Cream Brulee"
                                            aria-label="Cream Brulee"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#B5D6A5"
                                            data-event="backColor"
                                            data-value="#B5D6A5"
                                            data-title="Sprout"
                                            aria-label="Sprout"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#A5C6CE"
                                            data-event="backColor"
                                            data-value="#A5C6CE"
                                            data-title="Casper"
                                            aria-label="Casper"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#9CC6EF"
                                            data-event="backColor"
                                            data-value="#9CC6EF"
                                            data-title="Perano"
                                            aria-label="Perano"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#B5A5D6"
                                            data-event="backColor"
                                            data-value="#B5A5D6"
                                            data-title="Cold Purple"
                                            aria-label="Cold Purple"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#D6A5BD"
                                            data-event="backColor"
                                            data-value="#D6A5BD"
                                            data-title="Careys Pink"
                                            aria-label="Careys Pink"
                                            data-toggle="button"
                                            tabindex="-1"></button></div>
                                    <div class="note-color-row"><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#E76363"
                                            data-event="backColor"
                                            data-value="#E76363"
                                            data-title="Mandy"
                                            aria-label="Mandy"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#F7AD6B"
                                            data-event="backColor"
                                            data-value="#F7AD6B"
                                            data-title="Rajah"
                                            aria-label="Rajah"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#FFD663"
                                            data-event="backColor"
                                            data-value="#FFD663"
                                            data-title="Dandelion"
                                            aria-label="Dandelion"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#94BD7B"
                                            data-event="backColor"
                                            data-value="#94BD7B"
                                            data-title="Olivine"
                                            aria-label="Olivine"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#73A5AD"
                                            data-event="backColor"
                                            data-value="#73A5AD"
                                            data-title="Gulf Stream"
                                            aria-label="Gulf Stream"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#6BADDE"
                                            data-event="backColor"
                                            data-value="#6BADDE"
                                            data-title="Viking"
                                            aria-label="Viking"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#8C7BC6"
                                            data-event="backColor"
                                            data-value="#8C7BC6"
                                            data-title="Blue Marguerite"
                                            aria-label="Blue Marguerite"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#C67BA5"
                                            data-event="backColor"
                                            data-value="#C67BA5"
                                            data-title="Puce"
                                            aria-label="Puce"
                                            data-toggle="button"
                                            tabindex="-1"></button></div>
                                    <div class="note-color-row"><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#CE0000"
                                            data-event="backColor"
                                            data-value="#CE0000"
                                            data-title="Guardsman Red"
                                            aria-label="Guardsman Red"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#E79439"
                                            data-event="backColor"
                                            data-value="#E79439"
                                            data-title="Fire Bush"
                                            aria-label="Fire Bush"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#EFC631"
                                            data-event="backColor"
                                            data-value="#EFC631"
                                            data-title="Golden Dream"
                                            aria-label="Golden Dream"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#6BA54A"
                                            data-event="backColor"
                                            data-value="#6BA54A"
                                            data-title="Chelsea Cucumber"
                                            aria-label="Chelsea Cucumber"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#4A7B8C"
                                            data-event="backColor"
                                            data-value="#4A7B8C"
                                            data-title="Smalt Blue"
                                            aria-label="Smalt Blue"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#3984C6"
                                            data-event="backColor"
                                            data-value="#3984C6"
                                            data-title="Boston Blue"
                                            aria-label="Boston Blue"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#634AA5"
                                            data-event="backColor"
                                            data-value="#634AA5"
                                            data-title="Butterfly Bush"
                                            aria-label="Butterfly Bush"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#A54A7B"
                                            data-event="backColor"
                                            data-value="#A54A7B"
                                            data-title="Cadillac"
                                            aria-label="Cadillac"
                                            data-toggle="button"
                                            tabindex="-1"></button></div>
                                    <div class="note-color-row"><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#9C0000"
                                            data-event="backColor"
                                            data-value="#9C0000"
                                            data-title="Sangria"
                                            aria-label="Sangria"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#B56308"
                                            data-event="backColor"
                                            data-value="#B56308"
                                            data-title="Mai Tai"
                                            aria-label="Mai Tai"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#BD9400"
                                            data-event="backColor"
                                            data-value="#BD9400"
                                            data-title="Buddha Gold"
                                            aria-label="Buddha Gold"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#397B21"
                                            data-event="backColor"
                                            data-value="#397B21"
                                            data-title="Forest Green"
                                            aria-label="Forest Green"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#104A5A"
                                            data-event="backColor"
                                            data-value="#104A5A"
                                            data-title="Eden"
                                            aria-label="Eden"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#085294"
                                            data-event="backColor"
                                            data-value="#085294"
                                            data-title="Venice Blue"
                                            aria-label="Venice Blue"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#311873"
                                            data-event="backColor"
                                            data-value="#311873"
                                            data-title="Meteorite"
                                            aria-label="Meteorite"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#731842"
                                            data-event="backColor"
                                            data-value="#731842"
                                            data-title="Claret"
                                            aria-label="Claret"
                                            data-toggle="button"
                                            tabindex="-1"></button></div>
                                    <div class="note-color-row"><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#630000"
                                            data-event="backColor"
                                            data-value="#630000"
                                            data-title="Rosewood"
                                            aria-label="Rosewood"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#7B3900"
                                            data-event="backColor"
                                            data-value="#7B3900"
                                            data-title="Cinnamon"
                                            aria-label="Cinnamon"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#846300"
                                            data-event="backColor"
                                            data-value="#846300"
                                            data-title="Olive"
                                            aria-label="Olive"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#295218"
                                            data-event="backColor"
                                            data-value="#295218"
                                            data-title="Parsley"
                                            aria-label="Parsley"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#083139"
                                            data-event="backColor"
                                            data-value="#083139"
                                            data-title="Tiber"
                                            aria-label="Tiber"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#003163"
                                            data-event="backColor"
                                            data-value="#003163"
                                            data-title="Midnight Blue"
                                            aria-label="Midnight Blue"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#21104A"
                                            data-event="backColor"
                                            data-value="#21104A"
                                            data-title="Valentino"
                                            aria-label="Valentino"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#4A1031"
                                            data-event="backColor"
                                            data-value="#4A1031"
                                            data-title="Loulou"
                                            aria-label="Loulou"
                                            data-toggle="button"
                                            tabindex="-1"></button></div>
                                </div>
                            </div>
                            <div><button type="button"
                                    class="note-color-select btn btn-light btn-default"
                                    data-event="openPalette"
                                    data-value="backColorPicker">Select</button><input
                                    type="color" id="backColorPicker"
                                    class="note-btn note-color-select-btn"
                                    value="#FFFF00"
                                    data-event="backColorPalette"></div>
                            <div class="note-holder-custom"
                                id="backColorPalette"
                                data-event="backColor">
                                <div class="note-color-palette">
                                    <div class="note-color-row"><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#FFFFFF"
                                            data-event="backColor"
                                            data-value="#FFFFFF"
                                            data-title="#FFFFFF"
                                            aria-label="#FFFFFF"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#FFFFFF"
                                            data-event="backColor"
                                            data-value="#FFFFFF"
                                            data-title="#FFFFFF"
                                            aria-label="#FFFFFF"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#FFFFFF"
                                            data-event="backColor"
                                            data-value="#FFFFFF"
                                            data-title="#FFFFFF"
                                            aria-label="#FFFFFF"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#FFFFFF"
                                            data-event="backColor"
                                            data-value="#FFFFFF"
                                            data-title="#FFFFFF"
                                            aria-label="#FFFFFF"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#FFFFFF"
                                            data-event="backColor"
                                            data-value="#FFFFFF"
                                            data-title="#FFFFFF"
                                            aria-label="#FFFFFF"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#FFFFFF"
                                            data-event="backColor"
                                            data-value="#FFFFFF"
                                            data-title="#FFFFFF"
                                            aria-label="#FFFFFF"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#FFFFFF"
                                            data-event="backColor"
                                            data-value="#FFFFFF"
                                            data-title="#FFFFFF"
                                            aria-label="#FFFFFF"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#FFFFFF"
                                            data-event="backColor"
                                            data-value="#FFFFFF"
                                            data-title="#FFFFFF"
                                            aria-label="#FFFFFF"
                                            data-toggle="button"
                                            tabindex="-1"></button></div>
                                </div>
                            </div>
                        </div>
                        <div class="note-palette">
                            <div class="note-palette-title">Text Color
                            </div>
                            <div><button type="button"
                                    class="note-color-reset btn btn-light btn-default"
                                    data-event="removeFormat"
                                    data-value="foreColor">Reset to
                                    default</button></div>
                            <div class="note-holder"
                                data-event="foreColor">
                                <!-- fore colors -->
                                <div class="note-color-palette">
                                    <div class="note-color-row"><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#000000"
                                            data-event="foreColor"
                                            data-value="#000000"
                                            data-title="Black"
                                            aria-label="Black"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#424242"
                                            data-event="foreColor"
                                            data-value="#424242"
                                            data-title="Tundora"
                                            aria-label="Tundora"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#636363"
                                            data-event="foreColor"
                                            data-value="#636363"
                                            data-title="Dove Gray"
                                            aria-label="Dove Gray"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#9C9C94"
                                            data-event="foreColor"
                                            data-value="#9C9C94"
                                            data-title="Star Dust"
                                            aria-label="Star Dust"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#CEC6CE"
                                            data-event="foreColor"
                                            data-value="#CEC6CE"
                                            data-title="Pale Slate"
                                            aria-label="Pale Slate"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#EFEFEF"
                                            data-event="foreColor"
                                            data-value="#EFEFEF"
                                            data-title="Gallery"
                                            aria-label="Gallery"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#F7F7F7"
                                            data-event="foreColor"
                                            data-value="#F7F7F7"
                                            data-title="Alabaster"
                                            aria-label="Alabaster"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#FFFFFF"
                                            data-event="foreColor"
                                            data-value="#FFFFFF"
                                            data-title="White"
                                            aria-label="White"
                                            data-toggle="button"
                                            tabindex="-1"></button></div>
                                    <div class="note-color-row"><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#FF0000"
                                            data-event="foreColor"
                                            data-value="#FF0000"
                                            data-title="Red"
                                            aria-label="Red"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#FF9C00"
                                            data-event="foreColor"
                                            data-value="#FF9C00"
                                            data-title="Orange Peel"
                                            aria-label="Orange Peel"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#FFFF00"
                                            data-event="foreColor"
                                            data-value="#FFFF00"
                                            data-title="Yellow"
                                            aria-label="Yellow"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#00FF00"
                                            data-event="foreColor"
                                            data-value="#00FF00"
                                            data-title="Green"
                                            aria-label="Green"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#00FFFF"
                                            data-event="foreColor"
                                            data-value="#00FFFF"
                                            data-title="Cyan"
                                            aria-label="Cyan"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#0000FF"
                                            data-event="foreColor"
                                            data-value="#0000FF"
                                            data-title="Blue"
                                            aria-label="Blue"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#9C00FF"
                                            data-event="foreColor"
                                            data-value="#9C00FF"
                                            data-title="Electric Violet"
                                            aria-label="Electric Violet"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#FF00FF"
                                            data-event="foreColor"
                                            data-value="#FF00FF"
                                            data-title="Magenta"
                                            aria-label="Magenta"
                                            data-toggle="button"
                                            tabindex="-1"></button></div>
                                    <div class="note-color-row"><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#F7C6CE"
                                            data-event="foreColor"
                                            data-value="#F7C6CE"
                                            data-title="Azalea"
                                            aria-label="Azalea"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#FFE7CE"
                                            data-event="foreColor"
                                            data-value="#FFE7CE"
                                            data-title="Karry"
                                            aria-label="Karry"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#FFEFC6"
                                            data-event="foreColor"
                                            data-value="#FFEFC6"
                                            data-title="Egg White"
                                            aria-label="Egg White"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#D6EFD6"
                                            data-event="foreColor"
                                            data-value="#D6EFD6"
                                            data-title="Zanah"
                                            aria-label="Zanah"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#CEDEE7"
                                            data-event="foreColor"
                                            data-value="#CEDEE7"
                                            data-title="Botticelli"
                                            aria-label="Botticelli"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#CEE7F7"
                                            data-event="foreColor"
                                            data-value="#CEE7F7"
                                            data-title="Tropical Blue"
                                            aria-label="Tropical Blue"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#D6D6E7"
                                            data-event="foreColor"
                                            data-value="#D6D6E7"
                                            data-title="Mischka"
                                            aria-label="Mischka"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#E7D6DE"
                                            data-event="foreColor"
                                            data-value="#E7D6DE"
                                            data-title="Twilight"
                                            aria-label="Twilight"
                                            data-toggle="button"
                                            tabindex="-1"></button></div>
                                    <div class="note-color-row"><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#E79C9C"
                                            data-event="foreColor"
                                            data-value="#E79C9C"
                                            data-title="Tonys Pink"
                                            aria-label="Tonys Pink"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#FFC69C"
                                            data-event="foreColor"
                                            data-value="#FFC69C"
                                            data-title="Peach Orange"
                                            aria-label="Peach Orange"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#FFE79C"
                                            data-event="foreColor"
                                            data-value="#FFE79C"
                                            data-title="Cream Brulee"
                                            aria-label="Cream Brulee"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#B5D6A5"
                                            data-event="foreColor"
                                            data-value="#B5D6A5"
                                            data-title="Sprout"
                                            aria-label="Sprout"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#A5C6CE"
                                            data-event="foreColor"
                                            data-value="#A5C6CE"
                                            data-title="Casper"
                                            aria-label="Casper"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#9CC6EF"
                                            data-event="foreColor"
                                            data-value="#9CC6EF"
                                            data-title="Perano"
                                            aria-label="Perano"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#B5A5D6"
                                            data-event="foreColor"
                                            data-value="#B5A5D6"
                                            data-title="Cold Purple"
                                            aria-label="Cold Purple"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#D6A5BD"
                                            data-event="foreColor"
                                            data-value="#D6A5BD"
                                            data-title="Careys Pink"
                                            aria-label="Careys Pink"
                                            data-toggle="button"
                                            tabindex="-1"></button></div>
                                    <div class="note-color-row"><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#E76363"
                                            data-event="foreColor"
                                            data-value="#E76363"
                                            data-title="Mandy"
                                            aria-label="Mandy"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#F7AD6B"
                                            data-event="foreColor"
                                            data-value="#F7AD6B"
                                            data-title="Rajah"
                                            aria-label="Rajah"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#FFD663"
                                            data-event="foreColor"
                                            data-value="#FFD663"
                                            data-title="Dandelion"
                                            aria-label="Dandelion"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#94BD7B"
                                            data-event="foreColor"
                                            data-value="#94BD7B"
                                            data-title="Olivine"
                                            aria-label="Olivine"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#73A5AD"
                                            data-event="foreColor"
                                            data-value="#73A5AD"
                                            data-title="Gulf Stream"
                                            aria-label="Gulf Stream"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#6BADDE"
                                            data-event="foreColor"
                                            data-value="#6BADDE"
                                            data-title="Viking"
                                            aria-label="Viking"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#8C7BC6"
                                            data-event="foreColor"
                                            data-value="#8C7BC6"
                                            data-title="Blue Marguerite"
                                            aria-label="Blue Marguerite"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#C67BA5"
                                            data-event="foreColor"
                                            data-value="#C67BA5"
                                            data-title="Puce"
                                            aria-label="Puce"
                                            data-toggle="button"
                                            tabindex="-1"></button></div>
                                    <div class="note-color-row"><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#CE0000"
                                            data-event="foreColor"
                                            data-value="#CE0000"
                                            data-title="Guardsman Red"
                                            aria-label="Guardsman Red"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#E79439"
                                            data-event="foreColor"
                                            data-value="#E79439"
                                            data-title="Fire Bush"
                                            aria-label="Fire Bush"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#EFC631"
                                            data-event="foreColor"
                                            data-value="#EFC631"
                                            data-title="Golden Dream"
                                            aria-label="Golden Dream"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#6BA54A"
                                            data-event="foreColor"
                                            data-value="#6BA54A"
                                            data-title="Chelsea Cucumber"
                                            aria-label="Chelsea Cucumber"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#4A7B8C"
                                            data-event="foreColor"
                                            data-value="#4A7B8C"
                                            data-title="Smalt Blue"
                                            aria-label="Smalt Blue"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#3984C6"
                                            data-event="foreColor"
                                            data-value="#3984C6"
                                            data-title="Boston Blue"
                                            aria-label="Boston Blue"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#634AA5"
                                            data-event="foreColor"
                                            data-value="#634AA5"
                                            data-title="Butterfly Bush"
                                            aria-label="Butterfly Bush"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#A54A7B"
                                            data-event="foreColor"
                                            data-value="#A54A7B"
                                            data-title="Cadillac"
                                            aria-label="Cadillac"
                                            data-toggle="button"
                                            tabindex="-1"></button></div>
                                    <div class="note-color-row"><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#9C0000"
                                            data-event="foreColor"
                                            data-value="#9C0000"
                                            data-title="Sangria"
                                            aria-label="Sangria"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#B56308"
                                            data-event="foreColor"
                                            data-value="#B56308"
                                            data-title="Mai Tai"
                                            aria-label="Mai Tai"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#BD9400"
                                            data-event="foreColor"
                                            data-value="#BD9400"
                                            data-title="Buddha Gold"
                                            aria-label="Buddha Gold"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#397B21"
                                            data-event="foreColor"
                                            data-value="#397B21"
                                            data-title="Forest Green"
                                            aria-label="Forest Green"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#104A5A"
                                            data-event="foreColor"
                                            data-value="#104A5A"
                                            data-title="Eden"
                                            aria-label="Eden"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#085294"
                                            data-event="foreColor"
                                            data-value="#085294"
                                            data-title="Venice Blue"
                                            aria-label="Venice Blue"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#311873"
                                            data-event="foreColor"
                                            data-value="#311873"
                                            data-title="Meteorite"
                                            aria-label="Meteorite"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#731842"
                                            data-event="foreColor"
                                            data-value="#731842"
                                            data-title="Claret"
                                            aria-label="Claret"
                                            data-toggle="button"
                                            tabindex="-1"></button></div>
                                    <div class="note-color-row"><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#630000"
                                            data-event="foreColor"
                                            data-value="#630000"
                                            data-title="Rosewood"
                                            aria-label="Rosewood"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#7B3900"
                                            data-event="foreColor"
                                            data-value="#7B3900"
                                            data-title="Cinnamon"
                                            aria-label="Cinnamon"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#846300"
                                            data-event="foreColor"
                                            data-value="#846300"
                                            data-title="Olive"
                                            aria-label="Olive"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#295218"
                                            data-event="foreColor"
                                            data-value="#295218"
                                            data-title="Parsley"
                                            aria-label="Parsley"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#083139"
                                            data-event="foreColor"
                                            data-value="#083139"
                                            data-title="Tiber"
                                            aria-label="Tiber"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#003163"
                                            data-event="foreColor"
                                            data-value="#003163"
                                            data-title="Midnight Blue"
                                            aria-label="Midnight Blue"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#21104A"
                                            data-event="foreColor"
                                            data-value="#21104A"
                                            data-title="Valentino"
                                            aria-label="Valentino"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#4A1031"
                                            data-event="foreColor"
                                            data-value="#4A1031"
                                            data-title="Loulou"
                                            aria-label="Loulou"
                                            data-toggle="button"
                                            tabindex="-1"></button></div>
                                </div>
                            </div>
                            <div><button type="button"
                                    class="note-color-select btn btn-light btn-default"
                                    data-event="openPalette"
                                    data-value="foreColorPicker">Select</button><input
                                    type="color" id="foreColorPicker"
                                    class="note-btn note-color-select-btn"
                                    value="#000000"
                                    data-event="foreColorPalette"></div>
                            <div class="note-holder-custom"
                                id="foreColorPalette"
                                data-event="foreColor">
                                <div class="note-color-palette">
                                    <div class="note-color-row"><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#FFFFFF"
                                            data-event="foreColor"
                                            data-value="#FFFFFF"
                                            data-title="#FFFFFF"
                                            aria-label="#FFFFFF"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#FFFFFF"
                                            data-event="foreColor"
                                            data-value="#FFFFFF"
                                            data-title="#FFFFFF"
                                            aria-label="#FFFFFF"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#FFFFFF"
                                            data-event="foreColor"
                                            data-value="#FFFFFF"
                                            data-title="#FFFFFF"
                                            aria-label="#FFFFFF"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#FFFFFF"
                                            data-event="foreColor"
                                            data-value="#FFFFFF"
                                            data-title="#FFFFFF"
                                            aria-label="#FFFFFF"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#FFFFFF"
                                            data-event="foreColor"
                                            data-value="#FFFFFF"
                                            data-title="#FFFFFF"
                                            aria-label="#FFFFFF"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#FFFFFF"
                                            data-event="foreColor"
                                            data-value="#FFFFFF"
                                            data-title="#FFFFFF"
                                            aria-label="#FFFFFF"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#FFFFFF"
                                            data-event="foreColor"
                                            data-value="#FFFFFF"
                                            data-title="#FFFFFF"
                                            aria-label="#FFFFFF"
                                            data-toggle="button"
                                            tabindex="-1"></button><button
                                            type="button"
                                            class="note-btn note-color-btn"
                                            style="background-color:#FFFFFF"
                                            data-event="foreColor"
                                            data-value="#FFFFFF"
                                            data-title="#FFFFFF"
                                            aria-label="#FFFFFF"
                                            data-toggle="button"
                                            tabindex="-1"></button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="note-btn-group note-para"><button type="button"
                    class="note-btn" tabindex="-1"
                    aria-label="Unordered list (CTRL+SHIFT+NUM7)"><i
                        class="note-icon-unorderedlist"></i></button><button
                    type="button" class="note-btn" tabindex="-1"
                    aria-label="Ordered list (CTRL+SHIFT+NUM8)"><i
                        class="note-icon-orderedlist"></i></button>
                <div class="note-btn-group"><button type="button"
                        class="note-btn dropdown-toggle" tabindex="-1"
                        data-toggle="dropdown" aria-label="Paragraph"><i
                            class="note-icon-align-left"></i> <span
                            class="note-icon-caret"></span></button>
                    <div class="note-dropdown-menu" role="list">
                        <div class="note-btn-group note-align"><button
                                type="button" class="note-btn"
                                tabindex="-1"
                                aria-label="Align left (CTRL+SHIFT+L)"><i
                                    class="note-icon-align-left"></i></button><button
                                type="button" class="note-btn"
                                tabindex="-1"
                                aria-label="Align center (CTRL+SHIFT+E)"><i
                                    class="note-icon-align-center"></i></button><button
                                type="button" class="note-btn"
                                tabindex="-1"
                                aria-label="Align right (CTRL+SHIFT+R)"><i
                                    class="note-icon-align-right"></i></button><button
                                type="button" class="note-btn"
                                tabindex="-1"
                                aria-label="Justify full (CTRL+SHIFT+J)"><i
                                    class="note-icon-align-justify"></i></button>
                        </div>
                        <div class="note-btn-group note-list"><button
                                type="button" class="note-btn"
                                tabindex="-1"
                                aria-label="Outdent (CTRL+[)"><i
                                    class="note-icon-align-outdent"></i></button><button
                                type="button" class="note-btn"
                                tabindex="-1"
                                aria-label="Indent (CTRL+])"><i
                                    class="note-icon-align-indent"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="note-btn-group note-table">
                <div class="note-btn-group"><button type="button"
                        class="note-btn dropdown-toggle" tabindex="-1"
                        data-toggle="dropdown" aria-label="Table"><i
                            class="note-icon-table"></i> <span
                            class="note-icon-caret"></span></button>
                    <div class="note-dropdown-menu note-table" role="list"
                        aria-label="Table">
                        <div class="note-dimension-picker">
                            <div class="note-dimension-picker-mousecatcher"
                                data-event="insertTable" data-value="1x1"
                                style="width: 10em; height: 10em;"></div>
                            <div
                                class="note-dimension-picker-highlighted">
                            </div>
                            <div
                                class="note-dimension-picker-unhighlighted">
                            </div>
                        </div>
                        <div class="note-dimension-display">1 x 1</div>
                    </div>
                </div>
            </div>
            <div class="note-btn-group note-insert"><button type="button"
                    class="note-btn" tabindex="-1"
                    aria-label="Link (CTRL+K)"><i
                        class="note-icon-link"></i></button><button
                    type="button" class="note-btn" tabindex="-1"
                    aria-label="Picture"><i
                        class="note-icon-picture"></i></button><button
                    type="button" class="note-btn" tabindex="-1"
                    aria-label="Video"><i
                        class="note-icon-video"></i></button></div>
            <div class="note-btn-group note-view"><button type="button"
                    class="note-btn btn-fullscreen note-codeview-keep"
                    tabindex="-1" aria-label="Full Screen"><i
                        class="note-icon-arrows-alt"></i></button><button
                    type="button"
                    class="note-btn btn-codeview note-codeview-keep"
                    tabindex="-1" aria-label="Code View"><i
                        class="note-icon-code"></i></button><button
                    type="button" class="note-btn" tabindex="-1"
                    aria-label="Help"><i
                        class="note-icon-question"></i></button></div>
        </div>
        <div class="note-editing-area">
            <div class="note-placeholder" style="display: none;">Write an
                update</div>
            <div class="note-handle">
                <div class="note-control-selection"
                    style="display: none;">
                    <div class="note-control-selection-bg"></div>
                    <div class="note-control-holder note-control-nw">
                    </div>
                    <div class="note-control-holder note-control-ne">
                    </div>
                    <div class="note-control-holder note-control-sw">
                    </div>
                    <div class="note-control-sizing note-control-se">
                    </div>
                    <div class="note-control-selection-info"></div>
                </div>
            </div><textarea class="note-codable"
                aria-multiline="true"></textarea>
            <div class="note-editable" contenteditable="true"
                role="textbox" aria-multiline="true" spellcheck="true"
                autocorrect="true" style="height: 120px;" onkeyup='getValue(event)'></div>
        </div><output class="note-status-output" role="status"
            aria-live="polite"></output>
        <div class="note-statusbar" role="status">
            <div class="note-resizebar" aria-label="resize">
                <div class="note-icon-bar"></div>
                <div class="note-icon-bar"></div>
                <div class="note-icon-bar"></div>
            </div>
        </div>
        <div class="note-modal link-dialog" aria-hidden="false"
            tabindex="-1" role="dialog" aria-label="Insert Link">
            <div class="note-modal-content">
                <div class="note-modal-header"><button type="button"
                        class="close" aria-label="Close"
                        aria-hidden="true"><i
                            class="note-icon-close"></i></button>
                    <h4 class="note-modal-title">Insert Link</h4>
                </div>
                <div class="note-modal-body">
                    <div class="form-group note-form-group"><label
                            for="note-dialog-link-txt-16425296716821"
                            class="note-form-label">Text to
                            display</label><input
                            id="note-dialog-link-txt-16425296716821"
                            class="note-link-text form-control note-form-control note-input"
                            type="text"></div>
                    <div class="form-group note-form-group"><label
                            for="note-dialog-link-url-16425296716821"
                            class="note-form-label">To what URL should
                            this link go?</label><input
                            id="note-dialog-link-url-16425296716821"
                            class="note-link-url form-control note-form-control note-input"
                            type="text" value="http://"></div>
                    <div class="checkbox sn-checkbox-open-in-new-window">
                        <label><input role="checkbox" type="checkbox"
                                checked="" aria-checked="true">Open in new
                            window</label></div>
                    <div class="checkbox sn-checkbox-use-protocol">
                        <label><input role="checkbox" type="checkbox"
                                checked="" aria-checked="true">Use default
                            protocol</label></div>
                </div>
                <div class="note-modal-footer"><input type="button"
                        href="#"
                        class="btn btn-primary note-btn note-btn-primary note-link-btn"
                        value="Insert Link" disabled=""></div>
            </div>
        </div>
        <div class="note-popover bottom note-link-popover"
            style="display: none;">
            <div class="note-popover-arrow"></div>
            <div class="popover-content note-children-container"><span><a
                        target="_blank"></a>&nbsp;</span>
                <div class="note-btn-group note-link"><button
                        type="button" class="note-btn" tabindex="-1"
                        aria-label="Edit"><i
                            class="note-icon-link"></i></button><button
                        type="button" class="note-btn" tabindex="-1"
                        aria-label="Unlink"><i
                            class="note-icon-chain-broken"></i></button>
                </div>
            </div>
        </div>
        <div class="note-modal" aria-hidden="false" tabindex="-1"
            role="dialog" aria-label="Insert Image">
            <div class="note-modal-content">
                <div class="note-modal-header"><button type="button"
                        class="close" aria-label="Close"
                        aria-hidden="true"><i
                            class="note-icon-close"></i></button>
                    <h4 class="note-modal-title">Insert Image</h4>
                </div>
                <div class="note-modal-body">
                    <div
                        class="form-group note-form-group note-group-select-from-files">
                        <label for="note-dialog-image-file-16425296716821"
                            class="note-form-label">Select from
                            files</label><input
                            id="note-dialog-image-file-16425296716821"
                            class="note-image-input form-control-file note-form-control note-input"
                            type="file" name="files" accept="image/*"
                            multiple="multiple"></div>
                    <div class="form-group note-group-image-url"><label
                            for="note-dialog-image-url-16425296716821"
                            class="note-form-label">Image
                            URL</label><input
                            id="note-dialog-image-url-16425296716821"
                            class="note-image-url form-control note-form-control note-input"
                            type="text"></div>
                </div>
                <div class="note-modal-footer"><input type="button"
                        href="#"
                        class="btn btn-primary note-btn note-btn-primary note-image-btn"
                        value="Insert Image" disabled=""></div>
            </div>
        </div>
        <div class="note-popover bottom note-image-popover"
            style="display: none;">
            <div class="note-popover-arrow"></div>
            <div class="popover-content note-children-container">
                <div class="note-btn-group note-resize"><button
                        type="button" class="note-btn" tabindex="-1"
                        aria-label="Resize full"><span
                            class="note-fontsize-10">100%</span></button><button
                        type="button" class="note-btn" tabindex="-1"
                        aria-label="Resize half"><span
                            class="note-fontsize-10">50%</span></button><button
                        type="button" class="note-btn" tabindex="-1"
                        aria-label="Resize quarter"><span
                            class="note-fontsize-10">25%</span></button><button
                        type="button" class="note-btn" tabindex="-1"
                        aria-label="Original size"><i
                            class="note-icon-rollback"></i></button></div>
                <div class="note-btn-group note-float"><button
                        type="button" class="note-btn" tabindex="-1"
                        aria-label="Float Left"><i
                            class="note-icon-float-left"></i></button><button
                        type="button" class="note-btn" tabindex="-1"
                        aria-label="Float Right"><i
                            class="note-icon-float-right"></i></button><button
                        type="button" class="note-btn" tabindex="-1"
                        aria-label="Remove float"><i
                            class="note-icon-rollback"></i></button></div>
                <div class="note-btn-group note-remove"><button
                        type="button" class="note-btn" tabindex="-1"
                        aria-label="Remove Image"><i
                            class="note-icon-trash"></i></button></div>
            </div>
        </div>
        <div class="note-popover bottom note-table-popover"
            style="display: none;">
            <div class="note-popover-arrow"></div>
            <div class="popover-content note-children-container">
                <div class="note-btn-group note-add"><button type="button"
                        class="note-btn btn-md" tabindex="-1"
                        aria-label="Add row below"><i
                            class="note-icon-row-below"></i></button><button
                        type="button" class="note-btn btn-md"
                        tabindex="-1" aria-label="Add row above"><i
                            class="note-icon-row-above"></i></button><button
                        type="button" class="note-btn btn-md"
                        tabindex="-1" aria-label="Add column left"><i
                            class="note-icon-col-before"></i></button><button
                        type="button" class="note-btn btn-md"
                        tabindex="-1" aria-label="Add column right"><i
                            class="note-icon-col-after"></i></button>
                </div>
                <div class="note-btn-group note-delete"><button
                        type="button" class="note-btn btn-md"
                        tabindex="-1" aria-label="Delete row"><i
                            class="note-icon-row-remove"></i></button><button
                        type="button" class="note-btn btn-md"
                        tabindex="-1" aria-label="Delete column"><i
                            class="note-icon-col-remove"></i></button><button
                        type="button" class="note-btn btn-md"
                        tabindex="-1" aria-label="Delete table"><i
                            class="note-icon-trash"></i></button></div>
            </div>
        </div>
        <div class="note-modal" aria-hidden="false" tabindex="-1"
            role="dialog" aria-label="Insert Video">
            <div class="note-modal-content">
                <div class="note-modal-header"><button type="button"
                        class="close" aria-label="Close"
                        aria-hidden="true"><i
                            class="note-icon-close"></i></button>
                    <h4 class="note-modal-title">Insert Video</h4>
                </div>
                <div class="note-modal-body">
                    <div class="form-group note-form-group row-fluid">
                        <label for="note-dialog-video-url-16425296716821"
                            class="note-form-label">Video URL <small
                                class="text-muted">(YouTube, Vimeo, Vine,
                                Instagram, DailyMotion or
                                Youku)</small></label><input
                            id="note-dialog-video-url-16425296716821"
                            class="note-video-url form-control note-form-control note-input"
                            type="text"></div>
                </div>
                <div class="note-modal-footer"><input type="button"
                        href="#"
                        class="btn btn-primary note-btn note-btn-primary note-video-btn"
                        value="Insert Video" disabled=""></div>
            </div>
        </div>
        <div class="note-modal" aria-hidden="false" tabindex="-1"
            role="dialog" aria-label="Help">
            <div class="note-modal-content">
                <div class="note-modal-header"><button type="button"
                        class="close" aria-label="Close"
                        aria-hidden="true"><i
                            class="note-icon-close"></i></button>
                    <h4 class="note-modal-title">Help</h4>
                </div>
                <div class="note-modal-body"
                    style="max-height: 300px; overflow: scroll;">
                    <div class="help-list-item"></div><label
                        style="width: 180px; margin-right: 10px;"><kbd>ESC</kbd></label><span>Escape</span>
                    <div class="help-list-item"></div><label
                        style="width: 180px; margin-right: 10px;"><kbd>ENTER</kbd></label><span>Insert
                        Paragraph</span>
                    <div class="help-list-item"></div><label
                        style="width: 180px; margin-right: 10px;"><kbd>CTRL+Z</kbd></label><span>Undo
                        the last command</span>
                    <div class="help-list-item"></div><label
                        style="width: 180px; margin-right: 10px;"><kbd>CTRL+Y</kbd></label><span>Redo
                        the last command</span>
                    <div class="help-list-item"></div><label
                        style="width: 180px; margin-right: 10px;"><kbd>TAB</kbd></label><span>Tab</span>
                    <div class="help-list-item"></div><label
                        style="width: 180px; margin-right: 10px;"><kbd>SHIFT+TAB</kbd></label><span>Untab</span>
                    <div class="help-list-item"></div><label
                        style="width: 180px; margin-right: 10px;"><kbd>CTRL+B</kbd></label><span>Set
                        a bold style</span>
                    <div class="help-list-item"></div><label
                        style="width: 180px; margin-right: 10px;"><kbd>CTRL+I</kbd></label><span>Set
                        a italic style</span>
                    <div class="help-list-item"></div><label
                        style="width: 180px; margin-right: 10px;"><kbd>CTRL+U</kbd></label><span>Set
                        a underline style</span>
                    <div class="help-list-item"></div><label
                        style="width: 180px; margin-right: 10px;"><kbd>CTRL+SHIFT+S</kbd></label><span>Set
                        a strikethrough style</span>
                    <div class="help-list-item"></div><label
                        style="width: 180px; margin-right: 10px;"><kbd>CTRL+BACKSLASH</kbd></label><span>Clean
                        a style</span>
                    <div class="help-list-item"></div><label
                        style="width: 180px; margin-right: 10px;"><kbd>CTRL+SHIFT+L</kbd></label><span>Set
                        left align</span>
                    <div class="help-list-item"></div><label
                        style="width: 180px; margin-right: 10px;"><kbd>CTRL+SHIFT+E</kbd></label><span>Set
                        center align</span>
                    <div class="help-list-item"></div><label
                        style="width: 180px; margin-right: 10px;"><kbd>CTRL+SHIFT+R</kbd></label><span>Set
                        right align</span>
                    <div class="help-list-item"></div><label
                        style="width: 180px; margin-right: 10px;"><kbd>CTRL+SHIFT+J</kbd></label><span>Set
                        full align</span>
                    <div class="help-list-item"></div><label
                        style="width: 180px; margin-right: 10px;"><kbd>CTRL+SHIFT+NUM7</kbd></label><span>Toggle
                        unordered list</span>
                    <div class="help-list-item"></div><label
                        style="width: 180px; margin-right: 10px;"><kbd>CTRL+SHIFT+NUM8</kbd></label><span>Toggle
                        ordered list</span>
                    <div class="help-list-item"></div><label
                        style="width: 180px; margin-right: 10px;"><kbd>CTRL+LEFTBRACKET</kbd></label><span>Outdent
                        on current paragraph</span>
                    <div class="help-list-item"></div><label
                        style="width: 180px; margin-right: 10px;"><kbd>CTRL+RIGHTBRACKET</kbd></label><span>Indent
                        on current paragraph</span>
                    <div class="help-list-item"></div><label
                        style="width: 180px; margin-right: 10px;"><kbd>CTRL+NUM0</kbd></label><span>Change
                        current block's format as a paragraph(P
                        tag)</span>
                    <div class="help-list-item"></div><label
                        style="width: 180px; margin-right: 10px;"><kbd>CTRL+NUM1</kbd></label><span>Change
                        current block's format as H1</span>
                    <div class="help-list-item"></div><label
                        style="width: 180px; margin-right: 10px;"><kbd>CTRL+NUM2</kbd></label><span>Change
                        current block's format as H2</span>
                    <div class="help-list-item"></div><label
                        style="width: 180px; margin-right: 10px;"><kbd>CTRL+NUM3</kbd></label><span>Change
                        current block's format as H3</span>
                    <div class="help-list-item"></div><label
                        style="width: 180px; margin-right: 10px;"><kbd>CTRL+NUM4</kbd></label><span>Change
                        current block's format as H4</span>
                    <div class="help-list-item"></div><label
                        style="width: 180px; margin-right: 10px;"><kbd>CTRL+NUM5</kbd></label><span>Change
                        current block's format as H5</span>
                    <div class="help-list-item"></div><label
                        style="width: 180px; margin-right: 10px;"><kbd>CTRL+NUM6</kbd></label><span>Change
                        current block's format as H6</span>
                    <div class="help-list-item"></div><label
                        style="width: 180px; margin-right: 10px;"><kbd>CTRL+ENTER</kbd></label><span>Insert
                        horizontal rule</span>
                    <div class="help-list-item"></div><label
                        style="width: 180px; margin-right: 10px;"><kbd>CTRL+K</kbd></label><span>Show
                        Link Dialog</span>
                </div>
                <div class="note-modal-footer">
                    <p class="text-center"><a
                            href="http://summernote.org/"
                            target="_blank">Summernote 0.8.18</a> · <a
                            href="https://github.com/summernote/summernote"
                            target="_blank">Project</a> · <a
                            href="https://github.com/summernote/summernote/issues"
                            target="_blank">Issues</a></p>
                </div>
            </div>
        </div>
        <div class="send_div">
            <span onclick='appendMessage(event)'><img src="icons/sendMessage.svg"></span>
        </div>
    </div>
        `
        noteDiv.style.cssText=`top:10px; left:50px; margin-bottom:3rem`;
        if(e.clientX < 849)
        {
            noteDiv.style.cssText=`top:10px; left:0px; margin-bottom:3rem`;
        }
        // appendDiv.appendChild(textarea);
        appendDiv.insertBefore(noteDiv, appendDiv.childNodes[2]);
        replyCount++;
    }
    else
    {
        let editor = e.target.closest('.proj_edit').querySelectorAll('.refDivonly');
        editor[0].remove();
        replyCount--;
    }
}

function getValue(e)
{
    e = e || window.event;
    messageText = e.target.innerText;
    messageText=messageText.replace(/^\s*[\r\n]/gm);
}
function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

function appendMessage(e)
{
    const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    e = e || window.event;
    let getAM = formatAMPM(new Date);
    let date = new Date();
    let monthName = month[date.getMonth()];
    let day = date.getDate();

    let closeUpdate = e.target.closest('.update_con');
    let grid= document.createElement('div');
    grid.setAttribute('class','msggrid');
    let grid1 = document.createElement('div');
    grid1.setAttribute('class','msggrid1');
    let img = document.createElement('img');
    img.src=`icons/avatar1.svg`;
    grid1.appendChild(img);
    let grid2 = document.createElement('div');
    grid2.setAttribute('class','msggrid2');
    let span= document.createElement('span');
    span.innerText=`Nisha`;
    let span2= document.createElement('span');
    let flexDiv = document.createElement('div');
    flexDiv.setAttribute('class','d-flex align-items-start');
    flexDiv.appendChild(span);
    flexDiv.appendChild(span2);
    let timetext = document.createElement('p');
    timetext.innerText=`${monthName} ${day} ${getAM}`;
    grid2.appendChild(flexDiv);
    grid2.appendChild(timetext);
    let grid3 = document.createElement('div');
    grid3.setAttribute('class','msggrid3');
    let p= document.createElement('p');
    p.innerText=`${messageText}`;
    grid3.appendChild(p);    
    grid.appendChild(grid1);
    grid.appendChild(grid2);
    grid.appendChild(grid3);
    closeUpdate.insertBefore(grid, closeUpdate.childNodes[3]);

    let editor = e.target.closest('.proj_edit').querySelectorAll('.refDivonly');
    editor[0].remove();
    replyCount--;
}
accordian_file.forEach((accordian)=>
{
    accordian.addEventListener('click',(e)=>
    {
        let target =e.target.closest('.fileuploaded').querySelector('.accordian_file');
        if(target.style.height)
        {
            target.style.height=null;
            target.style.visibility="hidden";
        }
        else
        {
            target.style.height=`${target.scrollHeight + 10}px`;
            target.style.visibility="visible";
        }
    })
})

checkRadio.forEach((check)=>
{
    check.addEventListener('click',(e)=>
    {
        let text = e.target.closest('.file_handler').querySelector('.box11 p').innerText;
        let remOverlay = e.target.closest('.file_handler').querySelector('.needtoupload .white_overlay');
        if(check.checked==true && text !='Choose File Type' && text.length>1)
        {
            remOverlay.style.display="none";
        }
        else
        {
            remOverlay.style.display="block";
        }
    })
})

// Get data using GIF API
emoji_Btn.addEventListener('click', () => {
    if (!emoji_Container.classList.contains('active')) {
        emoji_Container.classList.add('active');
    } else {
        emoji_Container.classList.remove('active');
    }
})
window.addEventListener('keyup', (e) => {
    if (e.key === "Escape" && emoji_Container.classList.contains('active')) {
        emoji_Container.classList.remove('active');
    }
})
async function getapi(e) {
    if (e.key === "Escape" && emoji_Container.classList.contains('active')) {
        emoji_Container.classList.remove('active');
        return;
    }
    e.stopPropagation();
    e.preventDefault();
    let removefig = emoji_ContainerIn.querySelectorAll('figure');
    for (let i = 0; i < removefig.length; i++) {
        removefig[i].remove();
    }
    let url = `https://api.giphy.com/v1/gifs/search?api_key=12jskRsX6Qa4D5fm9Mkx7b0KW1TQshP1&limit=10&q=`;
    let str = emoji_Input.value.trim();
    let Searchdata = url.concat(str);
    let data = await fetch(`${Searchdata}`);
    let realdata = await data.json();
    let mapdata = realdata.data;
    mapdata.map(data => {
        let fig = document.createElement("figure");
        let img = document.createElement("img");
        img.src = data.images.preview_gif.url;
        img.alt = data.title;
        fig.appendChild(img);
        emoji_ContainerIn.insertAdjacentElement("beforeend", fig);
    })
}
emoji_Input.addEventListener('keyup', getapi);
showSubscribe.forEach((subscribe) => {
    subscribe.addEventListener('click', (e) => {
        e.stopPropagation();
        let showDiv = e.target.parentNode.parentNode.querySelector('.subscriber_div');
        if (!showDiv.classList.contains('active')) {
            showDiv.classList.add('active');
            subs_overlay.classList.add('active');
        } else {
            showDiv.classList.remove('active');
            subs_overlay.classList.remove('active');
        }
    })
})
close_subsdiv.addEventListener('click', () => {
    if (subs_Div.classList.contains('active')) {
        subs_Div.classList.remove('active');
        subs_overlay.classList.remove('active');
    }
})
userDel.forEach((userRem) => {
    userRem.addEventListener('click', (e) => {
        let remNode = e.target.closest('.user_list');
        remNode.remove();
    })
})
openMore.forEach((open) => {
    open.addEventListener('click', (e) => {
        let nearoption = e.target.closest('.open').querySelector('.openOption');
        if (!nearoption.classList.contains('active')) {
            nearoption.classList.add('active');
            file_overlay.classList.add('active');
        } else {
            nearoption.classList.remove('active');
            file_overlay.classList.remove('active');
        }
    })
})
filterLog.addEventListener('click', () => {
    if (!filterLogcon.classList.contains('active')) {
        filterLogcon.classList.add('active');
        activelog_overlay.classList.add('active');
    } else {
        filterLogcon.classList.remove('active');
        activelog_overlay.classList.remove('active');
    }
})
personFilter.addEventListener('click', () => {
    if (!personFiltercon.classList.contains('active')) {
        personFiltercon.classList.add('active');
        activelog_overlay.classList.add('active');
    } else {
        personFiltercon.classList.remove('active');
        activelog_overlay.classList.remove('active');
    }
})

// hide/show proj_add
showprojAdd.forEach((projAdd) => {
    projAdd.addEventListener('click', (e) => {
        if (!projadd_div.classList.contains('active')) {
            projadd_div.classList.add('active');
            proj_overlay.classList.add('active');
            closestExpand = e.target.closest('.expand');
            h5con = e.target.closest('.child-border').querySelector('.head1 h5').innerText;
            disableInput.placeholder = `${h5con}`
            adjacentNode = e.target.closest('.border-bottom').previousElementSibling;
            adjacentAppendDiv = e.target.closest('.expand');
        } else {
            projadd_div.classList.remove('active');
            proj_overlay.classList.remove('active');
        }
    })
})
saveProjadd.addEventListener('click', () => {
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
    calendar_data = document.querySelectorAll('.proj_filter .divfilter2 #rangePicker');
    closestExpand.style.height=`${closestExpand.scrollHeight}px`;
    setSpan();
    clickEdit.forEach((edit) => {
        edit.addEventListener('click', (e) => {
            showStatus(e);
        })
    });
    projdetail_btn.forEach((projdetail) => {
        projdetail.addEventListener('click', (e) => {
            showProjdetail();
        })
    });
    calendar_data.forEach(data => {
        ['mouseenter', 'mouseout'].forEach((e) => {
            data.addEventListener(e, hoverData);
        });
    })
})

// Close proj_add, proj_edit 
proj_overlay.addEventListener('click', hideProjdetail);
projDet_close.addEventListener('click', hideProjdetail);
projadd_Close.addEventListener('click', hideProjdetail);
closeProjadd.addEventListener('click', hideProjdetail);

function hideProjdetail() {
    if (proj_edit.classList.contains('active') || projadd_div.classList.contains('active')) {
        proj_edit.classList.remove('active');
        projadd_div.classList.remove('active');
        emoji_Container.classList.remove('active');
        subs_Div.classList.remove('active');
        searchDiv.classList.remove('active');
        subs_overlay.classList.remove('active');
        openOption.forEach((open) => {
            open.classList.remove('active');
        })
        favDiv.classList.remove('active');
        file_overlay.classList.remove('active');
        activelog_overlay.classList.remove('active');
        optContain.forEach((option)=>
        {
            if(option.classList.contains('active'))
            {
                optContain[pindex].classList.remove('active');
                boxArrow[pindex].classList.remove('active');
            }
        })
        filterLogcon.classList.remove('active');
        personFiltercon.classList.remove('active');
        proj_overlay.classList.remove('active');
    }
}
window.addEventListener('click', hideFilterdiv);

function hideFilterdiv(e) {
    if (e.target == overlay) {
        filterdiv.classList.remove('showfilter');
        showFilter.classList.remove('active');
        showEdit.forEach((showEdit) => {
            showEdit.classList.remove('active');
        });
        overlay.style.zIndex = "6";
        overlay.classList.remove('active');
    } else if (e.target == addView_overlay) {
        mainul[mainul.length - 1].classList.remove('active');
        divfilter.querySelector('.addview').classList.remove('active');
        addView_overlay.classList.remove('active');
    } else if (e.target == topup2_overlay) {
        filterdiv.classList.remove('showfilter');
        showFilter.classList.remove('active');
        topup2_overlay.classList.remove('active');
        filterImg.src = `icons/filter.svg`;
        filterImg.style.cssText = 'width:14px; height:14px';
        if (e.clientX < 849) {
            top_up.style.zIndex = '4';
        } else {
            top_up.style.zIndex = '6';
        }
    } else if (e.target == drop_overlay) {
        addColumnicon.forEach((addIcon) => {
            addIcon.innerText = "add";
        });
        drop_overlay.classList.remove('active');
    } else if (e.target == subs_overlay) {
        subs_Div.classList.remove('active');
        subs_overlay.classList.remove('active');
    } else if (e.target == assignee_overlay) {
        searchDiv.classList.remove('active');
        assignee_overlay.classList.remove('active');
    } else if (e.target == file_overlay) {
        favDiv.classList.remove('active');
        openOption.forEach((open) => {
            open.classList.remove('active');
        })
        optContain.forEach((option)=>
        {
            if(option.classList.contains('active'))
            {
                optContain[pindex].classList.remove('active');
                boxArrow[pindex].classList.remove('active');
            }
        })
        file_overlay.classList.remove('active');
    } else if (e.target == activelog_overlay) {
        filterLogcon.classList.remove('active');
        activelog_overlay.classList.remove('active');
        personFiltercon.classList.remove('active');
        activelog_overlay.classList.remove('active');
    }
}

// window resize function
window.addEventListener('resize', () => {
    if (this.innerWidth < 849) {
        overlay.classList.remove('active');
    } else {
        top_up.style.zIndex = '6';
    }
})

// Hide and Show filter Div
showFilter.addEventListener('click', (e) => {
    if (!filterdiv.classList.contains('showfilter')) {
        filterdiv.classList.add('showfilter');
        showFilter.classList.add('active');
        topup2_overlay.classList.add('active');
        filterImg.src = `icons/filter2.png`;
        filterImg.style.cssText = 'width:14px; height:10px';
        let xWidth = e.clientX;
        if (xWidth < 749) {
            top_up.style.zIndex = '3';
        } else {
            top_up.style.zIndex = "6";
        }
    } else {
        filterdiv.classList.remove('showfilter');
        showFilter.classList.remove('active');
        topup2_overlay.classList.remove('active');
        filterImg.src = `icons/filter.svg`;
        filterImg.style.cssText = 'width:14px; height:14px';
    }
})

// Milestone Expand/Collapse 
milediv.addEventListener('click', () => {
    if (!showMile.classList.contains('showmilestone')) {
        showMile.classList.add('showmilestone');
        root.style.setProperty("--rot", "90deg");
        dflexVisible.classList.add('visible');
    } else {
        showMile.classList.remove('showmilestone');
        showMile2.classList.remove('showmilestone2');
        showFinalmile.classList.remove('showmain_mile');
        root.style.setProperty("--rot", "0deg");
        dflexVisible.classList.remove('visible');
        milestone4.classList.remove('active');
        open_taskAdded.classList.remove('active');
        open_taskName.classList.remove('active');
        addedTask.classList.remove('active');
        open_SubtaskAdded.classList.remove('active');
        open_SubtaskName.classList.remove('active');
        addedSubtask.classList.remove('active');
    }
})
milediv2.addEventListener('click', () => {
    if (!showMile2.classList.contains('showmilestone2')) {
        showMile2.classList.add('showmilestone2');
    } else {
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
    } else {
        showFinalmile.classList.remove('showmain_mile');
    }
}
open_Task.addEventListener('click', () => {
    if (!milestone4.classList.contains('active') && !open_taskName.classList.contains('active')) {
        milestone4.classList.add('active');
        open_taskName.classList.add('active');
    }
})
open_taskName.addEventListener('click', function() {
    if (milestone4.classList.contains('active') && this.classList.contains('active') && !open_taskAdded.classList.contains('active')) {
        this.classList.remove('active');
        open_taskAdded.classList.add('active');
    }
})
open_taskAdded.addEventListener('click', function() {
    if (!open_taskName.classList.contains('active') && !addedTask.classList.contains('active') && this.classList.contains('active')) {
        this.classList.remove('active');
        open_taskName.classList.add('active')
        addedTask.classList.add('active')
    }
})
open_SubTask.addEventListener('click', () => {
    if (!open_SubtaskName.classList.contains('active')) {
        open_SubtaskName.classList.add('active');
    }
})
open_SubtaskName.addEventListener('click', function() {
    if (this.classList.contains('active') && !open_SubtaskAdded.classList.contains('active')) {
        this.classList.remove('active');
        open_SubtaskAdded.classList.add('active');
    }
})
open_SubtaskAdded.addEventListener('click', function() {
    if (!addedSubtask.classList.contains('active') && this.classList.contains('active') &&
        !open_SubtaskName.classList.contains('active')) {
        this.classList.remove('active');
        addedSubtask.classList.add('active')
        open_SubtaskName.classList.add('active')
    }
})

// Status Update Edit and Done
clickEdit.forEach((edit) => {
    edit.addEventListener('click', (e) => {
        showStatus(e);
    })
})

function showStatus(e) {
    pageYedit = e.pageY;
    let closestAddedit = e.target.closest('.expand').querySelector('.addedit');
    statusColor = e.target;
    statusText = e.target;
    if (!closestAddedit.classList.contains('active')) {
        overlay.style.zIndex = "1";
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
addLabel.forEach((add, ind) => {
    add.addEventListener('click', (e) => {
        addLabeldom(e, ind);
    })
})

function addLabeldom(e, ind) {
    let targetAppend1 = e.target.closest('.right_div').querySelectorAll('input');
    let targetAppend2 = e.target.closest('.right_div').querySelectorAll('p');
    let input = document.createElement('input');
    input.setAttribute('type', 'color');
    input.setAttribute('value', '');
    input.setAttribute('text-target', '');
    let p = document.createElement('p');
    p.setAttribute('value', '');
    p.setAttribute('text-target', '');
    p.innerText = "Name";
    switch (ind) {
        case 0:
            fixedValue1 = fixedValue1 + 54;
            fixingTop(p, fixedValue1);
            break;
        case 1:
            fixedValue2 = fixedValue2 + 54;
            fixingTop(p, fixedValue2);
            break;
        case 2:
            fixedValue3 = fixedValue3 + 54;
            fixingTop(p, fixedValue3);
            break;
    }
    targetAppend1[targetAppend1.length - 1].insertAdjacentElement('afterend', input);
    targetAppend2[targetAppend2.length - 1].insertAdjacentElement('afterend', p);
    targetAppend1 = document.querySelectorAll('.proj_filter .divfilter2 .project1 .projectcon1 .expand .addedit input');
    targetAppend2 = document.querySelectorAll('.proj_filter .divfilter2 .project1 .projectcon1 .expand .addedit p');
    setUserchoice(targetAppend1, targetAppend2);
    input.setAttribute('text-target', `.${value}`);
    p.setAttribute('text-target', `.${textVal}`);
}

function fixingTop(p, fixedValue) {
    p.style.cssText = `top: ${fixedValue}px; left:34%`;
}
addEdit.forEach((addEdit, ind) => {
    addEdit.addEventListener('click', (e) => {
        let activeCheck = e.target.parentNode;
        let colorInput = activeCheck.closest('.expand').querySelector('.addedit').querySelectorAll('input');
        let paraText = activeCheck.closest('.expand').querySelector('.addedit').querySelectorAll('p');
        let addLabelcheck = activeCheck.closest('.expand').querySelector('.add_label');
        if (activeCheck.classList.contains('active') && !addEdit2[ind].classList.contains('active') &&
            !addLabelcheck.classList.contains('active')) {
            addEdit2[ind].classList.add('active');
            activeCheck.classList.remove('active');
            addLabelcheck.classList.add('active');
            setUserchoice(colorInput, paraText);
        }
    })
})

function setUserchoice(colorInput, paraText) {
    colorInput.forEach((input) => {
        input.removeAttribute('disabled');
    })
    paraText.forEach((text) => {
        text.setAttribute('contenteditable', 'true');
        if (text.hasAttribute('contenteditable')) {
            paraText.forEach((text) => {
                text.addEventListener('input', (e) => {
                    textVal = e.target.innerText;
                    statusText.innerText = `${textVal}`;
                })
            })
            colorInput.forEach((input) => {
                input.addEventListener('input', (e) => {
                    value = e.target.value;
                    statusColor.style.backgroundColor = `${value}`;
                })
            })
        }
    })
}
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
    let addLabelcheck = e.target.closest('.addedit').querySelector('.add_label');
    colorInput.forEach((input) => {
        input.setAttribute('disabled', 'disabled');
    })
    paraText.forEach((text) => {
        text.removeAttribute('contenteditable');
    })
    addLabelcheck.classList.remove('active');
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
editText.forEach((edit) => {
    edit.addEventListener('click', (e) => {
        e.stopPropagation();
        let targetEdit = e.target.closest('.d-flex').querySelector(':first-child');
        if (!targetEdit.hasAttribute('contenteditable')) {
            targetEdit.setAttribute('contenteditable', 'true');
        } else {
            targetEdit.removeAttribute('contenteditable');
        }
    })
})

// Tabs and Pills the Data
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
    li.classList.add('active');
    divfilter.querySelector(target).classList.add('active');
    addView_overlay.classList.add('active');
}

// hide/show Main Table

(function defaultMainTableshow()
{
    expandTable.forEach((expand,ind)=>
    {
        if (expand.style.height) {
            expand.style.height= null;
            expand.style.visibility= 'hidden';
            rottableArrow[ind].style.transform = "rotate(0deg)";
        } else {
            expand.style.height= `auto`;
            expand.style.visibility= 'visible';
            rottableArrow[ind].style.transform = "rotate(180deg)";
        }
    })
}());

showTable.forEach((expand,ind) => {
    expand.addEventListener('click', (e) => {
        e.stopPropagation();
        let expand = e.target.closest('.projectcon1').querySelector('.expand');
        // let img_rot = e.target;
        if (expand.style.height) {
            expand.style.height= null;
            expand.style.visibility= 'hidden';
            rottableArrow[ind].style.transform = "rotate(0deg)";
        } else {
            expand.style.height= `${expand.scrollHeight}px`;
            expand.style.visibility= 'visible';
            rottableArrow[ind].style.transform = "rotate(180deg)";
        }
    })
})

// Enable/Disable Table Column 
addColumn.forEach((addColumn) => {
    addColumn.addEventListener('click', (e) => {
        let target = e.target.closest('.head11').querySelector('button img');
        let dropmenu = e.target.closest('.head11').querySelector('.dropdown-menu');
        if (dropmenu.classList.contains('show')) {
            target.innerText = 'clear';
            drop_overlay.classList.add('active');
        } else {
            target.innerText = "add";
        }
    }, true)
})
disableIcon.forEach((disable, ind) => {
    disable.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        let targetDel = e.target.getAttribute('disable-data');
        let targetImg = e.target.querySelector('img');
        let nearestTarget = e.target.closest('.projectcon1').querySelectorAll(targetDel);
        // let nearestHead = e.target.closest('.head11').querySelector('.dropdown-menu');
        let nearestClear = e.target.closest('.head11').querySelector('button img');
        nearestTarget.forEach((removeNode) => {
            if (!removeNode.classList.contains('disable')) {
                removeNode.classList.add('disable');
                targetImg.src = `${ImageDisable[ind].disSrc}`;
            } else {
                removeNode.classList.remove('disable');
                targetImg.src = `${ImageDisable[ind].enabSrc}`;
            }
        })
        nearestClear.innerText = "add";
        // nearestHead.classList.remove('show');
    }, true)
})

// hovering Data on Planned Date
function setSpan() {
    plannedDiv.forEach((appendSpan) => {
        let span = document.createElement('span');
        span.style.display = "none";
        appendSpan.appendChild(span);
    })
}
setSpan();
calendar_data.forEach(data => {
    ['mouseover', 'mouseout'].forEach((e) => {
        data.addEventListener(e, hoverData);
    });
})

function hoverData(e) {
    if (e.type === 'mouseover') {
        let dateRange = e.target.value;
        let extractDate = dateRange.substr(4, 8);
        let date1 = +extractDate.substr(0, 2);
        let date2 = +extractDate.substr(4, 6);
        let putDiv = e.target.closest('.plannedDate');
        let hideInput = putDiv.querySelector('input');
        let showSpan = putDiv.querySelector('span');
        showSpan.innerText = `${date2 - date1} Days`
        hideInput.style.display = "none";
        showSpan.style.display = "block";
    } else if (e.type === 'mouseout') {
        let putDiv = e.target.closest('.plannedDate');
        let hideSpan = putDiv.querySelector('span');
        let showInput = putDiv.querySelector('input');
        hideSpan.style.display = "none";
        showInput.style.display = "block";
    }
}

// showing project name on hover
(function makingTooltip()
{
    hoverProject.forEach((hover)=>
    {
        let p = hover.querySelector('p').innerHTML;
        if(p.length>25)
        {
            hover.setAttribute('data-bs-toggle','tooltip');
            hover.setAttribute('data-bs-placement','bottom');
            hover.setAttribute('title',`${p}`);
            var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
            var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl)
            })
        }
    })
}());

// working dropdown
boxTrigger.forEach((box,ind)=>
{
    box.addEventListener('click',(e)=>
    {
        pindex = ind;
        if(!optContain[ind].classList.contains('active'))
        {
            file_overlay.classList.add('active');
            optContain[ind].classList.add('active')  
            boxArrow[ind].classList.add('active');
        }
        else
        {
            file_overlay.classList.remove('active');
            optContain[ind].classList.remove('active')  
            boxArrow[ind].classList.remove('active');
        }
    })
})
options.forEach((option)=>
{
    option.addEventListener('click',(e)=>
    {
        e.stopPropagation();
        boxContent[pindex].style.color="#000";
        boxContent[pindex].innerText=e.target.querySelector('p').innerText; 
        optContain[pindex].classList.remove('active') 
        boxArrow[pindex].classList.remove('active');
        file_overlay.classList.remove('active');
        selfCheck(e);
    })
})
optionsCon.forEach((option)=>
{
    option.addEventListener('click',(e)=>
    {
        e.stopPropagation();
        boxContent[pindex].style.color="#000";
        boxContent[pindex].innerText=e.target.innerText;
        optContain[pindex].classList.remove('active') 
        boxArrow[pindex].classList.remove('active');
        file_overlay.classList.remove('active');
        selfCheck(e);
    })
})
function selfCheck(e)
{
    let boolean = Array.from(checkRadio).some(check=> check.checked);
    let text = e.target.closest('.file_handler').querySelector('.box11 p').innerText;
    let overlay = e.target.closest('.file_handler').querySelector('.needtoupload .white_overlay');

    if(boolean==true && text !=='Choose File Type' && text.length>1)
    {
        overlay.style.display="none";
    }
    else
    {
        overlay.style.display="block";
    }
}

function show() {
    if (document.getElementById('benefits').style.display == 'none') {
        document.getElementById('benefits').style.display = 'block';
        document.getElementById('tablehide').style.display = 'none';
        document.getElementById('benefitsdrop').style.display = 'none';
    }
}

function show1() {
    if (document.getElementById('benefitsdrop').style.display == 'none') {
        document.getElementById('benefitsdrop').style.display = 'block';
        document.getElementById('tablehide').style.display = 'none';
        document.getElementById('benefits').style.display = 'none';
    }
}
$.datetimepicker.setDateFormatter('moment');
$(function() {
    $("[id='picker']").datetimepicker({
        timepicker: false,
        datepicker: true,
        format: 'MMM DD,YYYY'
    });
});
$('#picker12').add('#picker13').datetimepicker({
    timepicker: false,
    datepicker: true,
    format: 'MMMM DD,YYYY'
});
$('#picker14').datetimepicker({
    timepicker: true,
    datepicker: true,
    format: 'MMMM DD,YYYY, hh:mma'
});
$('.h1fixed').scroll(function() {
    $(this).find('.mysticky').css('left', $(this).scrollLeft());
});
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