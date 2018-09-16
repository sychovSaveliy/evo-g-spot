<template>
    <span class="tag" v-bind:class="[setBgColor]">
        <slot />
    </span>
</template>

<script>
export default {
    name: 'tag',
    props: {
        bgColor: String
    },
    data: function(){
        return {
            bgColors: [
                'primary',
                'secondary'
            ]
        }
    },
    computed: {
        setBgColor(){
            return this.bgColors.includes(this.bgColor) ? this.bgColor : 'primary';
        }
    }
}
</script>

<style scoped>
    .tag {
        border-radius: 13px;
        padding: 8px 15px;
        font-size: 12px;
        color: #656565;
        cursor: pointer;
    }

    .tag.primary {
        background-color: #edeefa;
    }

    .tag.secondary {
        background-color: #999;
    }
</style>
