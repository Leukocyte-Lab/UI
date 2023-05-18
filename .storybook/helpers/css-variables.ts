export const cssVariables = (url: string) => {
  return {
    styleTag: null as any,
    innerStyles: '',

    use: async function () {
      if (!this.styleTag?.innerHTML) {
        this.styleTag = document.createElement('style');
        this.styleTag.setAttribute('id', 'theme-variables');
        this.styleTag.setAttribute('type', 'text/css');
        this.innerStyles = (await import(/* @vite-ignore */ `../${url}`)).default;
        this.styleTag.innerHTML = this.innerStyles;

        document.documentElement.appendChild(this.styleTag);
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
