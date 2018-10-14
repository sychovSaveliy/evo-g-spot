<template>
    <section class="title_section post_section">
        <div class="container">
            
            <div class="adv-heading">
                <h2>Последние статьи</h2>
                <div class="adv-heading_cotrols">
                    <Button :classList="{ primary: true }">Все статьи</Button>
                </div>
            </div>
            
            <ul class="post carousel">
                
                <li class="post_item">
                    <a href="#">
                        <span class="post_item_img">
                            <img :src="'/static/img/item1.jpg'" class="recipesec__image" alt="">
                        </span>
                        <span class="post_item_desc">
                            <span class="post_item_title">
                                Здоровый выбор шеф-повара Shimo Nakamura
                            </span>
                            <span class="post_item_p">
                                Разнообразный и богатый опыт начало повседневной работы по 
                                формированию позиции обеспечивает широкому...
                            </span>
                            <span class="post_item_attr">
                                <span class="date">24.12.2018</span>
                                <span class="category">Рецепты</span>
                            </span>
                        </span>
                    </a>
                </li>
                
                <li class="post_item">
                    <a href="#">
                        <span class="post_item_img">
                            <img :src="'/static/img/item2.jpg'" class="recipesec__image" alt="">
                        </span>
                        <span class="post_item_desc">
                            <span class="post_item_title">
                                Ягодный микс: заряд бодрости на весь день
                            </span>
                            <span class="post_item_p">
                                Разнообразный и богатый опыт начало повседневной работы по
                                формированию позиции обеспечивает широкому...
                            </span>
                            <span class="post_item_attr">
                                <span class="date">24.12.2018</span>
                                <span class="category">Рецепты</span>
                            </span>
                        </span>
                    </a>
                </li>
                
                <li class="post_item">
                    <a href="#">
                        <span class="post_item_img">
                            <img :src="'/static/img/item3.jpg'" class="recipesec__image" alt="">
                        </span>
                        <span class="post_item_desc">
                            <span class="post_item_title">
                                Спортивное питание от Олеси Головиной
                            </span>
                            <span class="post_item_p">
                                Разнообразный и богатый опыт начало повседневной работы по
                                формированию позиции обеспечивает широкому...
                            </span>
                            <span class="post_item_attr">
                                <span class="date">24.12.2018</span>
                                <span class="category">Рецепты</span>
                            </span>
                        </span>
                    </a>
                </li>
                
            </ul>
            
        </div>
    </section>
</template>

<script>
import Button from '../common/button';
export default {
    name: "mainRecentPost",
    components: {
        Button
    }
}
</script>

<style lang="sass" scoped>
.post
	display: flex
	align-items: stretch
	margin: 67px -15px 0
	padding: 0
	list-style: none

	.post_item
		margin: 0
		padding: 0
		list-style: none
		width: 33.333%
		padding: 0 15px
		text-align: center

		> a
			display: block
			border-radius: 20px
			box-shadow: 0 10px 25px rgba(0,0,0,.18)
			overflow: hidden
			text-decoration: none

			&:hover .post_item_img::before
					background-color: rgba(255,255,255,.0)

	.post_item_img
		display: block
		height: 253px
		position: relative
		overflow: hidden
		margin: 0 0 34px

		&::before
			content: ''
			display: block
			position: absolute
			left: 0
			top: 0
			right: 0
			bottom: 0
			background-color: rgba(255,255,255,.6)
			z-index: 10
			transition: background-color ease .2s

		img
			position: absolute
			display: block
			width: 100%
			left: 50%
			top: 50%
			transform: translate(-50%,-50%)
			transition: opacity ease .25s

	.post_item_desc
		display: flex
		flex-direction: column
		padding: 0 30px 40px

	.post_item_title
		display: block
		font-size: 18px
		line-height: 24px
		color: #615876
		margin: 0 0 20px
		height: 48px
		overflow: hidden
		font-weight: 500
		color: #615876

	.post_item_p
		display: block
		font: 13px/21px 'open_sans', sans-serif
		margin: 0 0 30px
		color: #656565
		max-height: 63px
		overflow: hidden

	.post_item_attr
		display: block
		margin: auto
		white-space: nowrap
		overflow: hidden
		text-overflow: ellipsis
		padding: 0 10px
		border-radius: 25px
		background-color: #edeefa
		color: #656565
		font-size: 0

		span
			display: inline-block
			font: 13px/25px 'open_sans', sans-serif
			padding: 0 10px
			position: relative

			&:not(:last-child)::after
				content: ''
				position: absolute
				width: 1px
				height: 13px
				background-color: #656565
				right: 0
				top: 6px
</style>
