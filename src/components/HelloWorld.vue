<template>
  <div>
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
            <div class="t-site-header__hero">
                <h1 class="c-heading c-heading--level1 c-heading--white">Kompleksowe zdrowie</h1>
                <p class="t-site-header__intro-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s</p>
                <a class="c-btn c-btn--accent" href="#">Zobacz więcej</a>
                <span class="t-site-header__btn-divider">Lub</span>
                <a class="c-btn c-btn--dark-blue" href="#">Rejestracja</a>
            </div>
        </div>
    </header>

    <!-- sekcja o firmie -->
    <section class="t-our-company">
        <div class="o-container">
            <div class="o-row o-row--center-y">
                <div class="o-col o-col--md50 t-our-company__left">
                    <span class="c-label">Klinika</span>
                    <h2 class="c-heading c-heading-level2 c-heading--upper u-mb-2">Nasz zespół specjalistów</h2>
                    <p class="u-mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                    <div class="t-our-company_buttons">
                        <a class="c-btn c-btn--primary t-our-company__btn" href="#">Kardiologia</a>
                        <a class="c-btn c-btn--primary t-our-company__btn" href="#">Neurologia</a>
                        <a class="c-btn c-btn--primary t-our-company__btn" href="#">Ortopedia</a>
                        <a class="c-btn c-btn--primary t-our-company__btn" href="#">Onkologia</a>
                        <a class="c-btn c-btn--primary t-our-company__btn" href="#">Laryngologia</a>
                        <a class="c-btn c-btn--primary t-our-company__btn" href="#">Gastrologia</a>
                    </div>
                </div>
                <div class="o-col o-col--md50 t-our-company__right">
                    <img src="@/assets/images/klinika.png" alt="klinika">
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<style scoped>
</style>
