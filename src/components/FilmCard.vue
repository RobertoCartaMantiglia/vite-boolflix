2
<script>
export default {
    name: 'FilmCard',
    props: {
        filmTitle: 'string',
        filmLang: 'string',
        filmRate: 'number',
        originalTitle: 'string',
    },
    data() {
        return {
            imageName: "it.png",
        }
    },
    methods: {
        getImagePath(imgPath) {
            return new URL(imgPath, import.meta.url).href;
        }
    },
}
</script>
<template>
    <div>
        <ul>
            <li>
                {{ filmTitle }} - {{ filmRate }} - {{ originalTitle }}
                <img :src="getImagePath(`../assets/img/${this.imageName}`)" alt="#">
            </li>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
ul {
    list-style-type: none;
}
</style>