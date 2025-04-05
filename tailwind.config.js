module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-dark': '#222222',
      },
      components: {
        '.form-input': {
          '@apply w-full py-2 px-3 bg-white rounded-md focus:outline-none placeholder:text-gray-700 placeholder:text-extra-light':
            {},
        },
      },
    },
  },
  plugins: [],
};
