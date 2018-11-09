<template>
    <div class="header_catalog">
        <div class="header_catalog_tabs">
            <span class="active">По категориям</span>
            <span>По приемам пищи</span>
        </div>
        <ul class="header_subnav">
            <li class="header_subnav_item" v-for="item in menuList">
                <a :href="item.groupPath">
                    <img :src="item.groupImgSrc" :alt="item.groupName">
                    <span>{{item.groupName}}</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HeaderDropdown',
    data: function(){
        return {
            menuList: [
                {
                    'groupName': 'Вегетарианское меню',
                    'groupImgSrc' : '/static/img/img-mock.png',
                    'groupPath' : '#'
                },
                {
                    'groupName': 'Для детей',
                    'groupImgSrc' : '/static/img/img-mock.png',
                    'groupPath' : '#'
                },
                {
                    'groupName': 'Низкокалорийное',
                    'groupImgSrc' : '/static/img/img-mock.png',
                    'groupPath' : '#'
                },
                {
                    'groupName': 'Постное меню',
                    'groupImgSrc' : '/static/img/img-mock.png',
                    'groupPath' : '#'
                },
                {
                    'groupName': 'Для диабетиков',
                    'groupImgSrc' : '/static/img/img-mock.png',
                    'groupPath' : '#'
                },
            ]
        }
    }
}
</script>

<style lang="sass" scoped>
.header_catalog
    text-align: left
    padding: 30px 0 70px
    position: absolute
    left: 0
    top: 100%
    width: 100%
    background-color: rgba(255,255,255,.95)
    color: #353535

    .header_catalog_tabs
        min-width: 1000px
        max-width: 1140px
        padding: 0 20px
        margin: 0 auto 40px
        position: relative
        font-size: 0

        &::after
            content: ''
            display: block
            position: absolute
            height: 1px
            left: 20px
            right: 20px
            bottom: 0
            background: #edeefa

        span
            display: inline-block
            padding: 14px 30px
            text-transform: uppercase
            font-size: 13px
            line-height: 18px
            font-weight: 700
            position: relative
            z-index: 10
            cursor: pointer
            transition: box-shadow ease .2s
            color: #b5b3be

            &.active
                color: #615876
                box-shadow: inset 0 -2px 0 0 #615876

            &:hover:not(.active)
                box-shadow: inset 0 -2px 0 0 #cecdd5

    .header_subnav
        display: flex
        flex-direction: row
        min-width: 1000px
        max-width: 1140px
        padding: 0 20px
        margin: 0 auto
        list-style: none

    .header_subnav_item
        max-width: 160px
        margin: 0 60px 0 0
        text-align: center
        list-style: none

        a
            color: #353535
            display: block
            padding: 0
            text-transform: none
            font-weight: 400
            text-decoration: none

        img
            display: block
            width: 128px
            margin: 0 auto 15px

        span
            display: block
            font-size: 15px
            line-height: 17px
            color: #615876
</style>
