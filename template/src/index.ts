import { Component, Data } from 'vue-typed'
import * as Vue from 'vue'
import { Container } from './container'

Vue.component('app-container', Container)

@Component({
	template: '<div><app-container title="My App">Hello \{{msg}}!</app-container></div>'
})
class App extends Vue {
	@Data()
	msg = 'there'
}

new App().$mount('#app');