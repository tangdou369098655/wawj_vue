<template>
    <div>
        <com-header></com-header>
        <!-- <pro-six></pro-six> -->
        <router-view/>
        <com-footer></com-footer>
    </div>
</template>
<script>
import ComHeader from '@/components/Header'
import ComFooter from '@/components/Footer'
import proSix from './child/Pro_six'
// import proSix from './child/Pro_six'
export default {
    components:{
        ComHeader,
        ComFooter,
"pro-six":proSix,
    },
    data() {
        return { }
    }
}
</script>
