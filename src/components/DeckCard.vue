<script>
export default{
    name: "DeckCard",
    props:[
        'propsImg',
        'propsTitle',
        'propsType'

    ]

}
</script>

<template>
    <div class="col-3 mb-3">
        <div class="bg-s">
            <figure class="">
                <img :src="propsImg" alt="">
            </figure>
            <h3>{{ propsTitle }}</h3>
            <span>{{ propsType }}</span>
        </div>
    </div>
</template>

<style scoped>
img{
    max-height: 246px;
}
.bg-s{
    min-height:360px;
    background-color: #CCCCCC;
}
</style>
