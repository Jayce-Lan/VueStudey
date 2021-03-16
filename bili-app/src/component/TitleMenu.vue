<template>
    <div class="title-menu">
        <Item :is-active="isActive" @active="$emit('active')">
            <div class="inner">
                <div class="left">
                    <slot name="font"/>
                </div>
                <div class="right">
                    <slot name="icon"/>
                </div>
            </div>
        </Item>
    </div>
</template>

<script>
import Item from "./Item";

export default {
    components: {
        Item,
    },
    props: {
        isActive: {
            type: Boolean,
            default: false,
        }
    }
}
</script>

<style scoped>
    .title-menu {
        width: 100%;
        height: 46px;
        line-height: 46px;
    }
    .inner {
        padding: 0 20px;
    }
    .left {
        float: left;
        color: #212121;
        font-weight: 500;
        font-size: 16px;
    }
    .right {
        float: right;
        font-size: 12px;
        color: #999;
    }
</style>