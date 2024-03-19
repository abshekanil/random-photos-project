let imgContainer = document.querySelector('.imgContainer');
let btn = document.querySelector('.btn');

btn.addEventListener("click", addMoreImg);
    

let imgNum = 10;

function addMoreImg(){

    for(let i=0; i<imgNum; i++)
    {
        let createImg = document.createElement("img");
        createImg.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
        imgContainer.appendChild(createImg);
    }
}