<template>
  <header class="t-site-header">
        <div class="o-container">
            <div class="t-site-header__top">
                <div class="o-row o-row--center-y">
                    <div class="o-col o-col--lg25">
                        <img src="@/assets/images/logo.png" alt="logo">
                    </div>
                    <div class="o-col o-col--lg75 t-site-header__menu">
                        <nav class="c-nav">
                            <a class="c-nav__item" href="#">Start</a>
                            <a class="c-nav__item" href="#">O firmie</a>
                            <a class="c-nav__item" href="#">Usługi</a>
                            <a class="c-nav__item" href="#">Specjalizacje</a>
                            <a class="c-nav__item" href="#">Kontakt</a>
                        </nav>
                    </div>
                </div>
            </div>
            <div class="t-site-header__divider">
            </div>
            <Jumbotron/>
        </div>
    </header>
</template>

<script>
const Jumbotron = () => import('@/components/Jumbotron')
export default {
    name: 'navigation',
    components: {
        Jumbotron
    }
}
</script>

<style>

</style>