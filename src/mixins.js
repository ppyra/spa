export default {
    methods: {
        saveContent(content) {
            let self = this
            self.$store.dispatch('webContent/setCompanyInfo', content)
        }
    }
}