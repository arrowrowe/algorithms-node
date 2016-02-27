const __gcd = (a: number, b: number): number => b % a ? _gcd(a, b - Math.floor(b / a) * a) : a;

const _gcd = (a: number, b: number): number => __gcd.apply(null, a < b ? [a, b] : [b, a]);

export default (a: number, b: number): number => a === 0 ? b : b === 0 ? a : _gcd(Math.abs(a), Math.abs(b));
