const stars = document.querySelectorAll('.feedback .star_div .material-icons');
const feedbackTrigger = document.querySelectorAll('.feedback .star_div .chat');
const showFeedback = document.querySelector('.feedback .feedback_appear');
const closeFeedback = document.querySelector('.feedback .close_feedback');
const feed_overlay = document.querySelector('.m_bg .form_overlay');

for(i=0;i < stars.length;i++)
{
    ['click','mouseover','mouseout'].forEach((e)=>
    {
        stars[i].addEventListener(e,showRating);
    })
}

function showRating(e)
{
    starValue=+e.target.getAttribute('num');
    let imgAll = e.target.closest('.star_div').querySelectorAll('.material-icons');
    imgAll.forEach((elem,ind)=>
    {
        if(e.type=="click")
        {
            if(ind<starValue)
            {
                elem.innerText='grade';
                elem.classList.add('orange');
                if(elem.classList.contains('yellow'))
                {
                    elem.classList.remove('yellow');
                }
            }
            else
            {
                elem.innerText='star_border';
                elem.classList.remove('orange');
            }
        }
        else if(e.type=="mouseover")
        {
            if(ind<starValue)
            {
                elem.innerText='grade';
                elem.classList.add('yellow');
            }
            else
            {
                elem.innerText='star_border';
                elem.classList.remove('yellow');
                if(elem.classList.contains('orange'))
                {
                    elem.innerText='grade';
                    elem.classList.add('orange');
                    return;
                }
                elem.classList.remove('orange');
            }
        }
        else if(e.type=="mouseout")
        {
            if(elem.classList.contains('yellow') && !elem.classList.contains('orange'))
            {
                elem.innerText="star_border";
            }
            elem.classList.remove('yellow');
        }
        
    })
}

feedbackTrigger.forEach((feedback)=>
{
    feedback.addEventListener('click',()=>
    {
        if(!showFeedback.classList.contains('active'))
        {
            showFeedback.classList.add('active');
            feed_overlay.classList.add('active');
        }
        else
        {
            showFeedback.classList.remove('active');
            feed_overlay.classList.remove('active');
        }
    })
})
closeFeedback.addEventListener('click',()=>
{
    if(showFeedback.classList.contains('active'))
    {
        showFeedback.classList.remove('active');
        feed_overlay.classList.remove('active');
    }
})

window.addEventListener('click',(e)=>
{
    if(e.target==feed_overlay)
    {
        showFeedback.classList.remove('active');
        feed_overlay.classList.remove('active');
    }
})