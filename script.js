

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
    
    let color=window.getComputedStyle(box).getPropertyValue("background-color");
    console.log(color)
    if(color==="rgba(0, 0, 0, 0)")
        box.style.backgroundColor=`rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},${Math.random()*0.5})`;
    else{
        color=color.split(',');
        let r=color[0].slice(5);
        console.log(color[0].slice(5))
        let g=color[1].trim();
        let b=color[2].trim();
    
    color=color[3].trim();
    color=color.split("");
    color.pop();
    color=color.join("");
    color=parseFloat(color)
    
    if(color<0.9){
        box.style.backgroundColor=`rgba(${r},${g},${b},${color+0.1})`;
    }
    else{
        box.style.backgroundColor=`rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},${Math.random()*0.5})`;
    }
}
    

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

