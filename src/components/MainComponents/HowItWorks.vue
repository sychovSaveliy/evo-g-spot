<template>
    <section class="title_section steps__section">
        <div class="container">
            
            <div class="steps">
                <div class="steps_item">
                    <h2>Как это работает?</h2> 
                    <ol>
                        <li>Перейди в раздел календаря</li>
                        <li>Заполни свое меню блюдами из каталога</li>
                        <li>Получи подробный список ингредиентов для покупки</li>
                        <li>Узнай, где можно приобрести выбранные товары</li>
                    </ol>
                    <Button :classList="{ primary: true }">Создать свое меню</Button>
                </div>
                <div class="steps_item">
                    <img class="steps_item_img" :src="'static/img/aboutpic.png'" alt="image">
                </div>
            </div>
            
        </div>
    </section>
</template>

<script>
import Button from '../common/button';
export default {
    name: 'mainSteps',
    components: {
        Button
    }
}
</script>

<style lang="sass" scoped>
.steps__section
	background-image: url(/static/.img/title-bg.png), linear-gradient(to right, #0cd49f, #8f7bb3)
	color: #ffffff

	&.title_section
		padding: 0

	.btn__color-default:hover
		box-shadow: 0 5px 20px rgba(50,21,83,.2), 0 0 0 8px rgba(255,255,255,.2)

.steps
	display: flex
	flex-direction: row
	align-items: stretch

.steps_item
	width: 50%
	position: relative
	padding: 110px 0 135px

	h2
		color: #ffffff
		text-align: left

	.steps_item_img
		position: absolute
		height: 109%
		left: 0
		top: 50%
		transform: translateY(-50%)

	ol
		padding: 13px 0
		margin: 0
		list-style: none
		counter-reset: number

		li
			margin: 0 0 36px
			padding: 8px 0 0 78px
			list-style-type: none
			font-size: 16px
			line-height: 17px
			position: relative
			min-height: 34px

		li::before
			counter-increment: number
			content: counter(number)
			display: block
			background-color: rgba(255,255,255,.35)
			box-shadow: 0 0 18px rgba(0,0,0,.1), 0 0 0 13px rgba(255,255,255,.2)
			width: 34px
			height: 34px
			line-height: 34px
			font-size: 18px
			font-weight: 500
			text-align: center
			border-radius: 100%
			position: absolute
			left: 13px
			top: 0
</style>

