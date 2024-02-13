<script>
import DeckList from'./components/DeckList.vue'
import { store } from'../src/store'

import axios from 'axios'

export default{
    components:{
        DeckList,
    },
    data(){
        return{
            store,
        }
    },
    methods: {
        getCard() {
            store.loading = true

            if(store.SelectValue){
                store.apiURL += `&archetype=${store.SelectValue}`
            }

            axios
            .get(store.apiURL)
            .then(res => {
                console.log(res.data)
                store.CardList = res.data.data
                store.loading = false
            })
        },
        getArchetype(){
            axios
            .get(store.apiSelect)
            .then(res => {
               console.log(res.data)
               store.ArchtypeList = res.data
               store.loading = false
            })
        }
    },
    mounted(){
        this.getCard()
        this.getArchetype()
    }
}
</script>

<template>
    <div class="bg-success">
        <DeckList @performSearch="getCard()"/>
    </div>
</template>

<style>
</style>
