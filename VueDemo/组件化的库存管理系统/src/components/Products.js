//商品列表组件

var template = `<ul>
<li v-for="(item, index) in productList" :key="item.id">
        商品名称：{{item.name}} 库存：
        <button @click="changeStock(item, item.stock - 1)">-</button>
            <span v-if="item.stock>0">{{item.stock}}</span>
            <span v-else>无货</span>
        <button @click="changeStock(item, item.stock + 1)">+</button>
        <button @click="remove(productList, index)">删除</button>
    </li>
</ul>`;

export default {
    template,
    data() {
        return {
            products: ["productList"],
        }
    },
    props: ["productList"],
    methods: {
        remove(product, index) {
            //splice(index, num):删除index下标起的一共num个元素
            product.splice(index, 1);
        },
        changeStock(product, newStock) {
            if (newStock < 0) {
                alert("商品库存不能小于0！");
                newStock = 0;
            }
            product.stock = newStock;
        },
    }
}