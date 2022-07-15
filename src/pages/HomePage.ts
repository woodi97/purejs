import { Component } from '@src/core/purifier/Component';
import { Button } from '@src/components/common';

export default class HomePage extends Component<unknown> {
  render() {
    return `
      <div><h1>This is Home Page</h1></div>
      <div class="home" />
    `;
  }

  mounted() {
    const home = this.$target.querySelector('.home');
    new Button(home, {
      key: 'home-button-1',
      text: 'Go to 404 page',
      onClick: this.handleOnClick.bind(this),
    });
  }

  handleOnClick() {
    window.location.hash = '/four';
  }
}
