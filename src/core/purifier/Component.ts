export class Component<T> {
  $target;
  $props;
  $state;

  constructor($target: HTMLElement, $props: T) {
    this.$target = $target;
    this.$props = $props;
    this.setup();
    this.setEvent();
    this._draw();
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setup() {}

  // children components should be mounted in this method
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  mounted() {}

  render() {
    return '';
  }

  _draw() {
    this.$target.innerHTML = this.render();
    this.mounted();
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setEvent() {}

  setState(newState: Record<string, unknown>) {
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
