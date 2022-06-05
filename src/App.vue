<template>
    <div>
        <mainHeader />
        <router-view :users="users">
        </router-view>

    </div>
</template>

<script>
import mainHeader from './components/mainHeader.vue'
import Arhcive from './pages/arhcive.vue'
import axios from 'axios'
import MainPage from './pages/mainPage.vue'
export default {
    components: {
    mainHeader,
    Arhcive,
    MainPage
},
    data() {
        return {
            users: []
        }
    },
    methods: {
        async fetchUsers(){
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users')
                this.users = response.data;
            }
            catch(e) {
                alert('Ошибка')
            }
        }
    },
    mounted() {
        this.fetchUsers();
  }

}
</script>

<style lang="css" >
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>