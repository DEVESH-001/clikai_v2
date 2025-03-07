export interface RateLimitConfig {
  limit: number;
  windowMs: number;
}

export class RateLimiter {
  private cache: Map<string, { count: number; resetTime: number }>;
  private config: RateLimitConfig;

  constructor(config: RateLimitConfig) {
    this.cache = new Map();
    this.config = config;
  }

  check(key: string): {
    success: boolean;
    limit: number;
    remaining: number;
    resetTime: number;
  } {
    const now = Date.now();
    const record = this.cache.get(key) || {
      count: 0,
      resetTime: now + this.config.windowMs,
    };

    // Reset if the window has passed
    if (now > record.resetTime) {
      record.count = 0;
      record.resetTime = now + this.config.windowMs;
    }

    // Increment count
    record.count += 1;
    this.cache.set(key, record);

    const remaining = Math.max(0, this.config.limit - record.count);
    const success = record.count <= this.config.limit;

    return {
      success,
      limit: this.config.limit,
      remaining,
      resetTime: record.resetTime,
    };
  }
}

// Create a singleton instance for file uploads
export const uploadRateLimiter = new RateLimiter({
  limit: 10, // 10 requests
  windowMs: 60 * 60 * 1000, // per hour
});
