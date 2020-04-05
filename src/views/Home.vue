<template>
    <Navigation/>
    <companyInfo/>
</template>

<script>
const companyInfo = () => import('./components/CompanyInfo')
const Navigation = () => import('@/components/TheNavigation')
export default {
    name: 'Home',
    components: {
        companyInfo, Navigation
    },
    methods: {
        saveAll () {
            
        }
    }
}
</script>

<style>

</style>