<template>
  <div>
    <!-- <div class="fw600 title-container font32">欢迎来到vue的世界</div> -->
    <div class="titleline mt40">
      <span class="font48 fw600 gradient-text">渐进式</span>
      <br/>
      <span class="fw600 font48">JavaScript 框架</span> 
    </div>
    <p class="description font18 mt10"> 易学易用，性能出色，适用场景丰富的 Web 前端框架。 </p>
    <div class="vt-box-container">
      <div class="vt-box" ><h2 >易学易用</h2><p class="desc-text font15 mt10"> 基于标准 HTML、CSS 和 JavaScript 构建，提供容易上手的 API 和一流的文档。 </p></div>
      <div class="vt-box" ><h2 >性能出色</h2><p class="desc-text font15 mt10">经过编译器优化、完全响应式的渲染系统，几乎不需要手动优化。</p></div>
      <div class="vt-box" ><h2 >灵活多变</h2><p class="desc-text font15 mt10"> 丰富的、可渐进式集成的生态系统，可以根据应用规模在库和框架间切换自如。 </p></div>
    </div>
    
    <!-- <div class="logo-container mt30">
      <img :src="logo"/>
    </div> -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import logo from "@/assets/logo.svg"
</script>

<style setup lang="less">
.title-container {
  text-align: center;
}
.logo-container{
  width:200px;
  margin:30px auto 0;
  img{
    width:100%;
    display: block;
  }
}
.titleline{
  text-align: center;
  letter-spacing: 1px;
  .gradient-text{
  background: linear-gradient(
    to right,
    #39bf83 30%,
    #647eff 
  );
  /* 将背景裁剪为文字形状 */
  background-clip: text;
  /* 设置文字颜色为透明，以便背景渐变能够透过来 */
  color: transparent;
  }
}

.description{
  margin-bottom:48px;
  text-align: center;
  color:#2f2f2fb3;
}

.vt-box-container{
  display: flex;
  width:800px;
  margin:0 auto;
  justify-content: space-between;
  .vt-box{
    width:200px;
    .desc-text{
      color:#3c3c3cB3;
    }
  }
}
</style>
