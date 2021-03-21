<template>
    <div>
        <blog-post
            :title="post.title"
            :text_color="post.color"
            :wight="post.wight"
        />
    </div>
</template>

<script>
import BlogPost from "@/components/blog-post/BlogPost";

export default {
    components: {
        BlogPost,
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