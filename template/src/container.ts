import { Component, Prop  } from 'vue-typed'
import Vue from 'vue'

@Component({
	template: require('./container.html')
})
export class Container extends Vue {
	@Prop({ type: String })
	title: string
}