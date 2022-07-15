import { Component } from '@src/core/purifier/Component';
import './ThemeSwitch.scss';
import cx from 'classnames';

export default class ThemeSwitch extends Component<unknown> {
  render() {
    return `
    <div class="flex items-center">
      <label class="theme-switch h-8 relative w-[60px]" for="checkbox">
        <input type="checkbox" id="checkbox" class="hidden"/>
        <div class="${cx('slider', 'rounded-full before:rounded-full')}"></div>
      </label>
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
