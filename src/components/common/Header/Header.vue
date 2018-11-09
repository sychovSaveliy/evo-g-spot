<template>
    <header ref="headerWrapper"> 
        <div class="container header_container">
            <div class="header_left">
                <img :src="'/static/img/logo.svg'" alt="G-Spot" width="146">
            </div>
            <nav class="header_middle">
                <ul class="nav">
                    <li><a href="#" class="dropdown-link" @click.stop="dropdownShow">Рецепты</a></li>
                    <li><a href="#">О проекте</a></li>
                    <li><a href="#">Блог</a></li>
                    <li><a href="#">Контакты</a></li>
                </ul>
                
                <app-header-dropdown v-if="dropdownVisible"></app-header-dropdown>

            </nav>
            <div class="header_right">
                <app-button :classList="{ primary: true }">Создать меню</app-button>
				<app-button :classList="{ secondary: true, 'light': true }">Вход</app-button>
                <span class="search_btn icon-search" @click.stop="searchShow"></span>
            </div>

			<app-header-search v-if="searchVisible"></app-header-search>

        </div>
    </header>
</template>


<script>
import Button from '../button';
import HeaderDropdown from './HeaderDropdown';
import HeaderSearch from './HeaderSearch';

export default {
	name: 'mainHeader',
	data: function(){
		return {
			dropdownVisible: false,
			searchVisible: false
		}
	},
	methods: {
		dropdownShow(){
			if(this.searchVisible){
				this.searchShow()
			}
			this.dropdownVisible = !this.dropdownVisible;
			this.$refs.headerWrapper.classList.toggle('menu-active')
		},
		searchShow(){
			if(this.dropdownVisible){
				this.dropdownShow()
			}
			this.searchVisible = !this.searchVisible;
		}
	},
	components: {
		'app-button': Button,
		'app-header-dropdown': HeaderDropdown,
		'app-header-search': HeaderSearch
	},
	created() {
        var vm = this;
        document.addEventListener('click', function () {
			if(vm.searchVisible){ vm.searchShow() }
			if(vm.dropdownVisible){ vm.dropdownShow() }
		});
    }
}
</script>

<style lang="sass" scoped>

header
	padding: 25px 0
	width: 100%
	position: relative
	transition: background-color ease .2s

	.header_container
		display: flex
		align-items: center
		width: 100%

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
			color: #fff
			position: relative
			border-radius: 20px
			transition: box-shadow ease .2s

			&.dropdown-link
				padding: 10px 28px 10px 20px

			&.dropdown-link::after
				content: ''
				position: absolute
				top: 50%
				right: 12px
				width: 0
				height: 0
				border: 4px solid transparent
				border-top: 4px solid #fff
				transform: translateY(-2px)
				transition: transform ease .2s

			&:hover
				box-shadow: inset 0 0 0 2px #fff
			

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

	&.menu-active
		background-color: #5c556b

		a.dropdown-link::after
			transform: translateY(-6px) rotate(180deg)

</style>
