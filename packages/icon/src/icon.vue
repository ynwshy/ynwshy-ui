<template>
  <i :class="'el-icon-' + name"></i>
</template>

<script>
  export default {
    name: 'HyIcon',

    props: {
      name: String
    }
  };
</script>
