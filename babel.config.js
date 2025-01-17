module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.jsx', '.js', '.json'],
        alias: {
          '@': './src',
          '@components': './src/components',
          '@assets': './src/assets',
        },
      },
    ],
  ],
};
