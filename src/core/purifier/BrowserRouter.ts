/* eslint-disable @typescript-eslint/no-empty-function */

/* eslint-disable @typescript-eslint/ban-types */
import { Component } from '@src/core/purifier/Component';
import { parseRequestUrl } from '@src/utils/browser';
import FourOFourPage from '@src/pages/FourOFourPage';

export class BrowserRouter {
  $target;
  $routers;

  constructor(
    $target: HTMLElement,
    $routers: { [key: string]: typeof Component },
  ) {
    this.$target = $target;
    this.$routers = $routers;
    this.mounted();
  }

  async render() {
    const { resource, id, verb } = parseRequestUrl();
    const parsedUrl =
      (resource ? '/' + resource : '/') +
      (id ? '/:id' : '') +
      (verb ? '/' + verb : '');
    console.log('parsedUrl', parsedUrl);
    const page = this.$routers[parsedUrl] || FourOFourPage;
    await new page(this.$target, {});
  }

  mounted() {
    window.addEventListener('hashchange', this.render.bind(this));
    window.addEventListener('load', this.render.bind(this));
  }
}
