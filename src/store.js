import {reactive} from 'vue'

export const store = reactive({
    searchText:"",
    loading: true,
    CardList:[],
    apiURL:'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0',
    ArchtypeList:[],
    apiSelect:'https://db.ygoprodeck.com/api/v7/archetypes.php',
    SelectValue:"",
})