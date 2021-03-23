<template>
    <el-menu :default-openeds="['1', '3']">
        <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>{{ title }}</template>
            <el-menu-item-group v-for="item in items" :key="item.id">
                <el-menu-item style="color:#000;"
                              index="item.id"
                              @click="handClick(item.id)">
                    {{ item.name }}
                </el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>

<script>
export default {
    data() {
        return {
            selectId: null, //被选择的id
        }
    },
    props: {
        title: String,
        items: [],
    },
    methods: {
        handClick(value) {
            this.selectId = value;
            this.$emit("active", this.selectId);
        }
    }
}
</script>