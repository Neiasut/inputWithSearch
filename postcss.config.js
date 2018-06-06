module.exports = ({ file, options, env }) => {
  
    console.log(file, options, env);

    return {
        plugins: {
            'autoprefixer': env === 'development'
                ? false
                : { browsers: ['last 2 versions', 'iOS >= 8'] }
        }
    };
};