const babelOptions = {
  presets: ['@babel/preset-react', 'next/babel', '@babel/preset-typescript'],
};

module.exports = require('babel-jest').createTransformer(babelOptions);
