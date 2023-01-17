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
        serieTitle: 'string',
        serieOriginalTitle: 'string',
        serieRate: 'number',
        serieLang: 'string'
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
    <div class="col-2 border">
        <ul class="p-2">
            <li>
                <h3> {{ filmTitle }} </h3>
                <p>{{ filmRate }}</p>
                <p> {{ originalTitle }}</p>
                <h3> {{ serieTitle }} </h3>
                <p>{{ serieRate }}</p>
                <p>{{ serieOriginalTitle }}</p>
                <img :src="getImagePath(filmLang)" alt="#">
            </li>

        </ul>
    </div>
</template>
<style lang="scss" scoped>
ul {
    list-style-type: none;
}

li {
    font-size: 0.9rem;
}
</style>