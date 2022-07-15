import { Component } from '@src/core/purifier/Component';
import { Button, ThemeSwitch } from '@src/components/common';

export default class HomePage extends Component<unknown> {
  render() {
    return `
      <div><h1>This is Home Page</h1></div>
      <div>
            <div class="home-button"></div>
            <div class="theme-button"></div>
      </div>

    `;
  }

  mounted() {
    const hbutton = this.$target.querySelector('.home-button');
    new Button(hbutton, {
      key: 'hb-1',
      text: 'Go to 404 page',
      onClick: this.handleOnClick.bind(this),
    });
    console.log(this.$target);
    const tbutton = this.$target.querySelector('.theme-button');
    new ThemeSwitch(tbutton, {});
  }

  handleOnClick() {
    window.location.hash = '/four';
  }
}
