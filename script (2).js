var total=document.querySelector("#total")
var add=document.querySelectorAll("#add")
var prices=document.querySelectorAll("#price")
var plus=document.querySelectorAll("#plus")
var moins=document.querySelectorAll("#moins")
var quantity=document.querySelectorAll("#quantity")
var names=document.querySelectorAll("#name")
console.log(quantity)

for(let i=0;i<plus.length;i++){
    plus[i].addEventListener("click",function(){
        quantity[i].innerHTML++
    })
}
for(let i=0;i<moins.length;i++){
    moins[i].addEventListener("click",function(){
        if(quantity[i].innerHTML>0){
quantity[i].innerHTML--
        }
        
    })
}
var table=document.querySelector("#cart")
for (let i = 0; i < add.length; i++) {
    add[i].addEventListener("click",function(){
        var tr=document.createElement("tr")
        tr.innerHTML=`
        <td>${names[i].innerHTML}</td>
        <td>${prices[i].innerHTML}</td>
        <td>${quantity[i].innerHTML}</td>
        `
        table.appendChild(tr)
       total.innerHTML=prices[i].innerHTML*quantity[i].innerHTML
    })
    
}
