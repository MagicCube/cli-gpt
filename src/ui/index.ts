import { Command, ux } from '@oclif/core';

import { generatePromptMessages } from '../prompt';
import { translate } from '../translation';
import type { CommandLine } from '../types';

export default class DefaultCommand extends Command {
  static strict = false;

  async run(): Promise<void> {
    const userInput = this.argv.join(' ');
    generatePromptMessages(userInput);
    let command: CommandLine;
    try {
      ux.action.start('Translating your words into command line...');
      command = await translate(userInput);
      ux.action.stop();
      this.log(`\x1b[34m\n${command.content}\n\x1b[0m`);
      if (command.isDangerous) {
        ux.log('\x1b[41m CAUTION \x1b[0m\x1b[31m This command is dangerous!\x1b[0m');
      }
    } catch (e) {
      ux.action.stop('Error');
      ux.error(e instanceof Error ? e.message : 'Unknown error', { exit: 500 });
    }
  }
}
