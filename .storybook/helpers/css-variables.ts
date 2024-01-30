export const cssVariables = (initializer: () => Promise<any>) => {
  return {
    get styleTag() {
      return document.head.querySelector('style[data-id="theme-variables"]');
    },
    set styleTag(element) {
      this.styleTag?.remove();
      if (element) {
        element.setAttribute('data-id', 'theme-variables');
        element.setAttribute('type', 'text/css');
        document.head.appendChild(element);
      }
    },
    innerStyles: '',

    use: async function () {
      this.innerStyles = await initializer().then((module) => module.default);

      if (!this.styleTag?.innerHTML) {
        this.styleTag = document.createElement('style');
      }

      if (this.styleTag?.innerHTML !== this.innerStyles) {
        this.styleTag.innerHTML = this.innerStyles;
      }
    },
    unuse: async function () {
      if (this.styleTag) {
        this.styleTag.innerHTML = '';
      }
    }
  };
};
