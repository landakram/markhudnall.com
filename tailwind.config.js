module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  important: true,
  purge: {
    content: ['./**/*.clj', './**/*/*.cljs', './**/*/*.md'],
  },
  theme: {
    fontFamily: {
      mono: ['fira-mono', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
      sans: ['futura-pt', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"']
    },
    inset: {
      '0': 0,
      'auto': 'auto',
      '16': '4rem',
    },
    extend: {
      fontSize: {
        "4xl": [
          "3.576rem",
          "4.5rem"
        ],
        "3xl": [
          "2.861rem",
          "4.5rem"
        ],
        "2xl": [
          "2.289rem",
          "3rem"
        ],
        "xl": [
          "1.831rem",
          "3rem"
        ],
        "lg": [
          "1.465rem",
          "3rem"
        ],
        "md": [
          "1.172rem",
          "1.5rem"
        ],
        "base": [
          "0.938rem",
          "1.5rem"
        ],
        "sm": [
          "0.75rem",
          "1.5rem"
        ],
        "xs": [
          "0.6rem",
          "1.5rem"
        ]
      },
      spacing: {
        "quarter": "0.375rem",
        "half": "0.75rem",
        "one": "1.5rem",
        "one-quarter": "1.875rem",
        "two": "3rem",
        "three": "4.5rem",
        "four": "6rem",
        "five": "7.5rem",
        "six": "9rem",
        "eight": "12rem",
        "twelve": "18rem",
        "sixteen": "24rem"
      },
    },
  },
  variants: {
    borderRadius: ['responsive', 'first', 'last'],
    borderWidth: ['responsive', 'first', 'last'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [
  ],
}

