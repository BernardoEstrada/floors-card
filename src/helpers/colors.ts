export class Color {
  r: number;
  g: number;
  b: number;

  constructor(r: number, g: number, b: number) {
    this.r = r;
    this.g = g;
    this.b = b;
  }

  static fromRGB(r: number, g: number, b: number): Color {
    return new Color(r, g, b);
  }

  static fromRGBString(rgb: string): Color | undefined {
    if(!rgb.match(/^(rgb)?[\(\[]?(\d{1,3}([ ,]){0,2}){3}[\)\]]?/)) return undefined;
    const [r, g, b] = rgb.match(/\d{1,3}/g)!.map((c) => parseInt(c));
    return new Color(r, g, b);
  }

  static fromHex(hex: string): Color | undefined {
    if (!hex.match(/^#?([0-9a-fA-F]{3}){1,2}$/)) return undefined;
    if (hex.startsWith('#')) hex = hex.substring(1);
    if (hex.length === 3) hex = hex.split('').map((c) => c + c).join('');
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result || result.length < 4) return undefined;
    return new Color(
      parseInt(result[1], 16),
      parseInt(result[2], 16),
      parseInt(result[3], 16)
    );
  }

  static fromHassProperty(element: HTMLElement, color: string): Color | undefined {
    const computedColor = getComputedStyle(element).getPropertyValue(`--${color}-color`).trim();
    if (!computedColor) return undefined;
    return Color.fromString(computedColor);
  }

  static fromString(color: string): Color | undefined {
    return Color.fromHex(color) || Color.fromRGBString(color);
  }

  toRGB(): string {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  }

  toRGBA(a: number | undefined = 0.5): string {
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${a})`;
  }

  toHex(): string {
    return `#${this.r.toString(16).padStart(2, '0')}${this.g.toString(16).padStart(2, '0')}${this.b.toString(16).padStart(2, '0')}`;
  }
}