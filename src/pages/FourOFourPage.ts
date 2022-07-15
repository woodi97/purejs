import { Component } from '@src/core/purifier/Component';
import { Button } from '@src/components/common';

class FourOFourPage extends Component<any> {
  render() {
    return `
      <div class="four-o-four">
        <h1>404</h1>
        <p>Page not found</p>
        <div class="back-to-home"></div>
      </div>
    `;
  }

  mounted() {
    const backHome = this.$target.querySelector('.back-to-home');
    new Button(backHome, {
      key: 'home-button-1',
      text: 'Go to home page',
      onClick: this.handleOnClick.bind(this),
    });
  }

  handleOnClick() {
    window.location.hash = '/';
  }
}

export default FourOFourPage;
