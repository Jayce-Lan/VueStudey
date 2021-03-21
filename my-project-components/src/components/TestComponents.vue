<template>
    <div>
        <blog-post
            :title="post.title"
            :text_color="post.color"
            :wight="post.wight"
        />
        <slot-demo1>
            这是slot的属性，方便父组件插入内容
        </slot-demo1>

        <slot-demo2>
            <p slot="slot_top">这是slot的头部</p>
<!--            <p>这是未定义的slot</p>-->
            <h5 slot="slot_bottom">这是slot的尾部</h5>
        </slot-demo2>
    </div>
</template>

<script>
import BlogPost from "@/components/blog-post/BlogPost";
import SlotDemo1 from "@/components/slot-demo/slotDemo1";
import SlotDemo2 from "@/components/slot-demo/slotDemo2";

export default {
    components: {
        BlogPost, SlotDemo1, SlotDemo2,
    },
    data() {
        return {
            post: {
                title: "这是一个标题",
                color: "blue",
                wight: 10,
                sex: "man",
            }
        }
    }
}
</script>