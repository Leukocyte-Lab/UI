import { beforeEach, describe, expect, it, vi } from 'vitest';

import { useDebounceSignal, useEventDebounceSignal } from '@/shared/libs/event';

describe('useDebounceSignal', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  describe('flush: pre (default)', () => {
    it('should trigger callback immediately on first call', () => {
      const callback = vi.fn();
      const { onTrigger } = useDebounceSignal(callback);

      onTrigger('first');

      expect(callback).toHaveBeenCalledTimes(1);
      expect(callback).toHaveBeenCalledWith('first');
    });

    it('should not trigger callback on subsequent calls within debounce window', () => {
      const callback = vi.fn();
      const { onTrigger } = useDebounceSignal(callback, { debounce: 300 });

      onTrigger('first');
      onTrigger('second');
      onTrigger('third');

      expect(callback).toHaveBeenCalledTimes(1);
      expect(callback).toHaveBeenCalledWith('first');
    });

    it('should set triggered to true after first call', () => {
      const callback = vi.fn();
      const { triggered, onTrigger } = useDebounceSignal(callback);

      expect(triggered()).toBe(false);
      onTrigger('test');
      expect(triggered()).toBe(true);
    });

    it('should reset triggered to false after debounce period', () => {
      const callback = vi.fn();
      const { triggered, onTrigger } = useDebounceSignal(callback, { debounce: 300 });

      onTrigger('test');
      expect(triggered()).toBe(true);

      vi.advanceTimersByTime(300);
      expect(triggered()).toBe(false);
    });

    it('should trigger callback again after debounce period', () => {
      const callback = vi.fn();
      const { onTrigger } = useDebounceSignal(callback, { debounce: 300 });

      onTrigger('first');
      vi.advanceTimersByTime(300);
      onTrigger('second');

      expect(callback).toHaveBeenCalledTimes(2);
      expect(callback).toHaveBeenNthCalledWith(1, 'first');
      expect(callback).toHaveBeenNthCalledWith(2, 'second');
    });

    it('should reset timer on subsequent calls', () => {
      const callback = vi.fn();
      const { triggered, onTrigger } = useDebounceSignal(callback, { debounce: 300 });

      onTrigger('first');
      vi.advanceTimersByTime(100);
      onTrigger('second');
      vi.advanceTimersByTime(100);
      onTrigger('third');

      expect(triggered()).toBe(true);
      vi.advanceTimersByTime(200);
      expect(triggered()).toBe(true);
      vi.advanceTimersByTime(100);
      expect(triggered()).toBe(false);
    });

    it('should handle multiple arguments', () => {
      const callback = vi.fn();
      const { onTrigger } = useDebounceSignal(callback);

      onTrigger('arg1', 'arg2', 'arg3');

      expect(callback).toHaveBeenCalledWith('arg1', 'arg2', 'arg3');
    });
  });

  describe('flush: post', () => {
    it('should not trigger callback immediately', () => {
      const callback = vi.fn();
      const { onTrigger } = useDebounceSignal(callback, { flush: 'post' });

      onTrigger('first');

      expect(callback).not.toHaveBeenCalled();
    });

    it('should trigger callback after debounce period', () => {
      const callback = vi.fn();
      const { onTrigger } = useDebounceSignal(callback, { flush: 'post', debounce: 300 });

      onTrigger('first');
      expect(callback).not.toHaveBeenCalled();

      vi.advanceTimersByTime(300);
      expect(callback).toHaveBeenCalledTimes(1);
      expect(callback).toHaveBeenCalledWith('first');
    });

    it('should use last arguments when multiple calls occur', () => {
      const callback = vi.fn();
      const { onTrigger } = useDebounceSignal(callback, { flush: 'post', debounce: 300 });

      onTrigger('first');
      onTrigger('second');
      onTrigger('third');

      vi.advanceTimersByTime(300);

      expect(callback).toHaveBeenCalledTimes(1);
      expect(callback).toHaveBeenCalledWith('third');
    });

    it('should set triggered to true on call', () => {
      const callback = vi.fn();
      const { triggered, onTrigger } = useDebounceSignal(callback, { flush: 'post' });

      expect(triggered()).toBe(false);
      onTrigger('test');
      expect(triggered()).toBe(true);
    });

    it('should reset triggered to false after callback executes', () => {
      const callback = vi.fn();
      const { triggered, onTrigger } = useDebounceSignal(callback, { flush: 'post', debounce: 300 });

      onTrigger('test');
      expect(triggered()).toBe(true);

      vi.advanceTimersByTime(300);
      expect(triggered()).toBe(false);
    });
  });

  describe('flush: sync', () => {
    describe('syncWithDebounce: false (default)', () => {
      it('should trigger callback on every call immediately', () => {
        const callback = vi.fn();
        const { onTrigger } = useDebounceSignal(callback, { flush: 'sync' });

        onTrigger('first');
        onTrigger('second');
        onTrigger('third');

        expect(callback).toHaveBeenCalledTimes(3);
        expect(callback).toHaveBeenNthCalledWith(1, 'first');
        expect(callback).toHaveBeenNthCalledWith(2, 'second');
        expect(callback).toHaveBeenNthCalledWith(3, 'third');
      });

      it('should not debounce when syncWithDebounce is false', () => {
        const callback = vi.fn();
        const { onTrigger } = useDebounceSignal(callback, { flush: 'sync', debounce: 300 });

        onTrigger('first');
        vi.advanceTimersByTime(100);
        onTrigger('second');

        expect(callback).toHaveBeenCalledTimes(2);
      });

      it('should not schedule debounce callback when syncWithDebounce is false', () => {
        const callback = vi.fn();
        const { onTrigger } = useDebounceSignal(callback, { flush: 'sync', debounce: 300 });

        onTrigger('first');
        onTrigger('second');

        expect(callback).toHaveBeenCalledTimes(2);

        vi.advanceTimersByTime(300);

        // Should still be 2 calls, as sync without syncWithDebounce returns early
        expect(callback).toHaveBeenCalledTimes(2);
      });
    });

    describe('syncWithDebounce: true', () => {
      it('should trigger callback immediately on first call', () => {
        const callback = vi.fn();
        const { onTrigger } = useDebounceSignal(callback, { flush: 'sync', syncWithDebounce: true });

        onTrigger('first');

        expect(callback).toHaveBeenCalledTimes(1);
        expect(callback).toHaveBeenCalledWith('first');
      });

      it('should queue subsequent calls within debounce window', () => {
        const callback = vi.fn();
        const { onTrigger } = useDebounceSignal(callback, {
          flush: 'sync',
          syncWithDebounce: true,
          debounce: 300
        });

        onTrigger('first');
        onTrigger('second');
        onTrigger('third');

        expect(callback).toHaveBeenCalledTimes(1);
        expect(callback).toHaveBeenCalledWith('first');
      });

      it('should execute last queued call after debounce period', () => {
        const callback = vi.fn();
        const { onTrigger } = useDebounceSignal(callback, {
          flush: 'sync',
          syncWithDebounce: true,
          debounce: 300
        });

        onTrigger('first');
        onTrigger('second');
        onTrigger('third');

        vi.advanceTimersByTime(300);

        expect(callback).toHaveBeenCalledTimes(2);
        expect(callback).toHaveBeenNthCalledWith(1, 'first');
        expect(callback).toHaveBeenNthCalledWith(2, 'third');
      });

      it('should start new debounce window after pending call executes', () => {
        const callback = vi.fn();
        const { onTrigger, triggered } = useDebounceSignal(callback, {
          flush: 'sync',
          syncWithDebounce: true,
          debounce: 300
        });

        onTrigger('first');
        expect(triggered()).toBe(true);

        onTrigger('second');

        vi.advanceTimersByTime(300);
        expect(callback).toHaveBeenCalledTimes(2);
        expect(triggered()).toBe(true);

        vi.advanceTimersByTime(300);
        expect(triggered()).toBe(false);
      });

      it('should only keep last pending call if multiple occur', () => {
        const callback = vi.fn();
        const { onTrigger } = useDebounceSignal(callback, {
          flush: 'sync',
          syncWithDebounce: true,
          debounce: 300
        });

        onTrigger('first');
        onTrigger('second');
        onTrigger('third');
        onTrigger('fourth');

        vi.advanceTimersByTime(300);

        expect(callback).toHaveBeenCalledTimes(2);
        expect(callback).toHaveBeenNthCalledWith(2, 'fourth');
      });

      it('should handle rapid calls correctly', () => {
        const callback = vi.fn();
        const { onTrigger } = useDebounceSignal(callback, {
          flush: 'sync',
          syncWithDebounce: true,
          debounce: 100
        });

        onTrigger('first');
        vi.advanceTimersByTime(50);
        onTrigger('second');
        vi.advanceTimersByTime(100);
        onTrigger('third');
        vi.advanceTimersByTime(100);

        expect(callback).toHaveBeenCalledTimes(3);
        expect(callback).toHaveBeenNthCalledWith(1, 'first');
        expect(callback).toHaveBeenNthCalledWith(2, 'second');
        expect(callback).toHaveBeenNthCalledWith(3, 'third');
      });
    });
  });

  describe('custom debounce duration', () => {
    it('should respect custom debounce value', () => {
      const callback = vi.fn();
      const { triggered, onTrigger } = useDebounceSignal(callback, { debounce: 500 });

      onTrigger('test');
      expect(triggered()).toBe(true);

      vi.advanceTimersByTime(400);
      expect(triggered()).toBe(true);

      vi.advanceTimersByTime(100);
      expect(triggered()).toBe(false);
    });

    it('should work with very short debounce', () => {
      const callback = vi.fn();
      const { triggered, onTrigger } = useDebounceSignal(callback, { debounce: 10 });

      onTrigger('test');
      expect(triggered()).toBe(true);

      vi.advanceTimersByTime(10);
      expect(triggered()).toBe(false);
    });
  });

  describe('without callback', () => {
    it('should work without callback function', () => {
      const { triggered, onTrigger } = useDebounceSignal(undefined, { debounce: 300 });

      expect(() => onTrigger('test')).not.toThrow();
      expect(triggered()).toBe(true);

      vi.advanceTimersByTime(300);
      expect(triggered()).toBe(false);
    });

    it('should maintain triggered state without callback on flush post', () => {
      const { triggered, onTrigger } = useDebounceSignal(undefined, { flush: 'post', debounce: 300 });

      onTrigger('test');
      expect(triggered()).toBe(true);

      vi.advanceTimersByTime(300);
      expect(triggered()).toBe(false);
    });
  });
});

describe('useEventDebounceSignal', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  const createMockEvent = (): Event => {
    const event = new Event('click');
    vi.spyOn(event, 'preventDefault');
    vi.spyOn(event, 'stopPropagation');
    return event;
  };

  describe('flush: pre (default)', () => {
    it('should trigger callback immediately on first event', () => {
      const callback = vi.fn();
      const { onTrigger } = useEventDebounceSignal(callback);
      const event = createMockEvent();

      onTrigger(event);

      expect(callback).toHaveBeenCalledTimes(1);
      expect(callback).toHaveBeenCalledWith(event);
    });

    it('should not call preventDefault or stopPropagation on pre flush', () => {
      const callback = vi.fn();
      const { onTrigger } = useEventDebounceSignal(callback, { flush: 'pre' });
      const event = createMockEvent();

      onTrigger(event);

      expect(event.preventDefault).not.toHaveBeenCalled();
      expect(event.stopPropagation).not.toHaveBeenCalled();
    });

    it('should debounce subsequent events', () => {
      const callback = vi.fn();
      const { onTrigger } = useEventDebounceSignal(callback, { debounce: 300 });

      onTrigger(createMockEvent());
      onTrigger(createMockEvent());
      onTrigger(createMockEvent());

      expect(callback).toHaveBeenCalledTimes(1);
    });

    it('should set triggered state', () => {
      const callback = vi.fn();
      const { triggered, onTrigger } = useEventDebounceSignal(callback);

      expect(triggered()).toBe(false);
      onTrigger(createMockEvent());
      expect(triggered()).toBe(true);
    });

    it('should reset triggered after debounce period', () => {
      const callback = vi.fn();
      const { triggered, onTrigger } = useEventDebounceSignal(callback, { debounce: 300 });

      onTrigger(createMockEvent());
      expect(triggered()).toBe(true);

      vi.advanceTimersByTime(300);
      expect(triggered()).toBe(false);
    });
  });

  describe('flush: post', () => {
    it('should call preventDefault and stopPropagation on post flush', () => {
      const callback = vi.fn();
      const { onTrigger } = useEventDebounceSignal(callback, { flush: 'post' });
      const event = createMockEvent();

      onTrigger(event);

      expect(event.preventDefault).toHaveBeenCalled();
      expect(event.stopPropagation).toHaveBeenCalled();
    });

    it('should not trigger callback immediately', () => {
      const callback = vi.fn();
      const { onTrigger } = useEventDebounceSignal(callback, { flush: 'post' });

      onTrigger(createMockEvent());

      expect(callback).not.toHaveBeenCalled();
    });

    it('should trigger callback after debounce period', () => {
      const callback = vi.fn();
      const { onTrigger } = useEventDebounceSignal(callback, { flush: 'post', debounce: 300 });
      const event = createMockEvent();

      onTrigger(event);

      vi.advanceTimersByTime(300);

      expect(callback).toHaveBeenCalledTimes(1);
      expect(callback).toHaveBeenCalledWith(event);
    });

    it('should use last event when multiple events occur', () => {
      const callback = vi.fn();
      const { onTrigger } = useEventDebounceSignal(callback, { flush: 'post', debounce: 300 });

      const event1 = createMockEvent();
      const event2 = createMockEvent();
      const event3 = createMockEvent();

      onTrigger(event1);
      onTrigger(event2);
      onTrigger(event3);

      vi.advanceTimersByTime(300);

      expect(callback).toHaveBeenCalledTimes(1);
      expect(callback).toHaveBeenCalledWith(event3);
    });
  });

  describe('flush: sync', () => {
    it('should not call preventDefault or stopPropagation on sync flush', () => {
      const callback = vi.fn();
      const { onTrigger } = useEventDebounceSignal(callback, { flush: 'sync' });
      const event = createMockEvent();

      onTrigger(event);

      expect(event.preventDefault).not.toHaveBeenCalled();
      expect(event.stopPropagation).not.toHaveBeenCalled();
    });

    it('should work with syncWithDebounce option', () => {
      const callback = vi.fn();
      const { onTrigger } = useEventDebounceSignal(callback, {
        flush: 'sync',
        syncWithDebounce: true,
        debounce: 300
      });

      const event1 = createMockEvent();
      const event2 = createMockEvent();

      onTrigger(event1);
      onTrigger(event2);

      expect(callback).toHaveBeenCalledTimes(1);
      expect(callback).toHaveBeenCalledWith(event1);

      vi.advanceTimersByTime(300);

      expect(callback).toHaveBeenCalledTimes(2);
      expect(callback).toHaveBeenCalledWith(event2);
    });
  });

  describe('custom debounce duration', () => {
    it('should respect custom debounce value', () => {
      const callback = vi.fn();
      const { triggered, onTrigger } = useEventDebounceSignal(callback, { debounce: 500 });

      onTrigger(createMockEvent());
      expect(triggered()).toBe(true);

      vi.advanceTimersByTime(400);
      expect(triggered()).toBe(true);

      vi.advanceTimersByTime(100);
      expect(triggered()).toBe(false);
    });
  });

  describe('without callback', () => {
    it('should work without callback function', () => {
      const { triggered, onTrigger } = useEventDebounceSignal(undefined, { debounce: 300 });

      expect(() => onTrigger(createMockEvent())).not.toThrow();
      expect(triggered()).toBe(true);

      vi.advanceTimersByTime(300);
      expect(triggered()).toBe(false);
    });

    it('should still call preventDefault/stopPropagation on post flush without callback', () => {
      const { onTrigger } = useEventDebounceSignal(undefined, { flush: 'post' });
      const event = createMockEvent();

      onTrigger(event);

      expect(event.preventDefault).toHaveBeenCalled();
      expect(event.stopPropagation).toHaveBeenCalled();
    });
  });

  describe('edge cases', () => {
    it('should handle MouseEvent', () => {
      const callback = vi.fn();
      const { onTrigger } = useEventDebounceSignal<MouseEvent>(callback);
      const event = new MouseEvent('click');
      vi.spyOn(event, 'preventDefault');

      onTrigger(event);

      expect(callback).toHaveBeenCalledWith(event);
    });

    it('should handle KeyboardEvent', () => {
      const callback = vi.fn();
      const { onTrigger } = useEventDebounceSignal<KeyboardEvent>(callback);
      const event = new KeyboardEvent('keydown');

      onTrigger(event);

      expect(callback).toHaveBeenCalledWith(event);
    });

    it('should handle rapid event firing', () => {
      const callback = vi.fn();
      const { onTrigger } = useEventDebounceSignal(callback, { debounce: 100 });

      for (let i = 0; i < 10; i++) {
        onTrigger(createMockEvent());
        vi.advanceTimersByTime(50);
      }

      expect(callback).toHaveBeenCalledTimes(1);
    });
  });
});
