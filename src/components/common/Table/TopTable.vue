<template>
  <div class="top-table">
    <slot />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.top-table {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}
</style>
