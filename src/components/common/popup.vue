<template>
  <div id="popup__template">
    <div class="popup" v-show="active" >
      <div class="popup__overlay" @click="close()">
        <div class="popup__content">
          <div class="popup__body" v-bind:class="getPopupClass(param)">
            <slot></slot>
          </div>
          <div class="popup__footer">
            <button class="btn" @click="onCancel()">{{ btnText }}</button>
          </div>
        </div>
      </div>
    </div>
    <a href="#" class="link" @click="open()">some-href</a>
  </div>
</template>

<script>
export default {
    props: ['btnText'],
    data: function(){
        return {
            active: false
        }
    },
    methods: {
        open: function() {
            this.active = true
        },
        close: function() {
            this.active = false
        },
        onCancel: function() {
            this.close()
        },
        getPopupClass: function(param) {
            return param || 'info'
        }
    }
}
</script>

<style>
    .error {
        color:red
    }

    .info {
        color: rgb(27, 5, 150)
    }

    .success {
        color: green;
    }
</style>