<template>
    <section class="title_section">
        <div class="container">
            
            <h2>Чем полезен GSpot?</h2>
            
            <div class="cards">
                <div class="cards_item">
                    <div class="cards_item_img">
                        <img :src="'/static/img/cards2.png'" alt="image" height="171">
                    </div>
                    <div class="cards_item_desc">
                        <h3>Решает проблему выбора</h3>
                        <p>
                            GSpot подскажет что тебе приготовить, чтобы питаться вкусно и полезно.
                        </p>
                    </div>
                </div>
                
                <div class="cards_item">
                    <div class="cards_item_img">
                        <img :src="'/static/img/cards2.png'" alt="image" height="171">
                    </div>
                    <div class="cards_item_desc">
                        <h3>Помогает спланировать покупки</h3>
                        <p>
                            Позволит распланировать покупки продуктов, используя удобный интерфейс.
                        </p>
                    </div>
                </div>
                
                <div class="cards_item">
                    <div class="cards_item_img">
                        <img :src="'/static/img/cards3.png'" alt="image" height="171">
                    </div>
                    <div class="cards_item_desc">
                        <h3>Экономит ваше время и деньги</h3>
                        <p>
                            Подробный спискок покупок сэкономит время и исключит лишние растраты
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
</template>

<script>
export default {
    name: 'mainAdvantages'
}
</script>

<style lang="sass" scoped>
.cards
	display: flex
	align-items: flex-start
	flex-wrap: wrap
	padding: 40px 0 0

	.cards_item
		width: 33.333%
		text-align: center
		padding: 0 20px
	
	.cards_item_img
		margin: 0 0 34px

		img
			display: block
			height: 176px
			margin: 0 auto

	.cards_item_desc
		max-width: 300px
		margin: 0 auto

		h3
			font-size: 18px
			line-height: 24px
			color: #615876
			margin: 0 0 20px

		p
			font: 13px/21px 'open_sans', sans-serif
			margin: 0
			color: #656565
</style>
