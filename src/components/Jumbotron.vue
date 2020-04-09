<template>
    <div class="t-site-header__hero">
                <h1 class="c-heading c-heading--level1 c-heading--white">Gabinet Podologiczny</h1>
                <input type="text" id="title" v-model="content.Jumbotron.title">
                <p class="t-site-header__intro-text">Podologia (podiatria) zajmuje się diagnozowaniem, profilaktyką oraz leczeniem chorób stóp. Niektóre schorzenia w obrębie stóp np. wrastające paznokcie, odciski, modzele, pekające pięty mogą być usuwane w gabinecie podologicznym bez konieczności udawania się do dermatologa czy chirurga. Tylko najpoważniejsze choroby i deformacje wymagają konsultacji lekarskich. Zatem skorzystanie z usług podologa w wielu przypadkach jest zupełnie wystarczające do zniwelowania bólu</p>
                <input type="text" id="title" v-model="content.Jumbotron.description">
                <button class="c-btn c-btn--accent" @click="saveContent(content)">Zobacz więcej</button>
                <span class="t-site-header__btn-divider">Lub</span>
                <a class="c-btn c-btn--dark-blue" href="#">Rejestracja</a>
                
            </div>
</template>

<script>
import mixinContent from '@/mixins.js'
export default {
    name: 'Jumbotron',
    mixins: [mixinContent],
    data () {
        return {
            content: {
                Jumbotron: {
                title: '',
                description: ''
                }
            },
        }
    },
    // methods: {
    //     save () {
    //         let self = this
    //         self.$store.dispatch('webContent/setCompanyInfo', self.content)
    //     }
    // }
}
</script>

<style>

</style>