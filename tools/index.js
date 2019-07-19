const fs = require('fs');
const path = require('path');
const gatherLintRules = require('./gatherLintRules');
const rulesPath = path.join(__dirname, '../lib/rules');
const { fsEmitter } = require('./emitter');

module.exports = {
  // update rules
  update: () => {
    try {
      console.log('start... update rules\n');
      fs.mkdir(rulesPath, (err) => {
        if (!err) {
          console.log('updating... mkdir rules success!');
        }
        // pack up rules into lib/rules
        gatherLintRules();
        
        fsEmitter.once('finish', () => {
          console.log('end... update success!');
        });
      });
    } catch (err) {
      console.log('wrong... update rules', err);
    }
  }
};