<template>
    <div class="news_page">
        <div class="news_header">
            <h4>{{detal.title}}</h4>
            <div>发表时间: <span>{{detal.add_time | mom}}</span><span class="fr">点击：{{detal.click}}次</span></div>
        </div>
        <hr>
        <div class="contt" v-html="detal.content"></div>
         <comments :id="$route.params.id"></comments> 
    </div>
</template>
<script>

import axios from "axios"

import comments from "@/publics/comments.vue"

import mom from "@/filters/datamoment.js"

export default {
    data(){
        return {
            detal: {}
        }
    },
    created(){
        
        axios({
            url: "http://www.escook.cn:3000/api/getnew/" + this.$route.params.id
        }).then(res=>{
            // console.log(res);
            if( res.data.status == 0 ){
                this.detal = res.data.message[0];
            }
        })
    },
    filters: {
        mom
    },
    components: {
        comments
    }
}
</script>
<style>
    .news_page {
        padding: 10px;
    }
    .news_header h4 {
        line-height: 30px;
    }
    .news_header div {
        color: #888;
        font-size: 14px;
    }
    .news_page img {
        width: 100%;
    }
    .fr {
        float: right;
    }
    .news_page hr {
        margin: 10px 0;
    }
</style>

