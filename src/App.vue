<template>
  <div id="app">
    <Navigation/>
    <CompanyInfo/>
    <Register/>
    <Login/>
    <BoxesInfo/>
  </div>
</template>

<script>
const CompanyInfo = () => import('./components/CompanyInfo')
const Navigation = () => import('@/components/TheNavigation')
const Register = () => import('@/views/Register')
const Login = () => import('@/views/Login')
const BoxesInfo = () => import('./components/BoxesInfo')
import './assets/style.css'
export default {
  name: 'App',
  components: {
    Navigation,
    CompanyInfo,
    Register,
    Login,
    BoxesInfo
  },
  mounted () {
    this.$store.dispatch('webContent/getContentPage')
  }
}
</script>

<style>

</style>
