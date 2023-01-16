2
<script>
import { store } from '../store';

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
            store
        }
    },
    methods: {
        getImagePath(filmLanguage) {
            let flags = [
                "de", "en", "es", "us", "it", "fr"
            ];
            console.log(filmLanguage);
            let imgPath = "../assets/img/en.png";
            if (flags.includes(filmLanguage)) {
                imgPath = "../assets/img/" + filmLanguage + ".png";
            }
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
                <img :src="getImagePath(filmLang)" alt="#">
            </li>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
ul {
    list-style-type: none;
}
</style>