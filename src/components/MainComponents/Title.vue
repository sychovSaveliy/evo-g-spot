<template>
    <section class="title title_main">
		
        <Header></Header>
		
		<div class="container title_content">
			<img class="title_content_logo" width="443" :src="'/static/img/title-logo.svg'" alt="G-Spot">
			<div class="title_content_text">
				<p>
					Рамки обучения позволяет оценить значение модели развития. Задача организациии, в
					особенности же, новая модель деятельности обеспечивает широкому кругу участие в
					формировании позиции, занимаемых в отношении поставленых задач.
				</p>
			</div>
			<button class="btn btn__color-default btn__lg">Создать свое меню</button>
		</div>
		
		<div class="title_scroll">
			<i class="icon-angle_down"></i>
		</div>
		
	</section>
</template>

<script>
import Search from './Search';
import Header from './Header';

export default {
    name: 'mainTitle',
    components: {
        Search,
        Header
    }
}
</script>

<style lang="sass" scoped>

.title
	background-image: url(/static/img/title-bg.png), linear-gradient(to right, #0cd49f, #8f7bb3)
	text-align: center
	display: flex
	flex-direction: column
	flex-wrap: nowrap
	color: #ffffff
	align-items: center

	.container
		margin: auto

	&.title_main
		min-height: 100vh
		position: relative

	.title_scroll
		margin: 0 0 30px

		.icon-angle_down
			display: block
			width: 34px
			height: 34px
			border-radius: 100%
			line-height: 36px
			text-align: center
			color: #ffffff
			margin: 13px
			font-size: 12px
			background-color: rgba(255,255,255,.35)
			box-shadow: 0 0 18px rgba(0,0,0,.1), 0 0 0 13px rgba(255,255,255,.2)

	.btn__color-default:hover
		box-shadow: 0 5px 20px rgba(50,21,83,.2), 0 0 0 8px rgba(255,255,255,.2)

.title_content

	.title_content_logo
		display: block
		margin: 0 auto 40px
		max-width: 443px

	.title_content_text
		max-width: 730px
		margin: 0 auto 33px
		font-size: 16px
		line-height: 22px

</style>

