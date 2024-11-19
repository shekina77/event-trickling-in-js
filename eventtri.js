//event trickling

const G=document.getElementById("grand");
G.addEventListener("click",(e)=>{
    setTimeout(()=>{
        console.log("grand parent clicked");
        G.style.backgroundColor="pink"
},1000)
    
},true)

const P=document.getElementById("parent");
P.addEventListener("click",(e)=>{
    setTimeout(()=>{
        console.log("grand parent clicked");
        P.style.backgroundColor="orange"
},2000)
    
},true)

const C=document.getElementById("child");
C.addEventListener("click",(e)=>{
    setTimeout(()=>{
        console.log("grand parent clicked");
        C.style.backgroundColor="yellow"
},3000)
    
},true)