<script setup lang="ts">
import { ref } from 'vue';

// refs
const count = ref(5);

// methods
const create = () => {
  window.parent.postMessage({ pluginMessage: { type: 'create-rectangles', count: count.value } }, '*');
};

const cancel = () => {
  window.parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*');
};
</script>

<template>
  <h2>Rectangle Creator</h2>

  <p>Count: <input id="count" v-model="count" /></p>

  <button id="create" @click="create()">Create</button>
  <button id="cancel" @click="cancel()">Cancel</button>
</template>

<style lang="scss" scoped></style>
