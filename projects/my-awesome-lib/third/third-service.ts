import {secondService} from 'my-awesome-lib/awesome';

export function thirdService() {
  console.log('third service', secondService());
  return 'second';
}
