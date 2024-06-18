<template>
    <div class="block w-[300px] mt-12 m-auto border-gray-800 border-2 p-4">
        <h1 class="text-lg">Register Form</h1>
        <form @submit.prevent="register">
            <input v-model="name" placeholder="Name" required class="w-full my-4 border-b focus:outline-none border-gray-600 text-sm" />
            <input v-model="username" placeholder="Username" required class="w-full my-4 border-b focus:outline-none border-gray-600 text-sm" />
            <input type="password" v-model="password" placeholder="Password" required class="w-full my-4 border-b focus:outline-none border-gray-600 text-sm" />
            <input type="password" v-model="retypePassword" placeholder="Retype Password" required class="w-full my-4 border-b focus:outline-none border-gray-600 text-sm" />
            <button type="submit" class="bg-orange-900 text-white w-32 py-1 cursor-pointer mt-4 mr-1">Register</button>
            <button type="button" class="bg-blue-50 border border-gray-700 w-32 py-1 cursor-pointer mt-4" @click="login">Login</button>
        </form>
    </div>
</template>

<script>
import { register } from '@/utils/ApiUtils';

export default {
    data() {
        return {
            name: '',
            username: '',
            password: '',
            retypePassword: '',
        };
    },
    methods: {
        async register() {
            try {

                if (this.password !== this.retypePassword) {
                    alert('Passwords do not match');
                    return;
                }

                const token = await register(this.name, this.username, this.password);
                if (token) {
                    this.$router.push('/home');
                }
            } catch (error) {
                console.error('Error registering', error);
            }
        },
        login() {
            location.href = '/login'
        }
    }
};
</script>