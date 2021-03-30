import {firstService} from 'my-awesome-lib';

export function secondService() {
  console.log('second service', firstService());
  return 'second';
}
