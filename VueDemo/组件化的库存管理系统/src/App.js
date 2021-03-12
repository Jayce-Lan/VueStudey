import Products from "./components/Products.js";

var template = `<div>
    <h1>库存管理系统</h1>
    <Products :productList="psList"/>
</div>`;

//根组件
export default {
    data() {
        return {
            psList: [
                {id: 1, name: "iPhone", stock: 10},
                {id: 2, name: "Huawei", stock: 20},
                {id: 3, name: "XiaoMi", stock: 20},
                {id: 4, name: "Samsung", stock: 30}
                ],
        }
    },
    components: {
        Products,
    },
    template,
}