module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/common/components/**/*.{js,ts,jsx,tsx}',
    './src/modules/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        body: '#FFF',
        primary: '#615EF0',
        secondary: '#F1F1F1',
        'text-black': '#464646',
        'custom-gray': '#29292E',
        'input-border': '#E2E8F0',
        'error-text': '#F10E0E',
        'error-bg': 'rgba(241, 14, 14, 0.1)'
      },
      fontFamily: {
        roboto: ['roboto']
      }
    }
  },
  plugins: []
}
