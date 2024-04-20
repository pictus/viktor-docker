import { DockerComposeInteract } from "./interact.js";



// export class DockerCli extends CliSetup {
//     title = 'd [option]';
//     description = 'interact with docker';

//     handler(args) {
//         if(!args.option) {
//             console.warn('no option set, use `up`, `down`, `exec`');
//         }
//         if(args.option === 'up') { new DockerComposeInteract().up(args);}
//         if(args.option === 'down') { new DockerComposeInteract().down(args);}
//         if(args.option === 'exec') { 
//             args._.shift();
//             new DockerComposeInteract().exec(args._.join(' '));
//         }
//     }
// }