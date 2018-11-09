<template>
    <div class="header_search" @click.stop="">
        <input class="header_search_input" type="text" name="" placeholder="Найти рецепты">
        <button>
            <i class="icon-search"></i>
        </button>
    </div>
</template>

<script>
export default {
    name: 'HeaderSearch'
}
</script>

<style lang="sass" scoped>

.header_search
    position: absolute
    z-index: 10
    width: 100%
    padding: 0 20px 0 200px
    top: 21px
    left: 50%
    max-width: 1140px
    min-width: 1000px
    transform: translateX(-50%)

    input[type="text"]
        width: 100%
        height: 48px
        border: none
        border-radius: 24px
        background: #fff
        font-size: 14px
        padding: 0 30px
        outline: none
        color: #353535
        white-space: nowrap
        text-overflow: ellipsis
        overflow: hidden

    button
        display: block
        border-radius: 100%
        cursor: pointer
        transition: background-color ease .2s
        position: absolute
        top: 4px
        right: 24px
        border: none
        background: none
        outline: none
        padding: 0
        color: #615876

        .icon-search
            display: block
            height: 40px
            width: 40px
            line-height: 40px
            text-align: center
            font-size: 20px

        &:hover
            background-color: rgba(50,21,83,.6)
            color: #ffffff
</style>
