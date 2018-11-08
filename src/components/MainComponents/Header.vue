<template>
    <header> 
    <!-- <header class="menu-active"></header> -->
        <div class="container header_container">
            <div class="header_left">
                <img :src="'/static/img/logo.svg'" alt="G-Spot" width="146">
            </div>
            <nav class="header_middle">
                <ul class="nav">
                    <li><a href="#" class="current">Рецепты</a></li>
                    <li><a href="#">О проекте</a></li>
                    <li><a href="#">Блог</a></li>
                    <li><a href="#">Контакты</a></li>
                </ul>
                
                <div class="header_catalog">
                    <div class="header_catalog_tabs">
                        <span class="active">По категориям</span>
                        <span>По приемам пищи</span>
                    </div>
                    <ul class="header_subnav">
                        <!-- <li class="header_subnav_item">
                            <a href="#">
                                <img src="../../img/img-mock.png" alt="Вегетарианское меню">
                                <span>Вегетарианское меню</span>
                            </a>
                        </li>
                        <li class="header_subnav_item">
                            <a href="#">
                                <img src="../../img/img-mock.png" alt="Для детей">
                                <span>Для детей</span>
                            </a>
                        </li>
                        <li class="header_subnav_item">
                            <a href="#">
                                <img src="../../img/img-mock.png" alt="Низкокалорийное">
                                <span>Низкокалорийное</span>
                            </a>
                        </li>
                        <li class="header_subnav_item">
                            <a href="#">
                                <img src="../../img/img-mock.png" alt="Постное меню">
                                <span>Постное меню</span>
                            </a>
                        </li>
                        <li class="header_subnav_item">
                            <a href="#">
                                <img src="../../img/img-mock.png" alt="Для диабетиков">
                                <span>Для диабетиков</span>
                            </a>
                        </li> -->
                    </ul>
                </div>

            </nav>
            <div class="header_right">
                <app-button :classList="{ primary: true }">Создать меню</app-button>
				<app-button :classList="{ secondary: true, 'light': true }">Вход</app-button>
                <span class="search_btn icon-search"></span>
            </div>
            <div class="header_search">
                <input type="text" name="" placeholder="Найти рецепты">
                <button>
                    <i class="icon-search"></i>
                </button>
            </div>
        </div>
    </header>
</template>


<script>
import Button from '../common/button';

export default {
	name: 'mainHeader',
	components: {
		'app-button': Button
	}
}
</script>

<style lang="sass" scoped>

header
	padding: 25px 0
	width: 100%

	.header_container
		display: flex
		align-items: center
		width: 100%
		position: relative

	.header_left
		margin: 0 auto 0 0

		img
			display: block

	.header_middle
		
		.nav
			display: flex
			margin: 0
			padding: 0
			list-style: none

		li
			list-style: none

		a
			display: block
			font-size: 12px
			text-transform: uppercase
			text-decoration: none
			padding: 10px 20px
			line-height: 20px
			font-weight: 500

	.header_right
		margin-left: 20px

		.btn
			margin: 0 0 0 10px

			&:first-child
				margin: 0

		.btn__color-transparent
			box-shadow: inset 0 0 0 2px #ffffff
			color: #ffffff

		.search_btn
			display: inline-block
			margin: 0 0 0 10px
			width: 40px
			height: 40px
			border-radius: 100%
			line-height: 40px
			text-align: center
			font-size: 20px
			vertical-align: middle
			cursor: pointer
			transition: background-color ease .2s

			&:hover
				background-color: rgba(50,21,83,.3)

	.header_search
		position: absolute
		z-index: 10
		width: 100%
		padding: 0 0 0 320px
		top: -4px
		right: 16px
		display: none

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
			right: 4px
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

	&.menu-active
		background-color: #5c556b
		position: relative

		.header_container
			position: static

		.header_catalog
			display: block

	.header_catalog
		text-align: left
		padding: 30px 0 70px
		position: absolute
		left: 0
		top: 100%
		width: 100%
		background-color: rgba(255,255,255,.95)
		color: #353535
		display: none

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

		.header_subnav_item
			max-width: 160px
			margin: 0 60px 0 0
			text-align: center

			a
				color: #353535
				display: block
				padding: 0
				text-transform: none
				font-weight: 400

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
