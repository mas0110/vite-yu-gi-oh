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
    <div class="col-3">
        <figure>
            <img :src="propsImg" alt="">
        </figure>
        <h3>{{ propsTitle }}</h3>
        <span>{{ propsType }}</span>
    </div>
</template>

<style scoped>
img{
    max-height: 246px;
}
</style>
