import { Component } from '@src/core/purifier/Component';
import { Button } from '@src/components/common';

export default class App extends Component {
  // setup() {}

  render() {
    return `
      <div class="app">
        <button class="custom-button"/>
      </div>
    `;
  }

  mounted() {
    const button = this.$target.querySelector('.custom-button');
    new Button(button, {});
  }

  // setEvent() {}
}
