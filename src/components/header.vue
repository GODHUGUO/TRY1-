<template>
  <div class="entete">
<!-- 
<div class="menuu">
     <ul>

    
        <li><a href="">HOME</a></li>
        <li><a href="">SERVICES</a></li>
        <li><a href="">GALERIE</a></li>
        <li><a href="">CONTACT</a></li>

    </ul> 
</div> -->

  </div>
</template>

<script>
export default {
name:'HeaDertop',
components:{

}
}
</script>

<style >
.entete{
    display: grid;
    grid-template-columns: 1fr;
    background-color:#f6e8df;
 
    
}
.menuu{
    display: flex;
    justify-content: center;

}
.menuu ul{
    display: flex;
    justify-content:space-around;

    padding: 1em;
    width:70% ;
}
.menuu ul li{
    color:#013237; ;
    border: 1px solid #013237 ;
    border-radius: 18px;
    padding: 0.3em;
}

@media  (max-width:600px) {
    .menuu ul {
       /* background-color: gray; */
        display: flex;
        flex-direction: column;
        align-items: center;
       
        
  
    }
    .menuu ul li {
        padding: 0.3em;
    }


}


</style>