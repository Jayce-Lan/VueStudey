<template>
    <div>
        <h3>原字符串：{{my_text}}</h3>
        <h3>运算后的字符串：{{my_computed_text}}</h3>

        <h3>被处理前的手机号：{{tele_num}}</h3>
        <h3>被处理后的手机号：{{change_num}}</h3>
    </div>
</template>

<script>
export default {
    data() {
        return {
            my_text: "good good study, day day up",
            tele_num: "13566668888",
        }
    },
    computed: {
        my_computed_text() {
            return this.my_text.replace(',', '').split(' ').reverse().join("-");
        },
        /**
         * 令手机号码被处理
         *
         * @returns {string} 返回不完整的手机号
         */
        change_num() {
            var teleNumArr = this.tele_num.split('');
            for (let i = 3; i <= 6; i++) {
                teleNumArr[i] = "*";
            }
            return teleNumArr.join('');
        }
    }
}
</script>