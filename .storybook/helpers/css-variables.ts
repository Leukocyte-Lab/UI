export const cssVariables = (url: string) => {
  return {
    styleTag: null as any,
    innerStyles: '',

    use: async function () {
      if (!this.styleTag?.innerHTML) {
        this.styleTag = document.createElement('link');
        this.styleTag.setAttribute('id', 'theme-variables');
        this.styleTag.setAttribute('type', 'text/css');
        this.styleTag.setAttribute('rel', 'stylesheet');
        this.styleTag.setAttribute('href', url);

        document.head.appendChild(this.styleTag);
        return;
      }

      this.styleTag.innerHTML = this.innerStyles;
    },
    unuse: function () {
      if (this.styleTag) {
        this.styleTag.innerHTML = '';
      }
    }
  };
};
