export default {
    install(Vue) {

        if(this.installed) {
            return
        }

        this.install = true

        Vue.prototype.$modal = {
            
            EventBus: new Vue(),
            
            show(name, settings) {
                this.EventBus.$emit("show", {name, ...settings})
                console.log("show")
            },

            showFormEdit(item ) {
                this.EventBus.$emit("showFormEdit", item)
                console.log(item)
            },

            hide() {
                this.EventBus.$emit("hide")
                console.log("hide")
            },
        }
    }
}

