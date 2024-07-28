<template>
  <div class="corps">

    <div class="ct1">
        <div class="imggau">

<!-- <img src="/imag/a.png"/> -->


        </div>

        <div class="descriptiondroite">
   <h1>PHOTOGRAPHE </h1>
   <h1>AGENCE </h1>
   <P>Lorem ipsum d elit. Blanditiis quas quidem asperiores non vel totam in est rerum voluptates nemo nostrum.</P>
<div class="cta">
  <button>RESERVEZ</button>
</div>
        </div>
    </div>


    <div class="services">

<div class="titlesection">

  <h1>NOS SERVICES  <br>EN PHOTOGRAPHIE</h1>
</div>
<div class="servicedescription">

<div class="culinaire serv">
<div class="icone">
<img src="/imag/bulb.png" alt="">
</div>
<p>Nous photographions vos repas</p>
</div>

<div class="produit  serv ">
  <div class="icone">
<img src="/imag/bulb.png" alt="">
</div>
<p>Nous photographions vos repas</p>
</div>

<div class="studio   serv ">
  <div class="icone">
<img src="/imag/bulb.png" alt="">
</div>
<p>Nous photographions vos repas</p>
</div>

<div class="evenement  serv  ">
  <div class="icone">
<img src="/imag/bulb.png" alt="">
</div>
<p>Nous photographions vos repas</p>
</div>

</div>

    </div>


    








  </div>
</template>

<script>
export default {
name:'MaiNn'
}
</script>

<style>
.corps{
    /* height: 70vh; */
 display: grid;
padding: 0 5%;

   
}

.ct1{
padding-top: 2em;
padding-bottom: 2em;
display: grid;
grid-template-columns: 1fr 1fr;
justify-content: center;
justify-items: center;





}

.cta button{
  margin-top: 25px;
}

.imggau {
width: 90%;
border: 4px solid #Fe979c ;
border-bottom: none;
border-left: none;

background-color: blueviolet;
height: 74vh;

  background-image: url("/src/assets/a.png");  
  background-position: center;
 background-size: cover;
  background-repeat: no-repeat;

 /* background-color: blue;
display: flex;
justify-content: center; */
}

.imggau img{
 max-width: 100%;

}

.cta button{
background-color:#FE979C ;
border: NONE;
padding: 0.5em;
border-radius: 10px;
color: #f6e8df;
font-weight: bold;
color: #013237;
font-size: 18px;
}


.descriptiondroite{
  /* background-color: blue; */

  display: flex;

  justify-content: center;
  flex-direction: column;
  /* background-color: red; */
}

.descriptiondroite h1{
  font-size: clamp(15px,5vw,55px);
  color: #013237;
}


@media  (max-width:730px) {
    .ct1 {
        display: grid;
        grid-template-columns: 1fr;
    }



    .descriptiondroite {
margin-left: 25px;
}




}





.imggau img {
  border: 3px solid #FEAE96;
  padding-right: 1em;
  padding-top: 1em;
  border-bottom: none;
  border-left:none
}

.services{
  padding-top: 4em;
padding-bottom: 4em;
display: grid;
grid-template-columns: 1fr 2fr;
  justify-content: center;
justify-items: center;  

}

.serv img{
  width: 20%;


  
}
.icone{
  
  display: flex;
  justify-items: center;
  justify-content: center;
}
.serv p {

}
.serv{
  display: flex;
  flex-direction: column;
  align-items: center;
 
  background-color:#FFFFFF;
  color: #013237;
  width:100% ;

  box-shadoW:0 3px 7px 0   #aaa9a9;
  


}

.titlesection h1{
  font-size: clamp(10px,4vw,35px);
  color: #013237;
}
.titlesection{

  
}
.servicedescription{
  display: grid;
  grid-template-columns: 1FR 1FR;
  grid-template-rows: 120PX 120PX;
  width: 85%;
  gap: 20PX;
}

.gallerieimg{
  color: #013237;
}



@media  (max-width:709px) {
 

 .services{

   grid-template-columns:  1FR;

 

 }
 .titlesection{

 }
 .titlesection h1{
  text-align: center;
  padding-bottom: 1em;
 } 


}
</style>