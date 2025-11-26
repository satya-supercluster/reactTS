        /**
         * Problem 24: Type-Safe Event Emitter
         *
         * Description:
         * Create a simple typed EventEmitter using generics where:
- You define a map of event names to payload types
- on(event, handler) and emit(event, payload) are fully type-safe.
Demonstrate with 'user:login' and 'user:logout' events.
         *
         * Sample Input:
         * emitter.on('user:login', (payload) => ...)
         *
         * Sample Output:
         * Handler receives the correct payload shape based on event name.
         */
