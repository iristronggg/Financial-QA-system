<template>
    <v-container>
        <RecordWidget
        iconColorProp="#e6e6e6"
        messageOutColorProp="#4d9e93"
        messageInColorProp="#f1f0f0"
        :messageListProp="messageList"
        :messageTime="messageTime"
        :initOpenProp="initOpen"
        />

       
    </v-container>
</template>


<script>
import RecordWidget from '../components/Self/RecordWidget.vue';

export default {
    name: 'GetRecordCompany',
    components: {
        RecordWidget,
    },
    data: () => ({
        messageList: [],
        messageTime: [],
        initOpen: true,
        toggledOpen: false,
    }),
    mounted() {
        console.log(this.$route.query.companyId);
        // this.messageList.push({ body: '紀錄測試', author: 'them' });
        this.axios({
            method: 'post',
            url: 'http://127.0.0.1:5020/get_company_record',
            // params: { companyID: this.$route.query.companyId },
            data: { user_id: 2,
            companyID: this.$route.query.companyId },
        }).then((response) => {
            console.log('=====records=======');
            console.log(response);
            console.log(response.data);
           
            let i;
            for (i = 0; i < response.data.length; i += 1) {
                this.messageList.push({ body: "======================= " + response.data[i].year + "  "+ response.data[i].season + " ======================= " , author: 'time'});
                this.messageList.push({ body: response.data[i].query_text, author: 'you' });
                this.messageList.push({ body: response.data[i].answer, author: 'them' });
                // this.messageTime.push( response.data[i].created_at );
            }
            console.log(this.messageTime);
            console.log('===================');


            // this.messageList = response.data;
        }).catch((error) => {
            // eslint-disable-next-line
            console.log('error');
        });
    },
};
</script>


<style scoped> 
</style>
