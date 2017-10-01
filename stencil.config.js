exports.config = {
  namespace: 'ame',
  generateDistribution: true,
  generateWWW: true,
  bundles: [
    { components: ['ame-text', 'ame-edit'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
