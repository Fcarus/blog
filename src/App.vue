<template>
  <div id="app">
<!--    <addBlog></addBlog>-->
<!--    <Showblog></Showblog>-->
    <Blogheader></Blogheader>
    <router-view>
      <addBlog></addBlog>
      <Showblog></Showblog>
    </router-view>
  </div>
</template>

<script>
import Showblog from "@/components/Showblog";
import addBlog from "@/components/addBlog";
import Blogheader from "@/components/Blogheader";

export default {
  name: "App",
  components: {
    Showblog,
    addBlog,
    Blogheader
  }
};
</script>
<style></style>
