type Queue<K> = [K, number][];

export default class CustomCache<K, V> {
  private cache: Map<K, V> = new Map();

  private queue: Queue<K> = [];

  private maxSize: number;

  constructor(maxSize: number) {
    this.maxSize = maxSize;
  }

  set(key: K, value: V): void {
    if (this.cache.has(key)) {
      this.cache.set(key, value);
    } else {
      if (this.cache.size === this.maxSize) {
        if (this.queue[0] !== undefined) {
          this.cache.delete(this.queue[0][0]);
          this.queue.shift();
        }
      }
      this.queue.push([key, 0]);
      this.cache.set(key, value);
    }
  }

  get(key: K): V | undefined {
    if (this.cache.has(key)) {
      const item = this.queue.find(el => el[0] === key);
      if (item !== undefined) {
        item[1] += 1;
      }
      this.queue.sort((a, b) => a[1] - b[1]);
      return this.cache.get(key);
    }
    return undefined;
  }

  size(): number {
    return this.cache.size;
  }

  clear(): void {
    this.cache.clear();
  }
}
