import { Shape } from './Shape';
export class Circle extends Shape {
  private _radius: number;


	constructor(theX: number, theY: number, radius: number) {
    super(theX, theY);
    this._radius = radius;
	}

    /**
     * Getter radius
     * @return {number}
     */
	public get radius(): number {
		return this._radius;
	}

    /**
     * Setter radius
     * @param {number} value
     */
	public set radius(value: number) {
		this._radius = value;
	}

  getInfo(): string {
    return super.getInfo() + `, radus=${this._radius}`;
  }

}