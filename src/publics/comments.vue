<template>

    <div class="mon-page">
        <h4>发表评论</h4>
        <hr>
        <textarea v-model="pinglun" name="" id="" cols="30" rows="3"></textarea>
        <mt-button @keyup.enter="addcom" @click="addcom" type="primary" size="large">发表评论</mt-button>

        <ul class="mui-table-view">
            <li v-for="(v,i) in pinglList" :key="i" class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <div class="mon_info">
                        <span>第{{i+1}}楼 发表时间：{{v.add_time | mon}}</span>
                        <span class="mui-pull-right"> {{v.user_name}} </span>    
                        </div>
                    <img class="mui-media-object mui-pull-right" src="../assets/imgs/666.jpg">
                    <div class="mui-media-body">
                        <p class='mui-ellipsis' v-text="v.content"></p>
                    </div>
                </a>
            </li>
        </ul>
        <mt-button v-show="isshow" @click="more" type="danger" size="large" plain>加载更多</mt-button>
    </div>
  
</template>

<script>

import axios from "axios"

import { Toast } from 'mint-ui';

import mon from "@/filters/datamoment.js"

export default {
    data(){
        return {
            pinglun: '',
            curPage: 1,
            pinglList: [],
            isshow: true
        }
    },
    props: ["id"],
    created(){
        // console.log(this.id)
        this.getData();
    },
    methods: {
        addcom(){

            if( this.pinglun.trim() == "" ){
                return ;
            }
         
            axios({
                url: 'http://www.escook.cn:3000/api/postcomment/' + this.id,
                data: "content=" + this.pinglun,
                method: 'post'
            }).then(res=>{
                if( res.data.status == 0 ){
                    this.pinglList.unshift({
                        add_time: new Date(),
                        content: this.pinglun,
                        user_name: "我不是"
                    })
                    this.pinglun = ""
                }
            })
        },
        more(){
            this.curPage ++;
            this.getData();
        },
        getData(){
            axios({
                 url: 'http://www.escook.cn:3000/api/getcomments/' + this.id + "?pageindex=" + this.curPage
            }).then(res=>{
                // console.log(res)
                if( res.data.status == 0 ){

                    if( res.data.message.length == 0 ){
                        this.isshow = false;
                        Toast('没有更多数据了！');
                        return;
                    }

                    this.pinglList.push(...res.data.message)
                }
            })
        }
    },
    filters: {
        mon
    }
}
</script>

<style>

.mon_info span {
    font-size: 12px;
    color: #888;
}
.mon-page img {
    border-radius: 50%;
}
</style>
