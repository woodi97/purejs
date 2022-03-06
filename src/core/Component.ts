/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/ban-types */
export class Component {
  $target;
  $props;
  $state;
  constructor($target: HTMLElement, $props: {}) {
    this.$target = $target;
    this.$props = $props;
    this.setup();
    this.setEvent();
    this._draw();
  }
  setup() {}
  // children components should be mounted in this method
  mounted() {}
  render() {
    return '';
  }
  _draw() {
    this.$target.innerHTML = this.render();
    this.mounted();
  }

  setEvent() {}
  setState(newState: {}) {
    this.$state = { ...this.$state, ...newState };
    this._draw();
  }
  addEvent(
    eventType: keyof GlobalEventHandlersEventMap,
    selector: string,
    callback: (e) => void,
  ) {
    const children = [...this.$target.querySelectorAll(selector)];
    // if there are deep element inside selected element,
    // use closest()
    const isTarget = (target) =>
      children.includes(target) || target.closest(selector);
    this.$target.addEventListener(eventType, (event) => {
      if (!isTarget(event.target)) return false;
      callback(event);
    });
  }
}
