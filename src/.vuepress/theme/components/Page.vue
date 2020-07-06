<template>
  <main>
    <slot name="top" />

    <Content />

    <slot name="bottom" />
  </main>
</template>

<script>
export default {
  props: ['sidebarItems'],
}
</script>
