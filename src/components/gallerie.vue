<template>
  <div class="galler">
<div class="contain">

<h2>GALLERIE</h2>
<div class="imgf">
<div    v-for="(image,index) in images" :key="index" class="lesimages">

<img :src="image.src" :alt="image.description" @click="openImage(image)"/>
<p>{{ image.description }}</p> 
</div>

<div v-if="isModalOpen" class="modal">
<div class="modal-content">
<span class="close" @click="closeImage">X</span>
<img :src="selectedImage.src">


</div>


</div>
</div>
</div>
  </div>
</template>

<script>
export default {
name:'GalLerie',



data(){
    return{
        selectedImage:null,
        isModalOpen:false,
        images:[

{ src:"imag/a.png",description:'description1' },
{ src:"imag/b.png",description:'description2' },
{ src:"imag/c.png",description:'description2' },
{ src:"imag/d.png",description:'description2' },
{ src:"imag/c.png",description:'description2' },
{ src:"imag/a.png",description:'description2' },


        ]
    };
},

methods:{
    //modifier la methode 'openimage' pour mettre a jour 'selecImage' ensuite modifier votre methode OpenImage pour mettre à jour SelectedImage
    //selectedImage est une propriete permettant de suivre l'image selectionné
 openImage(image){
this.selectedImage= image;
this.isModalOpen=true;
 },

 closeImage(){
    this.selectedImage = null;
    this.isModalOpen=false;
 }


}

}



</script>

<style>

.contain{
    
 margin-top: 2em;
padding-bottom: 2em;
display: grid;
grid-template-columns:  1fr ;
justify-content: center;
justify-items: center;
color: #013237;
}

.contain h2{
    position: relative;
}
.contain h2::before{
    content: "";
    position: absolute;
    height: 3px;
    background-color: #fe979c;


    width:clamp(85px,5vw,460px);

   left: 140px;
   bottom: 15px;
    
}
.contain h2::after{
    content: "";
    position: absolute;
    height: 3px;
    background-color: #fe979c;
    width:clamp(85px,5vw,460px);
   right: 140px;
   bottom: 15px;
    
} 

.lesimages img{
    width:100% ;
    
  box-shadoW:0 3px 7px 0   #aaa9a9;
}

.imgf{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    /* background-color: red; */
    max-width: 84%;
    gap: 10PX;
    padding-top: 2em;
    padding-bottom: 2em;
}

.modal{
  
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width:100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.7);
    color:#f6e8df
}


.modal-content{
    position: relative;
    margin: 5% auto;
    padding: 5PX;
    width:100% ;
    width:600PX ;


}
.modal-content img{
    width:100% ;
}




.close{
    position: absolute;
    top: 0;
    right: 0;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    background-color: RED;
}
</style>