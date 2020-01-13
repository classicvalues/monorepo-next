'use strict';

const attach = require('../../src/attach');
const postRun = require('../../src/post-run');

module.exports = {
  command: 'attach [package]',
  aliases: ['a'],
  describe: 'attach a package to a detached package to resume normal linking',
  async handler(argv) {
    let cwd = process.cwd();

    try {
      await attach({
        ...argv,
        cwd,
      });

      await postRun({
        cwd,
      });
    } catch (err) {
      console.error(err);
    }
  },
};
