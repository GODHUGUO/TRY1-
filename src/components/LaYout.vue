<template>
  <div>
<header>
    <div class="entete">

<div class="menu">
    <ul>

        <router-link to="/">
        <li>HOME</li>
    </router-link>
        <li><a href="">SERVICES</a></li>
        <li><a href="">GALLERIE</a></li>
        <router-link to="/contact">
        <li>FORMULAIRE</li>
    </router-link>  
    <!-- <router-link to="/formulaire">
        <li><a href="">CONTACT</a></li>
    </router-link> -->
    </ul>
</div>

  </div>
</header>
<!-- ------------------------ -->
<router-view></router-view>
<footer>
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
</footer>
  </div>
</template>

<script>
export default {
name:'LaYout'
}
</script>

<style>
/* ----------------------headerstyle--------------------------------- */




.entete{
    display: grid;
    grid-template-columns: 1fr;
    background-color:#f6e8df;
    
    width:100% ;
    
}
.menu{
    display: flex;
    justify-content: center;
}
.menu ul{
    display: flex;
    justify-content:space-around;
  
    padding: 1em;
    width:70% ;
}
.menu ul li{
    color:#013237; ;
    border: 1px solid #013237 ;
    border-radius: 18px;
    padding: 0.3em;
}

@media  (max-width:600px) {
    .menu ul {
       /* background-color: gray; */
        display: flex;
        flex-direction: column;
        align-items: center;
       
        
  
    }
    .menu ul li {
        padding: 0.3em;
    }


}

/* --------------------------------footer style--------------------- */



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