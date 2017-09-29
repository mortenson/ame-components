exports.config = {
  namespace: 'ame',
  generateDistribution: true,
  generateWWW: true,
  bundles: [
    { components: ['ame-text'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
