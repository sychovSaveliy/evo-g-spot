<template>
    <div id="mainComponent">
        <IndexTitle></IndexTitle>
        <IndexAdvantage></IndexAdvantage>
        <HowItWorks></HowItWorks>
        <Feedback></Feedback>
        <RecentPost></RecentPost>
        <Footer></Footer>
    </div>
</template>

<script>

import IndexTitle from './MainComponents/Title';
import IndexAdvantage from './MainComponents/Advantage';
import HowItWorks from './MainComponents/HowItWorks';
import Footer from './MainComponents/Footer';
import Feedback from './MainComponents/Feedback';
import RecentPost from './MainComponents/Post';

export default {
    name: 'mainComponent',
    components: {
        IndexTitle,
        IndexAdvantage,
        HowItWorks,
        Footer,
        Feedback,
        RecentPost
    }
}
</script>


<style scoped>

</style>
