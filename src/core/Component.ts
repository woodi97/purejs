export class Component {
  $target;
  // props for parent to child communication
  $props;
  $state;
  constructor($target: HTMLElement, $props: {}) {
    this.$target = $target;
    this.$props = $props;
    this.setup();
    this.setEvent();
    this.render();
  }
  setup() {}
  // children components should be mounted in this method
  mounted() {}
  template() {
    return "";
  }
  render() {
    this.$target.innerHTML = this.template();
    this.mounted();
  }

  setEvent() {}
  setState(newState: {}) {
    this.$state = { ...this.$state, ...newState };
    this.render();
  }
  addEvent(
    eventType: keyof GlobalEventHandlersEventMap,
    selector: string,
    callback: (e) => void
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
