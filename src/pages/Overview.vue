<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">

        <div class="col-xl-3 col-md-6" id="searchTitle">
            <stats-card style="background-color: #ffe384; opacity: 0.9;">
              
              <div slot="content">
                <h4 class="card-title" style="color: black;"><strong>最常被搜尋公司排行榜</strong></h4>
              </div>
              <div slot="header" class="icon-warning">
                <i class="nc-icon nc-zoom-split text-primary"></i>
              </div>
            </stats-card>
        </div>

        <div class="col-xl-3 col-md-6">
          <stats-card>
             <div class="typo-line">
              <h2 style="color:white"></h2>
             </div>

            <div slot="header" class="icon-warning">
              <i class="nc-icon nc-bank text-warning"></i>
            </div>
            <div slot="content">
              <p class="card-category"><strong>No.1</strong></p>
              <h5 class="card-title">台灣積體電路製造股份有限公司</h5>
            </div>
            
          </stats-card>
        </div>

        <div class="col-xl-3 col-md-6">
           <stats-card>
             <div class="typo-line">
              <h2 style="color:white"></h2>
             </div>

            <div slot="header" class="icon-success">
              <i class="nc-icon nc-bank text-success"></i>
            </div>
            <div slot="content">
              <p class="card-category"><strong>No.2</strong></p>
              <h5 class="card-title">台灣中油股份有限公司</h5>
            </div>         
          </stats-card>
        </div>
        <div class="col-xl-3 col-md-6">
           <stats-card>
             <div class="typo-line">
              <h2 style="color:white"></h2>
             </div>

            <div slot="header" class="icon-danger">
              <i class="nc-icon nc-bank text-danger"></i>
            </div>
            <div slot="content">
              <p class="card-category"><strong>No.3</strong></p>
              <h5 class="card-title">台達電子工業股份有限公司</h5>
            </div>         
          </stats-card>
        </div>

      </div>
      
    
        
      
      <div class="row" style="opacity: 0.9;">
        <div class="col-xl-6 col-md-6">
           <card class="strpied-tabled-with-hover"
                body-classes="table-full-width table-responsive"
          >
            <template slot="header">
              <h4 class="card-title"><strong>看看大家都在問什麼</strong></h4>
              <p class="card-category">你可能也會想知道</p>
            </template>
            <l-table class="table-hover table-striped"
                     :columns="table1.columns"
                     :data="table1.data">
            </l-table>
          </card>
        </div>

       <div class="col-xl-6 col-md-4">
          <h4 style="color: white;font-weight:bold;">常見使用者提問</h4>
           <wordcloud
                :data="defaultWords"
                nameKey="key"
                valueKey="value"
                :fontSize="fontSize"
                :color="myColors"
                :showTooltip="true"
                :wordPadding="wordPadding"
                :spiral="spiral"
                :wordClick="wordClickHandler">
        </wordcloud>
        
          
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import ChartCard from 'src/components/Cards/ChartCard.vue'
  import StatsCard from 'src/components/Cards/StatsCard.vue'
  import LTable from 'src/components/Table.vue'
  import wordcloud from 'vue-wordcloud'
  const tableColumns = ['公司', '問題', '答案']
  const tableData = [{
    id: 1,
    name: 'Dakota Rice',
    公司: '台積電',
    問題: '最近研發的產品',
    答案: ''
  },
  {
    id: 2,
    name: '',
    公司: '台糖',
    問題: '',
    答案: ''
  },
  {
    id: 3,
    name: '',
    公司: '宏達電',
    問題: '',
    答案: ''
  },
  {
    id: 3,
    name: '',
    公司: '宏達電',
    問題: '',
    答案: ''
  },
  {
    id: 3,
    name: '',
    公司: '宏達電',
    問題: '',
    答案: ''
  }
  ]

  export default {
    components: {
      LTable,
      ChartCard,
      StatsCard,
      wordcloud
    },
    methods: {
    wordClickHandler(name, value, vm) {
      console.log('wordClickHandler', name, value, vm);
    }
  },
    data () {
      return {
    fontSize: [30,80],
    table1: {
          columns: [...tableColumns],
          data: [...tableData]
        },
        myColors: ['#1f77b4', '#629fc9', '#94bedb', '#c9e0ef'],
        wordPadding: 3,
        spiral:'rectangular',
        defaultWords: [
        {
          "key": "營業收入",
          "value": 21
        },    
        {
          "key": "發展計畫",
          "value": 21
        },    
        {
          "key": "業務範圍",
          "value": 31
        },
        {
          "key": "市場分析",
          "value": 11
        },
        {
          "key": "經營近況",
          "value": 15
        },
        {
          "key": "公司股價",
          "value": 11
        },
        {
          "key": "新產品研發",
          "value": 32
        },
        {
          "key": "負責人",
          "value": 11
        },
        {
          "key": "未來展望",
          "value": 12
        }
      ],
        editTooltip: 'Edit Task',
        deleteTooltip: 'Remove',
        pieChart: {
          data: {
            labels: ['40%', '20%', '35%','5%'],
            series: [40, 20, 35, 5]
          }
        },
        lineChart: {
          data: {
            labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
            series: [
              [287, 385, 490, 492, 554, 586, 698, 695],
              [67, 152, 143, 240, 287, 335, 435, 437],
              [23, 113, 67, 108, 190, 239, 307, 308]
            ]
          },
          options: {
            low: 0,
            high: 800,
            showArea: false,
            height: '245px',
            axisX: {
              showGrid: false
            },
            lineSmooth: true,
            showLine: true,
            showPoint: true,
            fullWidth: true,
            chartPadding: {
              right: 50
            }
          },
          responsiveOptions: [
            ['screen and (max-width: 640px)', {
              axisX: {
                labelInterpolationFnc (value) {
                  return value[0]
                }
              }
            }]
          ]
        },
        barChart: {
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
              [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
              [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
            ]
          },
          options: {
            seriesBarDistance: 10,
            axisX: {
              showGrid: false
            },
            height: '245px'
          },
          responsiveOptions: [
            ['screen and (max-width: 640px)', {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc (value) {
                  return value[0]
                }
              }
            }]
          ]
        },
        tableData: {
          data: [
            {title: 'Sign contract for "What are conference organizers afraid of?"', checked: false},
            {title: 'Lines From Great Russian Literature? Or E-mails From My Boss?', checked: true},
            {
              title: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
              checked: true
            },
            {title: 'Create 4 Invisible User Experiences you Never Knew About', checked: false},
            {title: 'Read "Following makes Medium better"', checked: false},
            {title: 'Unfollow 5 enemies from twitter', checked: false}
          ]
        }
      }
    }
  }
</script>
<style type="text/css">
.card-title:hover {
    /* transform: scaleY(1.2);
    transform: scaleX(1.1); */
    font-size:22px;
    color: #323ea8;

   
}
.content {
  background: url('../../public/img/star.jpg'); 
}

#searchTitle:hover{
    animation: shake 3s;

  /* When the animation is finished, start again */
  animation-iteration-count: infinite;


}
</style>
