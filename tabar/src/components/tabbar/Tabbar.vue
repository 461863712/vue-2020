<template>
  <div>
    <div id="tab-bar">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tabbar"
  }
</script>

<style scoped>
  #tab-bar{
    display: flex;
    background-color: #f9f9f9;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 -1px 1px rgba(206, 206, 206, 0.8);
  }
</style>
