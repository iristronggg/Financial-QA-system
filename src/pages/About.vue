<template>
  <div class="content">
    <div class="container-fluid">
      <div>
          <h2 style="color:white"><i class="nc-icon nc-single-copy-04"></i>｜想要快速獲得年報或財報資訊嗎？</h2>
          
      </div>
      

      <div style="margin:20px; float:right">
        <img src="../../public/img/report.png" width=70% style="float: right">
      </div>

      <div style="padding: 0px; margin:0px;">
        <h2 style="text-align: center; color:white; font-family: Trebuchet MS;"><strong>FinAncer</strong>, Find Answer ! </h2>
      </div>
      <div style="float:right; padding:0px; margin:0px;">
        <h4 style="color:white;"> 立即開啟問答機器人</h4>
        <h1><a href="/#/login" style="display:inline-block; float:right; font-family: Trebuchet MS; color: #ffe384;"><b> START> </b></a></h1>
      </div> 
      
    </div>
  </div>
</template>
<script>
  import ChartCard from 'src/components/Cards/ChartCard.vue'
  import StatsCard from 'src/components/Cards/StatsCard.vue'
  import LTable from 'src/components/Table.vue'
  export default {
    components: {
      LTable,
      ChartCard,
      StatsCard
    },
    data () {
      return {
        editTooltip: 'Edit Task',
        deleteTooltip: 'Remove',
        pieChart: {
          data: {
            labels: ['40%', '20%', '40%'],
            series: [40, 20, 40]
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
    },
  }
</script>
<style type="text/css">
.main-panel
{
  /*  background: linear-gradient(#062274, #2563f4); 
  background: url('../../public/img/report.png'); 
   background: linear-gradient(#062274, #fcfcfc);
   background-size:contain;
   background-repeat: no-repeat;
   background: url('../../public/img/star03.jpg'); 
  background-size: cover;
    background-image: linear-gradient(
    0deg,
    rgba(247,247,247,1) 23.8%,
    rgba(0,0,0,0.2) 92%
  );
  background-color:black;
  */
  background: url('../../public/img/star.jpg'); 
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.9;

 
   
}
</style>
