


var btnAjouter = document.querySelector("#ajouter");


btnAjouter.addEventListener("click", function(){
   let titre = document.querySelector("#titre").value;
   let lien = document.querySelector("#lien").value;
   let alire = document.querySelector(".alire");
  
  
 
   let titre0 = document.querySelector(".titre0");
   let titre1 = document.querySelector(".titre1");
 
  
  

   if(titre==="" || lien===""){
       alert("les deux champs doivente etre remplis")
       document.querySelector("#titre").value = ""
       document.querySelector("#lien").value = ""
   }else{
    alire.insertAdjacentHTML("afterbegin",`<li> ${titre} <i id="btnsup" onclick="supprimer(this.id)" class="fas fa-trash-alt"></i>  <a href=${lien} target="blank""><i class="fas fa-shopping-cart"></i></a>    <i id=${titre} onclick="dejalu(this.id)" class="fas fa-check"></i>  </li>`) ;
    document.querySelector("#titre").value = "";
    document.querySelector("#lien").value = "";
    titre0.classList.add("oculto");
    titre1.classList.remove("oculto");  
 
    

 

    
   

   }
    
})


function supprimer(id){
    document.getElementById(id).parentElement.outerHTML= "";
}

function dejalu(id){
    let lu = document.querySelector(".lu"); 
    let titre2 = document.querySelector(".titre2");
    supprimer(id);
    lu.insertAdjacentHTML("afterbegin",`<li> ${id} <i id="btnsup" onclick="supprimer(this.id)" class="fas fa-trash-alt"></i> </li>`) ;
    titre2.classList.remove("oculto");

}