<template>
  <div class="conteneurformulaire">
    
<div class="formulaire">

<div class="formgauche">
<H1>CONTACTEZ-NOUS MAINTENANT</H1>
</div>


<div class="formdroite">
    <form action="">
<input type="text" placeholder="Votre nom">


<input type="text" placeholder="Votre adresse mail">

<textarea name="" id="" cols="50" rows="50"></textarea>


<button>ENVOYEZ MAINTENANT</button>

    </form>
</div>



</div>

  </div>
</template>

<script>

export default {
name:'ForMulaire',
components :{
 
}
}
</script>

<style>
.formdroite form{
    border-radius: 40PX;
    padding: 1em;


}

::placeholder{
    color: #f6e8df;
    font-size: 20px;
}

.formgauche h1 {
  padding-top: 14px;
  font-size: clamp(10px,4vw,35px);
  color: #013237;
}
.formgauche{
    width: 20% ;
}
.formdroite {
    width:67% ;
}
.formulaire{
 display: flex;
justify-content: space-around;
justify-content: center;


}
.formdroite button{
    display: block;
}
.formdroite input{
    background-color: #fe979c;
    display: block;
    width: 100%;
    height: 60PX;
    border-radius: 20px;
    margin-bottom: 2em;
    outline: none;
    border: none;
}
.formdroite textarea{
    width: 100%;
    height: 220PX; 
    border-radius: 15px;
    margin-bottom: 2em;
    outline: none;
}
.formdroite button{
    background-color: #013237;
    font-size: 15px;
    padding: 15px;
    margin-bottom: 4em;
    color: #f6e8df;
    border-radius: 50px;
    font-weight: bold;
    border: none;
}
.formdroite textarea{
    background-color: transparent;
    border-bottom: 2px solid #f6e8df;
    background-color: #fe979c;
}

    


@media  (max-width:730px) {

.formulaire {
        display: grid;
        grid-template-columns: 1fr;
      align-content: center;
   
      
      justify-items: center;
    }

    .formgauche{
    width:80% ;
    text-align: center;
}

.formdroite{
    width:80% ;
}


}



</style>