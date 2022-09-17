<template>
  <div id="header">
    <div class="selfInfos">
      <secondTitle>个人信息</secondTitle>
      <p>{{info.nation}}|{{info.birthmonth}}|{{info.countenance}}</p>
      <p v-for="item in info.contact">{{ item.name }}<br>{{item.data}}</p>
    </div>
    <div class="tech">
      <secondTitle>技能</secondTitle>
      <br>
      <br>
      <process v-for="item in tech" :name="item.name" :percent="item.percent">123</process>
    </div>
  </div>
</template>
<script>
    import Process from './Process'

    export default {
        name: "Header",
        data() {
            return {
                tech: [//技能与得分
                    {name: 'Linux', percent: 50},
                    {name: 'HTML/CSS/JS', percent: 80},
                    {name: 'Python', percent: 85},
                    {name: 'C/C++/Java', percent: 60},
                    {name: 'Spring Boot', percent: 20},
                    {name: 'Flask/Django/Vue', percent: 70},
                    {name: '数据结构与算法', percent: 40},
                    {name: '机器学习', percent: 30}
                ],
              info: {//个人信息
                  nation: '汉族',
                  birthmonth: '2022.01',
                  countenance: '群众',
                  contact: [{name: '手机号:', data: 'xxxxxxxxx'}, {name: '邮箱:', data: 'sample@sample.com'}]
              }

            }
        },
        components: {
            process: Process
        }
    }
</script>

<style scoped>
  #header {
    width: 25%;
    text-align: center;
    border-right: 2px dotted cornflowerblue;
    margin: 30px 0;
    /*height: 100%*/
  }

  .icon {
    width: 55%;
  }

  .selfInfos {
    padding: 40px 0 10px 0;
    text-align: left;
    width: 80%;
    margin: 30px 10%;
  }

  secondTitle {
    color: cornflowerblue;
    font-size: 15px;
    font-weight: bold;
  }

  .tech {
    text-align: left;
    width: 80%;
    margin: 30px 10%;
  }

  p {
    font-size: 15px;
  }
</style>
