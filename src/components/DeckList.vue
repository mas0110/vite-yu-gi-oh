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
  <div class="container text-center">
    <h1>Yu-Gi-Oh Api</h1>
    <div v-if="(store.loading)" class="d-flex justify-content-center text-primary mt-3">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div class="row">
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
</style>
