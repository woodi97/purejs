import { Component } from '@src/core/purifier/Component';
import { BrowserRouter } from '@src/core/purifier/BrowserRouter';
import HomePage from '@src/pages/HomePage';
import FourOFourPage from '@src/pages/FourOFourPage';

export default class App extends Component<any> {
  render() {
    return `
      <div class="app">
        <div id="router"/>
      </div>
    `;
  }

  mounted() {
    const routerId = this.$target.querySelector('#router');
    new BrowserRouter(routerId, { '/': HomePage, '/four': FourOFourPage });
  }
}
