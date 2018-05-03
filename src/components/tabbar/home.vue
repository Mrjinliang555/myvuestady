<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(v,i) in imgList" :key="i">
                <img :src="v.img" alt="">
            </mt-swipe-item>
        </mt-swipe>

        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/newsList">
                    <img src="../../assets/imgs/menu1.png" alt="">
                    <div class="mui-media-body">新闻咨询</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/picsList">
                    <img src="../../assets/imgs/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/goodsList">
                    <img src="../../assets/imgs/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="">
                    <img src="../../assets/imgs/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="">
                    <img src="../../assets/imgs/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="">
                    <img src="../../assets/imgs/menu6.png" alt="">
                    <div class="mui-media-body">练习我们</div>
                </router-link>
            </li>
		</ul> 
    </div>
</template>

<script>


import axios from "axios"


export default {
    data(){
        return {
            imgList: []
        }
    },
    created(){
        axios({
            url: 'http://www.escook.cn:3000/api/getlunbo'
        }).then(res=>{
            if( res.data.status == 0 ){
                this.imgList = res.data.message;
            }
        })    
    }
}
</script>

<style scoped>

.mint-swipe {
    height: 190px;
}

.mint-swipe img {
    width: 100%;
    display: block;
    margin: 0 auto;
}
.mui-grid-view {
    background-color: #fff;
}
.mui-grid-view img {
    width: 60%;
} 

</style>