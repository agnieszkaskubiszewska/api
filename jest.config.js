
module.exports = {
  
    reporters: [
      'default',
      process.env.GITHUB_ACTIONS === 'true'
        ? ['jest-html-reporter', { outputPath: 'test-report.html' }]
        : null, 
    ].filter(Boolean),
  };
  