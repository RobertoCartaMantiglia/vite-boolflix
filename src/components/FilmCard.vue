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
            countriesFlags: [
                {
                    name: "France",
                    src: "http://flags.fmcdn.net/data/flags/mini/fr.png"
                },
                {
                    name: "Germany",
                    src: "http://flags.fmcdn.net/data/flags/mini/de.png"
                },
                {
                    name: "Italy",
                    src: "http://flags.fmcdn.net/data/flags/mini/it.png"
                },
                {
                    name: "Spain",
                    src: "http://flags.fmcdn.net/data/flags/mini/es.png"
                },
                {
                    name: "UK",
                    src: "http://flags.fmcdn.net/data/flags/mini/gb.png"
                },
                {
                    name: "USA",
                    src: "http://flags.fmcdn.net/data/flags/mini/us.png"
                },
                {
                    name: "Spain",
                    src: "http://flags.fmcdn.net/data/flags/mini/es.png"
                },

            ]

        }
    },
}
</script>
<template>
    <div>
        <ul>
            <li>
                {{ filmTitle }} - {{ filmRate }} - {{ filmLang }} - {{ originalTitle }}
            </li>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
ul {
    list-style-type: none;
}
</style>