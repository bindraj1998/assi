import{navbar}from "../components/navbar.js";
import "../styles/navbar.css"
let a=document.getElementById("navbar") 
a.innerHTML=navbar()



let getdata=async()=>{
try{

    let res=await fetch("https://fakestoreapi.com/products/category/jewelery");
    let data=await res.json()
console.log(data)
append(data)
}catch(err){
    console.log(err)
}

}

getdata()


let append=(data)=>{
let item=document.getElementById("item")
data.forEach((el)=>{
    let box=document.createElement("div")
    let img=document.createElement("img")
let p=document.createElement("p")
let title=document.createElement("p")
img.src=el.image

p.innerText=el.price
title.innerText=el.title
box.append(img,title,p)
item.append(box)
})



}




