<template>
    <section class="title_section feedback_section">
        <div class="container">
            <h2>Отзывы пользователей</h2>
            <ul class="feedback">
                <li class="feedback_item">
                    <div class="feedback_item_img">
                        <img :src="'/static/img/feedbackwoman.png'" alt="image">
                    </div>
                    <div class="feedback_item_content">
                        <h3>Александра</h3>
                        <p>
                            Равным образом дальнейшее развитие различных форм деятельности
                            требуют от нас анализа модели развития. Задача организации, в
                            особенности же консультация с широким активом представляет собой
                            интересный эксперимент проверки новых предложений.
                        </p>
                        <app-button :classList="{ primary: true, button__md: true }">Открыть профиль</app-button>
                    </div>
                </li>
            </ul>
            
        </div>
    </section>
</template>

<script>
import Button from '../common/button';
export default {
    name: 'mainFeedback',
    components: {
        'app-button': Button
    }
}
</script>

<style lang="sass" scoped>

.feedback_section
	.container
		position: relative

		> h2
			position: absolute
			width: 60%
			left: 40%
			top: 105px
			padding-left: 30px
			text-align: left

.feedback
	padding: 0
	margin: 0
	list-style: none

.feedback_item
	margin: 0
	padding: 0
	list-style: none
	display: flex
	align-items: flex-start

	.feedback_item_img
		width: 40%
		padding: 0 45px 0 0

		img
			display: block
			max-width: 100%
			margin: 0 auto

	.feedback_item_content
		width: 60%
		padding: 182px 0 0 30px

		h3
			font-size: 18px
			line-height: 24px
			margin: 0 0 10px
			font-weight: 500
			color: #615876

		p
			font: 13px/21px 'open_sans', sans-serif
			color: #656565
			margin: 0 0 45px

</style>
