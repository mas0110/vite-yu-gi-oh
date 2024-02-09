<script>
import DeckCard from'./DeckCard.vue'
import { store } from'../store'
export default{
    name: "DeckList",
    components:{
        DeckCard
    },
    data(){
    return{
        store,
    }
},
}
</script>

<template>
  <div class="container text-center px-5 p-2">
      <h1 class="pb-5">Yu-Gi-Oh Api</h1>
      <div v-if="(store.loading)" class="d-flex justify-content-center text-primary">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    <div class="row">
        <select class="form-select" aria-label="Default select example">
          <option selected>Alien</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
       
        <DeckCard
        v-for="(element, index) in store.CardList"
        :key="index" 
        :propsImg= "element.card_images[0].image_url_small"
        :propsType= "element.archetype"
        :propsTitle= "element.name"/>
    </div>
  </div>
</template>

<style scoped>
.row{
    position: relative;
    background-color: #003366;
    padding-top: 20px;
    border-radius: 20px;
  
}
select{
    position: absolute;
    left: 60px;
    top: -50px;
    width: 150px;
}
</style>
