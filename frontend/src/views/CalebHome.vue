<template>
    <div class="block w-[300px] mt-12 m-auto border-gray-800 border-2 p-4">
        <div>Halo, Selamat Datang <strong>{{ name }}</strong></div>
        <button @click="logout" class="bg-orange-900 text-white w-32 py-1 cursor-pointer mt-4 mr-1">Logout</button>
    </div>
</template>

<script>
import { profile } from '@/utils/ApiUtils';

export default {
    data() {
        return {
            name: ''
        };
    },
    async created() {
        const userData = await profile();
        if (userData) {
            this.name = userData;
        } else {
            this.$router.push('/login');
        }
    },
    methods: {
        logout() {
            localStorage.removeItem('token');
            this.$router.push('/login');
        }
    }
}
</script>