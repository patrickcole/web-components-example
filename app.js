class HelloElement extends HTMLElement {
	constructor() {
		super();
		var shadow = this.attachShadow({ mode: 'closed' });
		shadow.innerHTML += `
		<style>
			.hello-element {
				font-family: 'Arial', sans-serif;
				font-size: 32px;
			}
		</style>
		<div class="hello-element">
			Hello ${this.getAttribute('name')}
		</div>
		`;
	}
}
// Define the new element with the CustomElementsRegistry
customElements.define('hello-element', HelloElement);