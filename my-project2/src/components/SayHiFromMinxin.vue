<template>
    <div>
        {{hi("from view")}}
    </div>
</template>

<script>
/**
 * 调用定义好的js文件
 */
import CommonHi from '@/mixin/common_hi.js';

export default {
    mixins: [CommonHi],
    mounted() {
        alert(this.hi("from script code"));
    }
}
</script>