const progress=document.getElementById('progress')
const prev=document.getElementById('prev')
const next=document.getElementById('next')
const cricle=document.querySelectorAll('.cricle')

let=currentactive=1;
next.addEventListener("click" , () => {
    currentactive++
    if(currentactive>cricle.length){
        currentactive=cricle.length;
    }
    update();
})
prev.addEventListener("click" , () => {
    currentactive--//3
    if(currentactive<1){
        currentactive=1;
    }
    update();
})
function update() {
    cricle.forEach((cricle,idx)=>{
        console.log(idx);
        if(idx<currentactive){
            cricle.classList.add('active')
        }else{
            cricle.classList.remove("active")
        }
    })
    // const actives=querySelectorAll(".active")
    // progress.style.width=(actives.length-1)/(cricle.length-1)*100+'%'
    // if(currentactive===1){
    //     prev.disabled=true;
    // }else if(currentactive==cricle.length){
    //     next.disabled=true;

    // }else{
    //     prev.disabled=false;
    //     prev.disabled=false;
    // }
}