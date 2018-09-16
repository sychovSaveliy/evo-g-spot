<template>
    <div id="main">
        <Header></Header>
        {{ title }}
        <Search />
    </div>
</template>

<script>
import Search from './MainComponents/Search';
import Header from './MainComponents/Header';

export default {
    name: 'main',
    data: function() {
        return {
            title: 'Main Component'
        }
    },
    components: {
        Search,
        Header
    }
}
</script>


<style scoped>

</style>
