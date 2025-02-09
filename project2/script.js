const navDialog = document.getElementById("nav-dialog");
function handleMenu(){
    navDialog.classList.toggle('hidden')
}

const initialTranslateLTR = -48*4
const initialTranslateRTL = -36*4
function setUpIntersectionObserver(element, isLTR, speed) {
    const intersectionCallBack = (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        console.log(element, isIntersecting);

        if (isIntersecting) {
            window.addEventListener('scroll', scrollHandler);
        } else {
            window.removeEventListener('scroll', scrollHandler);
        }
    };

    const intersectionObserver = new IntersectionObserver(intersectionCallBack);
    intersectionObserver.observe(element);

    function scrollHandler() {
     const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;

     let totalTranslate = 0;
     if(isLTR){
        totalTranslate = translateX + initialTranslateLTR;

     }else{
        totalTranslate = -(translateX + initialTranslateRTL);
     }
     element.style.transform = `translateX(${totalTranslate}px)`;

    }
}

const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');

const line4 = document.getElementById('line4');



setUpIntersectionObserver(line1, true, 0.15);
setUpIntersectionObserver(line2, false, 0.15);
setUpIntersectionObserver(line3, true, 0.15);
setUpIntersectionObserver(line4, true, 0.8);