<template>
  <div>
    <!-- sekcja o firmie -->
    <section class="t-our-company">
        <div class="o-container">
            <div class="o-row o-row--center-y">
                <div class="o-col o-col--md50 t-our-company__left">
                    <span class="c-label">Klinika</span>
                    <h2 class="c-heading c-heading-level2 c-heading--upper u-mb-2">Zakres usług</h2>
                     <input type="text" id="title" v-model="content.CompanyInfo.title">
                    <p class="u-mb-3">Gabinet posiada najwyższej jakości wyposażenie, a wszystkie narzędzia są wysterylizowane w autoklawie, zatem możecie Państwo być pewni, że usługi oferowane w gabinecie są bezpieczne</p>
                    <input type="text" id="desc" v-model="content.CompanyInfo.description">
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
            <button @click="onclick">bbbb</button>
             <button type="button" class="btn" @click="showModal">Open Modal!</button>
              <modal v-show="isModalVisible" @close="closeModal" />
        </div>
    </section>
  </div>
</template>

<script>
const modal = () => import('./Modal')
export default {
  name: 'CompanyInfo',
  components: { modal },
  data () {
    return {
      content: {
        CompanyInfo: {
          title: '',
          description: ''
        }
      },
      isModalVisible: false
    }
  },
  methods: {
    onclick () {
      let self = this
      self.$store.dispatch('webContent/setCompanyInfo', self.content)
      console.log(this.content)
    },
    showModal () {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }
  }
}
</script>

<style scoped>
</style>
