<template>
    <div class="main__search__wraper">
        <div class="main__search">
            <div class="sidebar">
                <div class="filter__wraper">
                    <div class="filter__toggler">
                        <div class="meal__heading">
                            <input type="checkbox" id="meal__time" class="meal__time__toggler meal__toggler" checked name="meal__time">
                            <label for="meal__time">По приемам пищи</label>
                        </div>
                        <div class="meal__time__checkbox meal__checkbox">
                            <input type="checkbox" id="breakfast" class="checkbox ">
                            <label for="breakfast">Завтрак</label>
                            <input type="checkbox" id="lunch" class="checkbox  ">
                            <label for="lunch">Перекус</label>
                            <input type="checkbox" id="dinner" class="checkbox unchecked">
                            <label for="dinner">Обед</label>
                            <input type="checkbox" id="supper" class="checkbox unchecked">
                            <label for="supper">Ужин</label>
                            <div class="checkbox meal__time__toggler"></div> 
                        </div>
                    </div>
                <div class="filter__toggler">
                    <div class="meal__heading">
                        <input type="checkbox" id="meal__diff" class="meal__diff__toggler meal__toggler" checked name="meal__diff">
                        <label for="meal__diff">Сложность приготовления</label>
                    </div>
                    <div class="cooking__difficulty">
                        <input type="checkbox" id="very__easy" class="checkbox">
                        <label for="very__easy">Низкая</label>
                        <input type="checkbox" id="easy" class="checkbox">
                        <label for="easy">Ниже средней</label>
                        <input type="checkbox" id="medium" class="checkbox">
                        <label for="medium">Средняя</label>
                        <input type="checkbox" id="medium__high" class="checkbox">
                        <label for="medium__high">Выше средней</label>
                        <input type="checkbox" id="high" class="checkbox">
                        <label for="high">Высокая</label>
                    </div>
                </div>
                <div class="filter__toggler">
                     <div class="meal__heading">
                        <input type="checkbox" id="meal__ingridients" class="ingridients__toggler meal__toggler" checked name="meal__ingridients">
                        <label for="meal__ingridients">Ингридиенты</label>
                    </div>
                </div>
                <div class="filter__toggler">
                    <div class="meal__heading">
                        <input type="checkbox" id="cooking__time" class="cooking__time__toggler meal__toggler" checked name="cooking__time">
                        <label for="cooking__time">Время приготовления</label>
                    </div>
                </div>
                </div>
            </div>
            <div class="content">
                <div class="search__result">
                    <ul class="find">
                        <li>Найдено 120 рецептов</li>
                        <li>Сортировка </li>
                        <li >:Сначала простые<span class="arrow"></span></li>
                    </ul>
                </div>
                <div class="recipe__item">
                    <div class="recipe__img"><img src="static/img/mainSearch/Прямоугольник 610.png" alt=""></div>
                    <div class="recipe">
                        <div class="recipe__info">
                            <img src="static/img/mainSearch/Фигура 800.png">
                            <div class="difficulty"> Сложность: выше средней</div>
                            <img src="static/img/mainSearch/Фигура 799.png">
                            <div class="time">Время: 00 ч 55 мин</div>
                        </div>
                        <div class="recipe__item__h1">Куриная грудка на сковороде с овощами</div>
                        <div class="recipe__text">
                            <p>В мультиварку налить оливковое масло,включить режим выпечки,сложить курицу,овощи.Поперчить,посолить.Добавить чеснок и укроп.Обжарить все , периодически помешивая около 15 минут.</p>
                        </div>
                        <ul class="recipe__ingridients">
                            <li class="ingridient">Филе куриное: 500г</li>
                            <li class="ingridient">Лук репчатый: 1шт</li>
                            <li class="ingridient">Баклажан: 1шт</li>
                            <li class="ingridient">Перец сладкий: 1шт</li>
                            <li class="ingridient">Помидор:2шт</li>
                            <li class="ingridient">Морковь: 1шт</li>     
                        </ul>
                    </div>
                </div>
                <div class="recipe__item">
                    <div class="recipe__img"><img src="static/img/mainSearch/Прямоугольник 610.png" alt=""></div>
                    <div class="recipe">
                        <div class="recipe__info">
                            <img src="static/img/mainSearch/Фигура 800.png">
                            <div class="difficulty"> Сложность: выше средней</div>
                            <img src="static/img/mainSearch/Фигура 799.png">
                            <div class="time">Время: 00 ч 55 мин</div>
                        </div>
                        <div class="recipe__item__h1">Куриная грудка на сковороде с овощами</div>
                        <div class="recipe__text">
                            <p>В мультиварку налить оливковое масло,включить режим выпечки,сложить курицу,овощи.Поперчить,посолить.Добавить чеснок и укроп.Обжарить все , периодически помешивая около 15 минут.</p>
                        </div>
                        <ul class="recipe__ingridients">
                            <li class="ingridient">Филе куриное: 500г</li>
                            <li class="ingridient">Лук репчатый: 1шт</li>
                            <li class="ingridient">Баклажан: 1шт</li>
                            <li class="ingridient">Перец сладкий: 1шт</li>
                            <li class="ingridient">Помидор:2шт</li>
                            <li class="ingridient">Морковь: 1шт</li>     
                        </ul>
                    </div>
                </div>
                <div class="recipe__item">
                    <div class="recipe__img"><img src="static/img/mainSearch/Прямоугольник 610.png" alt=""></div>
                    <div class="recipe">
                        <div class="recipe__info">
                            <img src="static/img/mainSearch/Фигура 800.png">
                            <div class="difficulty"> Сложность: выше средней</div>
                            <img src="static/img/mainSearch/Фигура 799.png">
                            <div class="time">Время: 00 ч 55 мин</div>
                        </div>
                        <div class="recipe__item__h1">Куриная грудка на сковороде с овощами</div>
                        <div class="recipe__text">
                            <p>В мультиварку налить оливковое масло,включить режим выпечки,сложить курицу,овощи.Поперчить,посолить.Добавить чеснок и укроп.Обжарить все , периодически помешивая около 15 минут.</p>
                        </div>
                        <ul class="recipe__ingridients">
                            <li class="ingridient">Филе куриное: 500г</li>
                            <li class="ingridient">Лук репчатый: 1шт</li>
                            <li class="ingridient">Баклажан: 1шт</li>
                            <li class="ingridient">Перец сладкий: 1шт</li>
                            <li class="ingridient">Помидор:2шт</li>
                            <li class="ingridient">Морковь: 1шт</li>     
                        </ul>
                    </div>
                </div>
                <div class="search__result__nav">
                    <button class="previous__page">Назад</button>
                    <ul class="pages">
                        <li><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">...</a></li>
                        <li><a href="#">10</a></li>
                    </ul>
                    <button class="next__page">Вперед</button>

                </div>
            </div>
        </div>
    </div>
</template>

<script>

// import Header from './MainComponents/Header';
// import Tag from './common/Tag';

export default {
    name: 'main.search',
    data: function() {
        return {
            title: 'Search',
            tagStatePrimary: 'primary'
        }
    },
    components: {
        Search,
        Header,
        Tag
    }
}
</script>


<style scoped lang="scss">
/* переменные */

$white: rgb(255, 255, 255);
$grayish-purple-blue: rgb(70, 70, 92);
$pearl-blackberry: rgb(97, 88, 118);
$light-purple: rgb(120, 109, 144);
$light-greenish-blue: rgb(106, 153, 155);
$light-gray-blue: rgb(138, 205, 190);
$white-aluminum: rgb(168, 168, 168);
$grey-blackberry:rgb(110, 111, 113);
$light-purple-blue: rgb(128, 117, 153);
$dull-gray: (101, 101, 101);
$lavender-border: (237, 238, 250);
$light-purple-lightblue:rgb(149, 137, 176);

body, html {
    min-height: 100%;
    min-width: 80%;
    font-size: 14px;
}
  
/* сброс стилей */
* {
    box-sizing: border-box;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

input[type="submit"],
input[type="reset"],
input[type="button"],
button {
    background: none;
    border: 0;
    color: inherit;
    font: inherit;
    line-height: normal;
    overflow: visible;
    padding: 0;
}
// --------------------------------------

.main__search {
    display: flex;
    width:calc(100% - 100px);
    padding-left: 50px;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    border-radius: 13px;
    position: relative;
    background-color: $white;
    box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.18);
}
// -- sidebar -- 
.sidebar {
    width:300px;
    min-width: 250px;
    left:0;
    top:0;
    background-color: $grayish-purple-blue;
    padding-top: 30px;
    flex-wrap: wrap;
    padding-left: 40px;
    border-radius: 13px 0 0 13px;
}

.content {
    width: calc(100% - 300px);
    background-color: $white;
    flex-wrap: wrap;
}

.filter__toggler {
    justify-content: flex-start;
    padding-top: 40px;
}

.checkbox:not(checked) {
    position: relative;
    opacity: 0;
    display: block;
}

.meal__toggler {
    display: none;
}

.meal__heading {
    display: flex;
    flex-direction: row;
}

.meal__checkbox {
    display: flex;
    flex-direction: column;
}

input#meal__time:checked ~ .meal__toggler.checkbox {
    display: block;
    margin: 10px 0;
    padding: 5px;
    border: 1px solid gray;
}

.checkbox:before {
    content: attr(class);
    padding: 5px;
  } 
  
  label .checkbox:after {
    content: attr(for) " label";
  }

.meal__toggler:not(checked) +label {
    position: relative;
    color: $white;
    align-items: left;
    font-size: 16px;
    font-family: "MullerRegular";
    line-height: 0.995;
    text-align: left;
}

.meal__toggler:not(checked) +label:after {
    content: '';
    position: absolute;
    top: -10px;
    left: 210px;
    width: 37px;
    height: 36px;
    border-radius: 50%;
    background-color: $pearl-blackberry;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
}

.meal__toggler:not(checked) +label:after {
    content: "-";
    font-size: 26px;
    font-family: "MullerRegular";
    color: $white;
    top: -10px;
}

.meal__toggler:checked +label:after {
    content: '+';
    font-size: 26px;
    font-family: "MullerRegular";
    color: $white;
    top: -10px;
}

.checkbox:not(checked) +label {
    position: relative;
    padding: 0 0 0 45px;
    color: $white;
    font-size: 13px;
    font-family: "OpenSans";
    line-height: 1.538;
    text-align: left;
}

.checkbox:not(checked) +label:before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    width: 36px;
    height: 20px;
    border-radius: 13px;
    background-color: $pearl-blackberry;
    position: absolute;
}

.checkbox:not(checked) +label:after {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    width: 18px;
    height: 18px;
    border-radius: 10px;
    background-color: $light-purple;
    transition: all .2s;
}

.checkbox:checked +label:before {
    background-color: $light-greenish-blue;
}

.checkbox:checked +label:after {
    left: 18px;
    background-color: $light-gray-blue;
}

.cooking__difficulty {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

// -- content --

.search__result {
    margin: 30px;;
}

.search__result ul {
    display: flex;
    justify-content: space-between;
}

.find li {
    list-style: none;
    font-size: 13px;
    font-family: "OpenSans";
    line-height: 1.538;        

}

.find li:first-child {
    color: $white-aluminum;
}

.find li:nth-child(2) {
    color: $grey-blackberry;
    align-self: flex-end;
}

.find li:nth-child(3) {
    color: $light-purple-blue;
    text-decoration-line: underline;
    text-decoration-style: dotted;
    align-self: flex-end; 
}

.arrow {
  border-width: 2px;
  border-color: $light-purple-blue;
  border-style: solid;
  width: 8px;
  height: 4px;
}

.recipe__item {
    display: flex;
    font-size: 13px;
    font-family: "OpenSans";
    text-align: left;
    color: $dull-gray;
    min-width: 465px;
    line-height: 1.385;
    padding-top: 40px;
    padding-bottom: 40px;
    padding-right: 45px;
}

.recipe__item:after {
    content: '';
    display: block;
    width: 90%;
    height: 1px;
    background-color: $white-aluminum;
    position: absolute;
    left: 5%;
    bottom: 0;
}

.recipe__img {
    width: 160px;
    margin: 0 45px;
}

.recipe__info{
    display: flex;
    justify-content: space-around;
    font-size: 13px;
    font-family: "OpenSans";
    color: $dull-gray;
    line-height: 1.385;
}

.recipe__item__h1 {
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 24px;
    font-family: "MullerRegular";
    color: $pearl-blackberry;
    line-height: 1;
}

.recipe__text p{
    line-height: 1.385;
    padding-bottom: 20px;
}

.recipe__ingridients {
    display: flex;
    flex-wrap: wrap;
    font-size: 12px;
    font-family: "OpenSans";
    color: $dull-gray;
    line-height: 1.667;
    align-items: center; 
}

.ingridient {
    border-radius: 13px;
    background-color: $lavender-border;
    min-width: 112px;
    min-height: 26px;
    margin: 5px;
    text-align: center;
    padding-top:2px;
}

.search__result__nav {
    display: flex;
    flex-direction: row;
    padding: 30px;
    justify-content: space-between;
}

.pages {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    text-align: center;
}

.pages li a{
    font-size: 12px;
    font-family: "MullerMedium";
    color: $dull-gray;
    text-transform: uppercase;
    line-height: 1.833;
    text-align: center;
    margin-left: 30px;
    height: 80px;
    text-decoration-line: none;
    align-self: center;
    margin:20px ;
}

.pages li:hover {
    background-image: $lavender-border;
    cursor: pointer;
    border-radius: 50%;
    color: $dull-gray;
    text-decoration-line: none;
    box-shadow: 0px 5px 20px 0px rgba(50, 21, 83, 0.3);

}

.search__result__nav button {
    font-size: 12px;
    font-family: "MullerMedium";
    width: 143px;
    height: 40px;
    text-transform: uppercase;
    line-height: 1.833;
    text-align: center;
    border-radius: 20px;
    padding: 0 40px;
    margin: 0 20px;
    
}

.previous__page{
    background-color: $dull-gray;
    color: $light-purple-lightblue;
    box-shadow: 0px 5px 20px 0px rgba(50, 21, 83, 0.3);
}

.next__page {
    background-image: linear-gradient( 0deg, rgb(125,95,158) 0%, rgb(89,100,156) 100%);
    color: $white;
    box-shadow: 0px 5px 20px 0px rgba(50, 21, 83, 0.3);
}
</style>
