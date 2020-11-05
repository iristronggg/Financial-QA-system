// https://github.com/vuetifyjs/vuetify/blob/master/packages/docs/src/examples/autocompletes/intermediate/asynchronous.vue
// https://vuetifyjs.com/en/components/autocompletes/
<template>
    
        <v-container>
            <v-main>
                <div class="chooseCompany">
                    <v-card-text style="margin-top: 20px;">
                        <v-toolbar-title><strong>提出查詢：選擇公司</strong></v-toolbar-title>
                        <br>

                        <v-autocomplete
                        v-model="selectCompany"
                        
                        :loading="loading"
                        :items="items"
                        :search-input.sync="search"
                        item-text="name"
                        item-value="code"
                        loader-height="3"
                        cache-items
                        hide-no-data
                        hide-details
                        label="請輸入想要詢問的公司名稱"
                        solo-inverted
                        chips
                        input
                        filled
                      
                        ></v-autocomplete>

                        <v-row>
                            <v-col>
                                <v-select 
                                v-model="selectYear"
                                :items="years"
                                label="選擇年分"
                                filled
                                ></v-select>
                            </v-col>
                            <v-col>
                                <v-select
                                    v-model="selectSeason"
                                    :items="seasons"
                                    label="選擇季"
                                    filled
                                ></v-select>
                            </v-col>
                        </v-row>


                        <div class="text-center">
                            <v-btn style="margin: 5px;" @click="authenticate()">確定選擇</v-btn>
                        </div>
                    </v-card-text>
                </div>
            </v-main>
        </v-container>    
 
</template>

<script>

export default {
    name: 'askQuestionsChooseCompany',
    data: () => ({
        drawer: null,
        loading: false,
        years: ['2019', '2018', '2017', '2016', '2015'],
        seasons: ['Q1', 'Q2', 'Q3', 'Q4'],
        items: [],
        search: null,
        selectCompany: null,
        selectYear: null,
        selectSeason: null,
        selectName: null,
    }),
    mounted() {
        // getCompanyNames() {
            this.axios({
                method: 'get',
                url: 'http://127.0.0.1:5020/company',
            }).then((response) => {
                console.log('getttttt');
                console.log(response);
                console.log(response.data);
                this.items = response.data;
                console.log(this.items);
            }).catch((error) => {
                // eslint-disable-next-line
                console.log('getCompanyNames');
            });
        // },
    },
    methods: {
        authenticate() {
            this.axios({
                    method: 'post',
                    url: 'http://127.0.0.1:5020/check_company_data_exist',
                    data: {
                        year: this.selectYear,
                        season: this.selectSeason,
                        company: this.selectCompany,
                    },
            }).then((response) => {
            
                if(response.data.exist){
                     this.axios({
                        method: 'post',
                        url: 'http://127.0.0.1:5020/get_company_name',
                        data: { companyID: this.selectCompany },
                    }).then((response) => {
                        console.log('getttttt');
                        console.log(response);
                        console.log(response.data);
                        this.selectName = response.data.short_name;
                        console.log(this.selectName);
                        
                        this.$router.push({ path: '/admin/askQuestions', query: { companyId: this.selectCompany, Name: this.selectName, Year: this.selectYear, Season: this.selectSeason } });
                    }).catch((error) => {
                        // eslint-disable-next-line
                        //console.log('getCompanyNames');
                    });

                } else {
                    alert('暫時不提供指定時間下查詢');
                }

                
            }).catch((error) => {
  
            });

            
            // query 帶參數過去
            // https://router.vuejs.org/zh/guide/essentials/navigation.html
        },
    },
};
</script>


<style scoped>

.chooseCompany {
    width: 500px;
    height: 400px;
    border: 1px solid #cccccc;
    background-color: white;
    border-radius: 5px;
    opacity: 0.85;
    margin: auto;
    margin-top: 80px;
    padding: 20px;
}
.input-form {
    margin-bottom: 9px;
}



</style>
