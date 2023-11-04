import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

// <> means required...
// [] means not compulsory...
yargs(hideBin(process.argv))
//   .command('curl <url>', 'fetch the contents of the URL', () => {}, (argv) => {
//     console.info(argv)
//   })
  .command('new <note>', 'Create a new Note', yargs => {
    return yargs.positional('note',{
        type: 'string',
        description: 'The content of the note to create'
    })
  }, (argv) => {
    console.log('Hello', argv.note)
  })
  .demandCommand(1)
  .parse()