var btn= document.getElementById("btn").addEventListener("click" ,getPost);
var con=0;
var div= document.getElementById("cardDiv");

function getPost(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then((res)=>{
        return res.json();
    })     
    .then ((post)=>{
        for (let index =0; index < 1; index++) {
            div.innerHTML+=`
                <div class="card col-3 m-1 mx-auto">
                    <img class-"card-img-top src="${post[con].thumbnailUrl}">
                    <h5 class="card-title">${post[con].url}</h5>
                </div>`

            con=con+1;
        }    
    })
    .catch((error)=>{
        console.log(error);
    })
}