import { BigInteger as BigInt } from 'jsbn';

/**
 * Stores a value which was decrypted by the ElGamal algorithm.
 */
export default class DecryptedValue {
  /**
   * Decrypted message stored as a BigInt.
   */
  bi: BigInt;

  constructor(m: string | number | Buffer | bigint) {
    switch (typeof m) {
      case 'string':
        this.bi = new BigInt(new Buffer(m).toString('hex'), 16);
        break;
      case 'number':
        this.bi = new BigInt(`${m}`);
        break;
      case 'bigint':
        this.bi = new BigInt(m.toString());
        break;
      case 'object':
      default:
        this.bi = new BigInt(m.toString('hex'), 16)
    }
  }

  toString() {
    return new Buffer(this.bi.toByteArray()).toString();
  }
}