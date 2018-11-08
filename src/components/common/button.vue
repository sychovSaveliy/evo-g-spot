<template>
    <span class="button" :class="classList" v-on:click="click($event)">
        <slot></slot>
    </span>
</template>

<script>
export default {
    name: 'app-button',
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

    &.secondary
        background: none
        box-shadow: inset 0 0 0 2px #9589b0
        transition: color ease .2s

        &:hover
            background: linear-gradient(to right, rgba(125,95,158,1) 0%,rgba(89,100,156,1) 100%)
            box-shadow: none
            color: #fff

        &.light
            box-shadow: inset 0 0 0 2px #fff
            color: #fff

            &:hover
                background: rgba(255,255,255,.95)
                color: #9589b0

    &.button__lg
        font: 500 13px/20px 'muller', sans-serif
        padding: 20px 60px
        border-radius: 30px

    &.button__md
        padding: 16px 50px
        border-radius: 25px
    
</style>
