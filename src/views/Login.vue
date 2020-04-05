<template>
  <button @click="onSubmit()">Zaloguj</button>
</template>

<script>
// import authAxios from '@/auth-axios'
export default {
    name: 'Login',
    methods: {
        async onSubmit () {
            let self = this
            await self.$store.dispatch('security/login', {
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