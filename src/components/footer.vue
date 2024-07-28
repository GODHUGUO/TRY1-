<template>
  <div class="pieddepage">



     <div class="subscribe">
    <div class="inform">

        <p>Subscribe to our news</p>
        <input type="text" placeholder="Entrer votre email">
        
    </div>
    </div> 


    <div class="pied">
      <h2>PHOTOGRAPHE</h2>
      <p class="cp">Copywright © 2023 HUGUO</p>
      <div class="lien">
        <p>UGC</p>
        <p>security</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooTerbottom",
};
</script>

<style>

.pieddepage{
    background-color: #013237;
    color: #ffffff;
    padding: 1em;
    display: flex;
    justify-content: center;
    position: relative;
    letter-spacing: 0.3em;
}
.pied h2{
padding-bottom: 0.4em;
    text-align: center;
}
.pied p{
 
    text-align: center;
}

.lien{
 
    text-align: center;
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 0.4em;
}
.lien p{
    border-right: 1px solid #ffffff;
    padding: 0.5em;

}

.lien p:nth-child(3){
   
    border-right: none;
}
.cp{
    letter-spacing: 10PX;
 
}

.subscribe{
    top: -2.7em;
    background-color:#FE979C ;
    color: #013237;
    position: absolute;
    padding: 1em;
    border-radius: 20px;
    width:45% ;
    font-family: Arial, Helvetica, sans-serif;

}

.inform{
    display: flex;
    justify-content: space-between;
   
    padding: 0.1EM;
   
}
.inform input{
    border: none;
    outline: none;

}

::placeholder {
    padding-left: 15px;
}


@media  (max-width:730px) {
    .subscribe {
        display: none;
    }
}


</style>