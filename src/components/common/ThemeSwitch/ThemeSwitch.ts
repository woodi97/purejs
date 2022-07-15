import { Component } from '@src/core/purifier/Component';
import './ThemeSwitch.scss';

export default class ThemeSwitch extends Component {
  render() {
    return `
    <div class="theme-switch-wrapper">
      <label class="theme-switch" for="checkbox">
        <input type="checkbox" id="checkbox" />
        <div class="slider round"></div>
      </label>
      <em>Enable Dark Mode!</em>
    </div>
    `;
  }

  setEvent() {
    function switchTheme(e) {
      if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
      }
    }

    this.addEvent(
      'change',
      '.theme-switch input[type="checkbox"]',
      switchTheme,
    );
  }
}
