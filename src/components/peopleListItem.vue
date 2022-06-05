<template>
    <a href="#" class="list-group-item list-group-item-action" aria-current="true">
        <div class="d-flex w-100 justify-content-start flex-column">
        <p class="m-2">Имя: {{user.name}}</p>
        <p class="m-2">Фамилия: {{user.username}}</p>
        </div>
    </a>
</template>

<script>

export default {
    props: {
        user: {
            type: Object,
            required: true,
        }
    },

}
</script>

<style lang="scss" scoped>
</style>