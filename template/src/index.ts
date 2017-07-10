import Vue from 'vue'
import { Component } from 'vue-typed'
import { Container } from './container'

Vue.component('app-container', Container)

@Component({
	template: '<div><app-container title="My App">Hello \{{msg}}!</app-container></div>'
})
class App extends Vue {	
	msg = 'there'
}

new App().$mount('#app');