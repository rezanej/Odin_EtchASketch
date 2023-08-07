

function createBox(resolution)
{
    const res=600;
    const container=document.querySelector('.flex-container');
    for (let i = 0; i <(res/resolution)*(res/resolution); i++) {
       
        const box=document.createElement('div');
        box.classList.add('box');
        box.setAttribute("style",`min-height: ${resolution}px;min-width: ${resolution}px;`)
        box.addEventListener('mouseover',()=>{
            hoverStyle(box);
        })
        container.appendChild(box);
    }
}
function hoverStyle(box){
    box.style.backgroundColor=`rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;

}
createBox(100);
function reset(){
    const boxes=document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.style.backgroundColor='white';
    });
}
const resetButton=document.querySelector('.resetButton');
resetButton.addEventListener('click',reset);

function changeResolution()
{
    
    const resolution=prompt('please enter a number between 4 and 100');
    const boxes=document.querySelectorAll(".box");
    if(resolution<=100 && resolution>=4)
    {
    boxes.forEach((box) => {
        box.remove();
    });
    createBox(resolution);
    }
    else alert('number must be between 4 and 100');
}
const changeButton=document.querySelector('.changeButton');
changeButton.addEventListener('click',changeResolution);

