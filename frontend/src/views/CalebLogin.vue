<template>
    <div class="block w-[300px] mt-12 m-auto border-gray-800 border-2 p-4">
        <h1 class="text-lg">Login Form</h1>
        <form @submit.prevent="login">
            <input v-model="username" placeholder="Username" required class="w-full my-4 border-b focus:outline-none border-gray-600 text-sm" />
            <input type="password" v-model="password" placeholder="Password" required class="w-full my-4 border-b focus:outline-none border-gray-600 text-sm" />
            <button type="submit" class="bg-orange-900 text-white w-32 py-1 cursor-pointer mt-4 mr-1 text-sm">Login</button>
            <button type="button" class="bg-blue-50 border border-gray-700 w-32 py-1 cursor-pointer mt-4 text-sm" @click="register">Register</button>
        </form>
    </div>
</template>

<script>
import { login } from '@/utils/ApiUtils';

export default {
    data() {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
        async login() {
            const token = await login(this.username, this.password);
            if (token) {
                this.$router.push('/home');
            }
        },
        register() {
            location.href = '/register';
        }
    }
}
</script>