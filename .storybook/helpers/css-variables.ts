export const cssVariables = (
  initializer: () => Promise<any>,
  additionalStyles?: Record<string, string>
) => {
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

      const stylesheet = `${this.innerStyles}${
        additionalStyles
          ? `.sbdocs-preview, .sb-show-main, body, :root {${Object.entries(additionalStyles).reduce(
              (acc, [key, value]) => `${acc}\n  ${key}: ${value};`,
              ''
            )}}`
          : ''
      }`;

      if (this.styleTag?.textContent !== stylesheet) {
        this.styleTag.textContent = stylesheet;
      }
    },
    unuse: async function () {
      if (this.styleTag) {
        this.styleTag.innerHTML = '';
      }
    }
  };
};

export type CssVariables = ReturnType<typeof cssVariables>;
