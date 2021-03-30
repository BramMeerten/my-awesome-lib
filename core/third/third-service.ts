import {secondService} from 'my-awesome-lib/second';

export function thirdService() {
  secondService();
  console.log('third service');
}
