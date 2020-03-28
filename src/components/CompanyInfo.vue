<template>
  <div>
    <!-- sekcja o firmie -->
    <section class="t-our-company">
        <div class="o-container">
            <div class="o-row o-row--center-y">
                <div class="o-col o-col--md50 t-our-company__left">
                    <span class="c-label">Klinika</span>
                    <h2 class="c-heading c-heading-level2 c-heading--upper u-mb-2">Zakres usług</h2>
                    <p class="u-mb-3">Gabinet posiada najwyższej jakości wyposażenie, a wszystkie narzędzia są wysterylizowane w autoklawie, zatem możecie Państwo być pewni, że usługi oferowane w gabinecie są bezpieczne</p>
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
                    <img src="@/assets/images/foot.jpg" alt="klinika">
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CompanyInfo'
}
</script>

<style scoped>
</style>
