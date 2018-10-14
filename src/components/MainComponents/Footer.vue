<template>
    <footer class="footer">
		<div class="container">
			<div class="footer_left">
				<img class="footer_left_logo" :src="'/static/img/logo.svg'" alt="G-Spot" width="146">
				<div class="socials">
					<a href="#" target="_blank" class="socials-item icon-facebook">Facebook</a>
					<a href="#" target="_blank" class="socials-item icon-twitter">Twitter</a>
					<a href="#" target="_blank" class="socials-item icon-google">Google</a>
					<a href="#" target="_blank" class="socials-item icon-instagram">Instagram</a>
				</div>
			</div>
			<div class="footer_center">
				<h3>G-SPOT</h3>
				<nav class="footer_center_nav">
					<ul>
						<li><a href="#">Рецепты</a></li>
						<li><a href="#">О проекте</a></li>
						<li><a href="#">Блог</a></li>
						<li><a href="#">Контакты</a></li>
					</ul>
				</nav>
			</div>
			<div class="footer_right">
				<h3>О ПРОЕКТЕ</h3>
				<p>
					Разнообразный и богатый опыт дальнейшее развитие различных форм деятельности
					обеспечивает широкому кругу (специалистов) участие в формировании форм развития.
					Таким образом дальнейшее развитие различных форм деятельности требуют от нас
					анализа позиций, занимаемых участниками в отношении поставленных задач.
					С другой стороны новая модель организационной деятельности позволяет
					оценить значение существенных финансовых и административных условий.
				</p>
			</div>
		</div>
		<div class="copyright">© 2018 Greenspot</div>
	</footer>
</template>

<script>
export default {
    name: 'mainFooter'
}
</script>

<style lang="sass" scoped>
.footer
	background: #4c455c
	background: linear-gradient(to right, rgba(79,73,92,1) 0%,rgba(74,66,92,1) 100%)
	color: #fff
	padding: 85px 0 0

	h3
		font-size: 16px
		line-height: 18px
		margin: 40px 0 30px

		&:first-child
			margin: 0 0 30px

	p
		font-size: 13px
		line-height: 20px

	.container
		display: flex

	.footer_left
		width: 25%
		padding: 0 30px 0 0

		.footer_left_logo
			display: block
			width: 146px
			margin: 0 0 30px

		.socials
			font-size: 0

			a
				display: inline-block
				width: 40px
				height: 40px
				border-radius: 100%
				text-align: center
				background: #fff
				color: #9589b0
				text-decoration: none
				vertical-align: middle
				margin: 0 10px 0 0
				transition: box-shadow ease .2s

				&:hover
					box-shadow: 0 0 0 6px rgba(255,255,255,.1)
					color: #756bca

				&.icon-facebook
					&::before
						font-size: 18px
						line-height: 40px

				&.icon-twitter
					&::before
						font-size: 18px
						line-height: 40px

				&.icon-google
					&::before
						font-size: 21px
						line-height: 40px

				&.icon-instagram
					&::before
						font-size: 18px
						line-height: 40px

	.footer_center
		width: 17%
		padding: 0 30px 0 0

		.footer_center_nav
			ul
				margin: 0
				padding: 0
				list-style: none

				li
					margin: 0 0 10px
					padding: 0
					list-style: none
					font-size: 13px
					line-height: 18px

				a
					color: #ffffff
					text-decoration: none

					&:hover
						text-decoration: underline

	.footer_right
		width: 58%

	.copyright
		text-align: center
		font-size: 11px
		line-height: 18px
		padding: 45px 0
</style>


