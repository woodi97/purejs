import { Component } from '@src/core/purifier/Component';

class Button extends Component {
  render() {
    return `
      <button class="bg-blue-500 py-2 px-4 rounded-sm">abc</button>
    `;
  }
}

export default Button;
