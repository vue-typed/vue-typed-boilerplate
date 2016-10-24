import { Component, Prop } from 'vue-typed'

@Component({
	template: `<div><h1>\{{title}}</h1><div><slot></slot></div></div>`
})
export class Container {
	@Prop({ type: String })
	title: string
}