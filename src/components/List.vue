<template>
  <div>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
</template>
<script>
  export default{
    name: 'list',
    props: {
      mold: {
        type: String,
        default: 'basic'
      },
      items: {
        type: Array,
        required: false,
      }
    },
    data(){
      return {}
    }
  }
</script>
