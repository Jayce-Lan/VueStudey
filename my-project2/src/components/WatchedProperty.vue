<template>
    <div>
        <p>
            所在城市：<input v-model="city">
        </p>
        <p>
            所在街道：<input v-model="district">
        </p>
        <p>我的地址：{{full_address_watch}}</p>
        <p>我的地址：{{full_address_computed}}</p>

        <!--
            使用getter/setter属性
        -->
        <p>
            我的地址：<input v-model="full_address_getter_setter">
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            city: "",
            district: "",
            full_address_watch: "", //使用watch属性，必须多定义一个变量
        }
    },
    watch: {
        city(city_name) {
            this.full_address_watch = city_name + "-" + this.district;
        },
        district(district_name) {
            this.full_address_watch = this.city + "-" + district_name;
        }
    },
    computed: {
        /**
         * 使用computed属性将会比watch属性更加简洁
         *
         * @returns {string}
         */
        full_address_computed() {
            return this.city + "-" + this.district;
        },
        /**
         * 使用getter/setter属性
         */
        full_address_getter_setter: {
            get() {
                return this.city + "-" + this.district;
            },
            set(new_value) {
                this.city = new_value.split("-")[0];
                this.district = new_value.split("-")[1];
            }
        }
    }
}
</script>