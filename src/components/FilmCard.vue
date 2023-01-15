2
<script>
export default {
    name: 'FilmCard',
    props: {
        filmTitle: 'string',
        filmLang: 'string',
        filmRate: 'number',
        originalTitle: 'string',
    }
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

</style>