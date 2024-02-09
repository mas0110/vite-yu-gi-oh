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
            axios
            .get(store.apiURL)
            .then(res => {
                console.log(res.data)
                store.CardList = res.data.data
                store.loading = false
            })
        },
    },
    mounted(){
        this.getCard()
    }
}
</script>

<template>
   <DeckList/>
</template>

<style>

</style>
