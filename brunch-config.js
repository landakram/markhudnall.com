module.exports = {
    paths: {
        watched: ['resources/src'],
        public: 'resources/public'
    },
    files: {
        stylesheets: { joinTo: 'css/main.css' }
    },
    plugins: {
        postcss: {
            processors: [
                require('postcss-import'),
                require('tailwindcss'),
                require('autoprefixer'),
                require('cssnano')({ preset: 'default' })
            ]
        }
    }
}

