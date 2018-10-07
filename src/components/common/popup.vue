<template>
    <div class="popup-box" v-show="activeProp">
      <div class="popup" v-bind:style="classList">
        <div class="popup__overlay">
          <div class="popup__body">
            <header class="popup__title">
              {{ title || defaultTitle}}
            </header>
            <slot></slot>
          </div>
          <div class="popup__footer">
            <span class="popup__close-btn" @click="close()">
              Close
            </span>
            <span class="popup__action-btn" @click="action()">
              {{ btnTitle }}
            </span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    props: ['btnText', 'active', 'classList', 'callback', 'title'],
    data: function(){
        return {
            activeProp: this.active || false,
            defaultTitle: 'Default title'
        }
    },
    methods: {
        action: function() {
          this.callback();
        },
        close: function() {
            this.activeProp = false
        }
    },
  computed: {
      btnTitle() {
        return this.btnText || 'Ok';
      }
  }
}
</script>

<style lang="scss">
    * {
      box-sizing: border-box;
    }

    $popup-width: 350px;

    .popup-box {
      content: '';
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.65);
    }

    .popup {
      position: fixed;
      background-color: #e2e2e2;
      left: calc(50% - #{$popup-width}/2);
      top:  20%;
      width: $popup-width;
      min-height: 150px;
      padding: 20px;
      border-radius: 20px;
      max-height: 450px;
      overflow-y: auto;

      &__overlay {
        display: flex;
        flex-direction: column;

        height: 100%;

        justify-content: flex-end;
      }

      &__body {
        height: 100%;
      }

      &__title {
        font-size: 24px;
        font-weight: bold;
      }

      &__footer {
        position: absolute;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 8px;
      }

      &__close-btn,
      &__action-btn {
        cursor: pointer;
        margin: 0 12px;
      }
    }

    .error {
        color:red;
    }

    .info {
        color: rgb(27, 5, 150);
    }

    .success {
        color: green;
    }
</style>
