let somme=0
let arrAdd=Array.from(document.querySelectorAll('.btn-add-qte'))
let arrSub=Array.from(document.querySelectorAll('.btn-sub-qte'))
let price =Array.from(document.querySelectorAll('.price'))
let priceUnit=Array.from(document.querySelectorAll('.price-unit'))
let arrAddPan=Array.from(document.querySelectorAll('.add-panier'))
let arrRemPan=Array.from(document.querySelectorAll('.remove-panier'))
let arr=Array.from(document.querySelectorAll('.nbr-qte'))



for(let i=0; i<arrRemPan.length;i++)
{

arrRemPan[i].addEventListener('click',(event)=>{
arr[i].textContent=0
document.querySelector('.total-price').textContent-=price[i].textContent

somme=somme-Number(price[i].textContent) 
price[i].textContent=""
document.querySelector('.total-price').textContent=somme
arrRemPan[i].style.display="none"
arrAddPan[i].style.display="block"
});
}



for(let i=0; i<arrAddPan.length;i++)
{
    arrRemPan[i].style.display="none"

arrAddPan[i].addEventListener('click',(event)=>{
arr[i].textContent=1
price[i].textContent=priceUnit[i].value
somme=somme+Number(priceUnit[i].value) 
document.querySelector('.total-price').textContent=somme
arrAddPan[i].style.display="none"
arrRemPan[i].style.display="block"

});
}





for(let i=0; i<arrAdd.length;i++)
{
arrAdd[i].addEventListener('click',(event)=>{

event.target.nextElementSibling.innerText ++
price[i].textContent=Number(price[i].textContent) + Number(priceUnit[i].value) 
if (event.target.nextElementSibling.innerText===0)
    arrAddPan[i].style.display="block"
    else
    {arrAddPan[i].style.display="none"
    arrRemPan[i].style.display="block"
}



somme=somme+Number(priceUnit[i].value) 
document.querySelector('.total-price').textContent=somme


});
}


for(let i=0; i<arrSub.length;i++)
{
arrSub[i].addEventListener('click',(event)=>{
if(event.target.previousElementSibling.innerText>0)
{
   event.target.previousElementSibling.innerText -- 
   price[i].textContent=Number(price[i].textContent) - Number(priceUnit[i].value) 

   somme=somme-Number(priceUnit[i].value) 
   document.querySelector('.total-price').textContent=somme
}


if (event.target.previousElementSibling.innerText==="0")
{arrAddPan[i].style.display="block"
arrRemPan[i].style.display="none"

}
else
{arrAddPan[i].style.display="none"
arrRemPan[i].style.display="block"
}


});
}

