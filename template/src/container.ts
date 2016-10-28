import { Component, Prop } from 'vue-typed'

@Component({
	template: require('./container.html')
})
export class Container {
	@Prop({ type: String })
	title: string
}