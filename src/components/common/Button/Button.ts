import { Component } from '@src/core/purifier/Component';

class Button extends Component<{
  key: string;
  text: string;
  onClick?: (e: Event) => void;
}> {
  render() {
    return `
      <button class="pure-button-${this.$props.key} bg-purple-300 py-2 px-4 rounded-sm">${this.$props.text}</button>
    `;
  }

  setEvent() {
    const { onClick } = this.$props;
    this.addEvent('click', `.pure-button-${this.$props.key}`, onClick);
  }
}

export default Button;
