<template>
  <div id="app">
    <router-view/>
    <popup
      v-bind:active="isPopupShow"
      v-bind:title="title"
      v-bind:btnText="'Action'"
      v-bind:callback="popupCallback"
    >
    </popup>
  </div>
</template>

<script>
  import popup from '@/components/common/popup';

export default {
  name: 'App',
  components:{
    popup
  },
  data(){
    return {
      isPopupShow: true,
      title: 'Message'
    }
  },
  methods: {
    popupCallback(){
      console.log('action');
    }
  }
}
</script>

<style>

</style>
