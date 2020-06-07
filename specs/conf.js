
exports.config = {
  directConnect: true,

  framework: 'jasmine2',

    /* specs: ['EnterandReadValue.js']
     specs: ['ChainLocators.js']
     specs: ['AllMethod.js']
     specs: ['Functions.js']
     specs: ['Calculator.js']*/
    //specs: ['Project1_Form submission.js']
  specs: [
    'Spec.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },
};
