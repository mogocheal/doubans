<template>
  <div class="pages-view">
    <HeaderBar></HeaderBar>
    <TalionView></TalionView>
  </div>
</template>

<script>
  import HeaderBar from '../components/HeaderBar'
  import TalionView from '../components/TalionView'
  export default{
    name: 'pages-view',
    components: {HeaderBar, TalionView},
    data(){
      return {}
    },
    methods: {}

  }
</script>
