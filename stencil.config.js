exports.config = {
  namespace: 'ame',
  generateDistribution: true,
  generateWWW: true,
  bundles: [
    { components: ['ame-text', 'ame-edit', 'ame-rich-text'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
