import { Service } from 'egg';

/**
 * Test Service
 */
export default class Rule extends Service {

  /**
   * sayHi to you
   * @param name - your name
   */
  public async sayHi(name: string) {
    return `hi, ${name}`;
  }
}
