exports.config = {
  namespace: 'ame',
  generateDistribution: true,
  generateWWW: true,
  bundles: [
    { components: ['ame-text', 'ame-edit', 'ame-revert'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
