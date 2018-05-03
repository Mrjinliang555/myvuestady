<template>
    <div>
        <ul class="mui-table-view mui-table-view-chevron">
            <li v-for="(v,i) in list" :key="i" class="mui-table-view-cell mui-media">
                <router-link :to='"/newsList/detail/" + v.id' class="mui-navigate-right">
                    <img class="mui-media-object mui-pull-left" :src="v.img_url">
                    <div class="mui-media-body mui-ellipsis">
                        {{v.title}}
                        <p class='mui-ellipsis' v-text="v.zhaiyao"></p>
                    </div>
                </router-link>
            </li>
        </ul>        
    </div>
</template>
<script>

import axios from 'axios'

export default {
    data(){
        return {
            list: []
        }
    },
    created(){
        axios({
            url: 'http://www.escook.cn:3000/api/getnewslist'
        }).then(res=>{
            // console.log(res)
            if( res.data.status == 0 ){
                this.list = res.data.message;
            }
        })
    }
}
</script>
<style>

</style>

