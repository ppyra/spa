<template>
  <div id="app">
    <Navigation/>
    <CompanyInfo/>
    <Register/>
    <Login/>
  </div>
</template>

<script>
const CompanyInfo = () => import('./components/CompanyInfo')
const Navigation = () => import('@/components/TheNavigation')
const Register = () => import('@/views/Register')
const Login = () => import('@/views/Login')
import './assets/style.css'
export default {
  name: 'App',
  components: {
    Navigation,
    CompanyInfo,
    Register,
    Login
  }
}
</script>

<style>

</style>
