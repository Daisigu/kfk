<template>
    <div class="people__list col-sm-12 col-lg-4">
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username"
                aria-describedby="button-addon2">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
        </div>
        <div class="list-group">
            
             <PeopleListItem
                v-for="user in users"
                :user="user"
                :key="user.id"
        />
        </div>
    </div>
</template>

<script>
import PeopleListItem from './peopleListItem.vue';
export default {
    components: { PeopleListItem },
     props: {
        users: {
            type: Array,
            required: true,
        }
    },
   
}
</script>

<style lang="scss" scoped>
</style>