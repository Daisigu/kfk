<template>
    <div class="arhcive__page pt-4">
        <div class="container">
            <h1 class="text-center ">Архив</h1>
            <div class="row">
                <PeopleList :users="users"/>
                <PeopleInfo />
            </div>

        </div>
    </div>
</template>

<script>
import PeopleList from '../components/peopleList.vue';
import PeopleInfo from '../components/peopleInfo.vue';
export default {
    components: { PeopleList, PeopleInfo },
     props: {
        users: {
            type: Array,
            required: true,
        }
    },
}
</script>

<style lang="css" scoped>
</style>