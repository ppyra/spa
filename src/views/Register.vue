<template>
  <button @click="onSubmit()">Zarejestruj</button>
</template>

<script>
// import authAxios from '@/auth-axios'
export default {
name: 'Register',
data() {
    return {

    }
},
methods: {
    async onSubmit () {
        await this.$store.dispatch('register', {
            email: 'ppyra@gmail.com',
            password: 'admin123',
            returnSecureToken: true
        })
    }
}
}
</script>

<style>

</style>