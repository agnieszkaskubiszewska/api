
module.exports = {
  
    reporters: [
      'default',
      process.env.GITHUB_ACTIONS === 'true'
        ? ['jest-html-reporter', { outputPath: 'test-reports/test-report.html' }]
        : null, 
    ].filter(Boolean),
  };
  