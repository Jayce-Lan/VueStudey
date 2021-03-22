<template>
    <div class="hi">
        <el-container>
            <el-header style="background: brown">Header</el-header>
            <el-container>
                <el-aside width="200px">
                    <NavMenu :items="testValue" :title="'标题'" :active="clickNav"></NavMenu>
                </el-aside>
                <el-main style="background: darkgray">Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import NavMenu from "@/components/NavMenu/NavMenu";
export default {
    name: 'hi',
    components: {
        NavMenu,
    },
    data() {
        return {
            testValue: [
                {id: 1, name: "test1"},
                {id: 2, name: "test2"},
                {id: 3, name: "test3"},
                {id: 4, name: "test4"},
            ]
        }
    },
    methods: {
        clickNav() {
            // console.log(value);
        }
    }
}
</script>

<style scoped>

</style>
