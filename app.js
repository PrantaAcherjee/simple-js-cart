const div1=document.getElementById('div1');
const div2=document.getElementById('div2');
const div3=document.getElementById('div3');
const image=document.getElementById('image');
const description=document.getElementById('description');
const price=document.getElementById('price');
const total=document.getElementById('total');
const regular=document.getElementById('regular');
const express=document.getElementById('express');
const shipping=document.getElementById('shipping');


div1.addEventListener('click',function(){
    image.src='images/image1.jpg'
    description.innerText='first-Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores illum cupiditate impedit vel ipsa et animi obcaecati quia tempore temporibus voluptate soluta fuga tempora natus quaerat adipisci enim, officiis iste?'
    price.innerText='330'
    updateTotal()
    
})
div2.addEventListener('click',function(){
    image.src='images/image2.jpg'
    description.innerText='second-Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores illum cupiditate impedit vel ipsa et animi obcaecati quia tempore temporibus voluptate soluta fuga tempora natus quaerat adipisci enim, officiis iste?'
    price.innerText='430'
    updateTotal()
    
})
div3.addEventListener('click',function(){
    image.src='images/image4.jpg'
    description.innerText='three-Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores illum cupiditate impedit vel ipsa et animi obcaecati quia tempore temporibus voluptate soluta fuga tempora natus quaerat adipisci enim, officiis iste?'
    price.innerText='530'
    updateTotal()
     
})

regular.addEventListener('click',function(){
shipping.innerText='5'
updateTotal()
})
express.addEventListener('click',function(){
shipping.innerText='20'
updateTotal()
})

function updateTotal(){
    const shippingCharge=Number(shipping.innerText);
    const productCharge=Number(price.innerText);
    const grandTotal=shippingCharge+productCharge;
    total.innerText=grandTotal
}