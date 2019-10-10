//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    swiper:{
      background: ['slide_1.jpg', 'slide_2.jpg', 'slide_3.jpg', 'slide_4.jpg'],//轮播数组
      indicatorDots: true,//是否显示面板指示点
      indicatorColor: "#cccccc",//指示点颜色
      indicatorActiveColor: "#ffffff",//指示点选中颜色
      vertical: false,//滑动方向是否为纵向
      autoplay: true,//轮播是否自动播放
      interval: 2000,//轮播间隔
      duration: 500,//轮播滑动动画时长
      circular: true//是否采用衔接滑动
    }
  }
})
