module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // maxHeight: {
    //   0: '0',
    //   '1/4': '25%',
    //   '1/2': '50%',
    //   '3/4': '75%',
    //   full: '100%',
    // },
    // minHeight: {
    //   0: '0',
    //   '1/4': '25%',
    //   '1/2': '50%',
    //   '3/4': '75%',
    //   full: '100%',
    // },
    // height: {
    //   screen: '100vh',
    //   '1/6': '16.666667%',
    //   '2/6': '33.333333%',
    //   '3/6': '50%',
    //   '4/6': '66.666667%',
    //   '5/6': '83.333333%',
    //   sm: '100px',
    //   md: '150px',
    //   lg: '350px',
    //   xl: '550px',
    //   xxl: '750px',
    // },
    extend: {
      colors: {
        white: '#FFFFFF',
        twitterSwatch: '#1da1f2',
        facebookSwatch: '#4267b2',
        instagramSwatch: '#C13584',
        'main-red': '#ff6662',
        'main-light-blue': '#60bbfa',
        'main-dark-blue': '#0b78d0',
        'main-tight-blue': '#63c0ff',
        'main-blue-white-mix': '#b5e1ff',
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ['focus'],
    },
  },
  plugins: [],
  important: true,
};
