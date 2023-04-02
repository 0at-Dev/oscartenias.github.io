window.addEventListener("DOMContentLoaded",()=>{
const WORK_SECTION=document.getElementById("Work")
const ABOUT_SECTION=document.getElementById("About")
const PREVSLIDE_BUTTON=document.getElementById("PrevSlide")
const NEXTSLIDE_BUTTON=document.getElementById("NextSlide")

let $workSectionWrapper=WORK_SECTION.querySelector("div>div")
let $workSlidesWrapper=$workSectionWrapper.querySelectorAll("div")[0]
let $workSlides=$workSlidesWrapper.querySelectorAll("div")
let _workSlideActive=0

const revealSectionContent=()=>{
    let aboutSectionBounderies=ABOUT_SECTION.getBoundingClientRect()
    let {top:aboutTop, y:aboutY}=aboutSectionBounderies
        
        if(Math.floor(aboutTop)<=0 || Math.floor(aboutY)<=0){
            let $title=ABOUT_SECTION.querySelector("div>h2")
            let $descriptionLeft=ABOUT_SECTION.querySelectorAll("div>p.hide-to-left")
            let $descriptionRight=ABOUT_SECTION.querySelectorAll("div>p.hide-to-right")

            if($title.classList.contains("hide-to-left")){
                $title.classList.remove("hide-to-left")
                $title.classList.add("reveal-from-left")
            }

            $descriptionLeft.forEach(el=>{
                el.classList.remove("hide-to-left")
                el.classList.add("reveal-from-left")
            })
            $descriptionRight.forEach(el=>{
            el.classList.remove("hide-to-right")
            el.classList.add("reveal-from-right")
            })
        }
}
// Listen
    revealSectionContent()

    document.addEventListener("scroll",revealSectionContent)
    NEXTSLIDE_BUTTON.addEventListener("click",()=>{
        let $currentSlide=$workSlides[_workSlideActive]
        let _newSlideIndex=_workSlideActive + 1
        let _indexLimit= $workSlides.length - 1
        let $newActiveSlide=$workSlides[_newSlideIndex]
            
            if(_workSlideActive<_indexLimit){
                $currentSlide.style.opacity="0"
                $newActiveSlide.style.opacity="1"
                $newActiveSlide.style.pointerEvents="all"
                _workSlideActive=_workSlideActive + 1  
            }
        
    })

    PREVSLIDE_BUTTON.addEventListener("click",()=>{
        let $currentSlide=$workSlides[_workSlideActive]
        let _newSlideIndex=_workSlideActive - 1
        let _indexLimit= $workSlides.length - 1
        let $newActiveSlide=$workSlides[_newSlideIndex]
            
            if(_workSlideActive>0){
                $currentSlide.style.opacity="0"
                $newActiveSlide.style.opacity="1"
                $newActiveSlide.style.pointerEvents="all"
                _workSlideActive=_workSlideActive - 1  
            }
    })

})