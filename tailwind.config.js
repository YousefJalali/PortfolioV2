/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/libs/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
  theme: {
    colors: {
      primary: '#1a47ff',
      'primary-content': '#ffffff',
      secondary: '#E4DCCF',
      accent: '#EA5455',
      neutral: '#021431',
      'base-100': '#ffffff',
      'base-200': '#F2F7FF',
      'base-300': '#E3E9F4',
      'base-content': '#394E6A',
      info: '#93E7FB',
      success: '#81CFD1',
      warning: '#EFD7BB',
      error: '#E58B8B',
      transparent: 'transparent',
    },
    fontFamily: {
      sans: ['var(--font-inter)'],
      mono: ['var(--font-fira)'],
    },
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.neutral / 60%'),
            '--tw-prose-headings': theme('colors.neutral'),
            '--tw-prose-lead': theme('colors.neutral'),
            '--tw-prose-links': theme('colors.primary'),
            // '--tw-prose-invert-body': theme('colors.pink[200]'),
            // '--tw-prose-invert-headings': theme('colors.white'),
            // '--tw-prose-invert-lead': theme('colors.pink[300]'),
            // '--tw-prose-invert-links': theme('colors.white'),
          },
        },
        sm: {
          css: {
            '--tw-prose-body': theme('colors.neutral / 60%'),
            '--tw-prose-headings': theme('colors.neutral'),
            '--tw-prose-lead': theme('colors.neutral'),
            '--tw-prose-links': theme('colors.primary'),
            // '--tw-prose-invert-body': theme('colors.pink[200]'),
            // '--tw-prose-invert-headings': theme('colors.white'),
            // '--tw-prose-invert-lead': theme('colors.pink[300]'),
            // '--tw-prose-invert-links': theme('colors.white'),
          },
        },
      }),
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
}
