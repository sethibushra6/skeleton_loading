const data = [

{
title:"Web Development",
description:"Build responsive websites.",
image:"https://picsum.photos/300/200?1"
},

{
title:"Graphic Design",
description:"Creative design solutions.",
image:"https://picsum.photos/300/200?2"
},

{
title:"Digital Marketing",
description:"Grow your business online.",
image:"https://picsum.photos/300/200?3"
}

];

setTimeout(() => {

const container=document.getElementById("container");

container.innerHTML="";

data.forEach(service=>{

container.innerHTML+=`

<div class="card real">

<img src="${service.image}">

<h3>${service.title}</h3>

<p>${service.description}</p>

</div>

`;

});

},3000);