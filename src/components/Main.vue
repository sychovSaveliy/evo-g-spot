<template>
    <div id="mainComponent">
        <Tag v-bind:bgColor="tagStatePrimary">Листья салата</Tag>
    </div>
</template>

<script>
import Search from './MainComponents/Search';
import Header from './MainComponents/Header';
import Tag from './common/Tag';

export default {
    name: 'mainComponent',
    data: function() {
        return {
            title: 'Main Component',
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


<style scoped>

</style>
