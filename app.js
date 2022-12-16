let activeIndex = 0

const groups = document.getElementsByClassName("card-group")

const handleLoveClick = function () {
     
    const nextIndex = activeIndex +1 <= groups.length -1 ? activeIndex +1 :0  

    const currentGroup = document.querySelector(`[data-index='${activeIndex}']`)
    const nextGroup = document.querySelector(`[data-index='${nextIndex}']`)


    currentGroup.dataset.status = 'after'

    nextGroup.dataset.status = 'becomingActiveFromBefore'


 setTimeout (() => {
    nextGroup.dataset.status = 'active'
    activeIndex = nextIndex
 })
       
}

const handleHateClick = function () {
     
    const nextIndex = activeIndex +1 <= groups.length -1 ? activeIndex +1 :0  

    const currentGroup = document.querySelector(`[data-index='${activeIndex}']`)
    const nextGroup = document.querySelector(`[data-index='${nextIndex}']`)


    currentGroup.dataset.status = 'before'

    nextGroup.dataset.status = 'becomingActiveFromAfter'


 setTimeout (() => {
    nextGroup.dataset.status = 'active'
    activeIndex = nextIndex
 })
       
}