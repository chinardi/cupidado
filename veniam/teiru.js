// For Vue 2.x
import Vue from 'vue';
const eventBus = new Vue();

// Listen for the 'aria-hidden' event
eventBus.$on('aria-hidden', (isHidden) => {
    console.log(`aria-hidden set to ${isHidden}`);
});

// Emit the 'aria-hidden' event with the value true
eventBus.$emit('aria-hidden', true);
