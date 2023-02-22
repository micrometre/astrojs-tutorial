import { LitElement, html } from 'lit';

const tagName = 'slider-element';

export class SliderElement extends LitElement {
  render() {
    return html` <p>
    NOTE

    Adding type="module" or any attribute other than src to a  tag will disable  default bundling behavior, treating the tag as if it had an is:inline directive.
    </p> 
    
    `;
  }
}

customElements.define(tagName, SliderElement);