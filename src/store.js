import { reactive } from 'vue'

export const store = reactive({
    filmList: [],
    searchTitle: "",
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

});
