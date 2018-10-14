<template>
    <div id="mainComponent">
        <IndexTitle></IndexTitle>
        <IndexAdvantage></IndexAdvantage>
    </div>
</template>

<script>
import IndexTitle from './MainComponents/Title';
import IndexAdvantage from './MainComponents/Advantage';

export default {
    name: 'mainComponent',
    components: {
        IndexTitle,
        IndexAdvantage
    }
}
</script>


<style scoped>

</style>
