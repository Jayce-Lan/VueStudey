<template>
    <div>
        <h2>{{title}}</h2>
        <p :style="'color:' + text_color">{{wight}}</p>
        <p>{{sex}}</p>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        text_color: String,
        wight: Number,
        sex: {
            type: String,
            default: "man",
        }
    }
}
</script>