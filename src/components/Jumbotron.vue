<template>
    <div class="t-site-header__hero">
                <h1 class="c-heading c-heading--level1 c-heading--white">Gabinet Podologiczny</h1>
                <input type="text" id="title" v-model="content.Jumbotron.title">
                <p class="t-site-header__intro-text">Podologia (podiatria) zajmuje się diagnozowaniem, profilaktyką oraz leczeniem chorób stóp. Niektóre schorzenia w obrębie stóp np. wrastające paznokcie, odciski, modzele, pekające pięty mogą być usuwane w gabinecie podologicznym bez konieczności udawania się do dermatologa czy chirurga. Tylko najpoważniejsze choroby i deformacje wymagają konsultacji lekarskich. Zatem skorzystanie z usług podologa w wielu przypadkach jest zupełnie wystarczające do zniwelowania bólu</p>
                <input type="text" id="title" v-model="content.Jumbotron.description">
                <a class="c-btn c-btn--accent" href="#">Zobacz więcej</a>
                <span class="t-site-header__btn-divider">Lub</span>
                <a class="c-btn c-btn--dark-blue" href="#">Rejestracja</a>
                
            </div>
</template>

<script>
export default {
    name: 'Jumbotron',
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
    methods: {
        save () {
            this.$emit('save', this.content)
        }
    }
}
</script>

<style>

</style>