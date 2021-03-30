import {firstService} from 'my-awesome-lib';

export function secondService() {
  firstService();
  console.log('second service');
}
