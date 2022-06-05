<template>
    <div class="people__list col-sm-12 col-lg-4">
        <div class="input-group mb-3">
            <input v-model="userName" type="text" class="form-control" placeholder="" aria-label="Recipient's username"
                aria-describedby="button-addon2">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Поиск</button>
        </div>
        <div class="list-group">
            
             <PeopleListItem
                v-for="user in searchUser"
                :users="searchUser"
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
    data(){
        return {
            userName: ''
        }
    },
    computed: {
            searchUser(){      
            return this.users.filter( user=> user.name.includes(this.userName))         
        }
    }
   
}
</script>

<style lang="scss" scoped>
</style>