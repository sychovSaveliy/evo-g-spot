<template>
    <span class="button" :class="classList" v-on:click="click($event)">
        <slot></slot>
    </span>
</template>

<script>
export default {
    name: 'button',
    props: {
        title: String,
        onClick: Function,
        classList: Object
    },
    methods:{
        click($event){
            if(this.onClick){
                this.onClick($event)
            }
        }
    }
}
</script>

<style lang="sass" scoped>
.button
    display: inline-block
    border: none
    margin: 0 15px 0 0
    font: 500 12px/18px 'muller', sans-serif
    padding: 11px 30px
    text-decoration: none
    background: #edeefa
    color: #9589b0
    cursor: pointer
    border-radius: 20px
    text-transform: uppercase
    outline: none
    text-align: center
    vertical-align: middle

    &.primary
        color: #ffffff
        background: rgb(125,95,158)
        background: linear-gradient(to right, rgba(125,95,158,1) 0%,rgba(89,100,156,1) 100%)
        box-shadow: 0 5px 20px rgba(50,21,83,.2)
        transition: box-shadow ease .2s

        &:hover
            box-shadow: 0 5px 20px rgba(50,21,83,.2), 0 0 0 8px rgba(50,21,83,.2)
    
</style>
