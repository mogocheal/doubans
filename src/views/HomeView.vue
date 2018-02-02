<template>
  <div class="home-view has-header">
    <sub-nav mold="quickNav"></sub-nav>
    <list mold="thumbnail" :items="events"></list>
    <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">
      <loading slot="spinner"></loading>
    </infinite-loading>
  </div>
</template>
<script>
  import { mapState, mapActions } from 'vuex'
  import InfiniteLoading from 'vue-infinite-loading'

  export default{
    name: 'home-view',
    components: {},
    data(){
      return {}
    },
    computed: {
      ...mapState({
        events: state => state.activities.events
      })
    },
    methods: {
      // Using vue-infinite-loading
      onInfinite () {
        setTimeout(() => {
          this.loadMore()
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
        }, 1000)
      },
      // Dispatching Actions
      ...mapActions([
        'loadMore'
      ])
    }
  }
</script>
