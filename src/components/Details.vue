<template>
  <div id="details">
    <div class="name">{{name}}
      <sc v-for="item in school">{{item.name}}|{{item.degree}}</sc>
    </div>
    <div class="reward">
      <ti>成绩获奖情况</ti>
      <ul>
        <li v-for="item in reward">
          {{item}}<br/>
        </li>
      </ul>
    </div>
    <div class="reward">
      <ti>项目经历</ti>
      <div v-for="i in exp">
        <br>
        <stress>{{i.name}}</stress>
        <de>&nbsp;{{i.time}}<br><br>
          <div v-html="i.details"></div>
        </de>
      </div>
    </div>
    <div class="reward">
      <ti>已发表成果</ti>
      <ul>
        <li v-for="item in paper">
          <div style="font-size: 15px;
    line-height: 1.3; color: #2c3e50">{{item}}</div>
        </li>
      </ul>
    </div>
    <div class="reward">
      <ti>自我评价</ti>
      <div v-for="i in self">
        <br>
        <stress>{{i.name}}</stress>
        <de>{{i.details}}<br></de>
      </div>
      <br>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Details",
        data() {
            return {
                name: '张三',//姓名
                school: [{name: '清华大学', degree: '本科-计算机科学与技术'}, {name: '北京大学', degree: '硕士-网络空间安全'}],
                reward: [ //获奖情况
                    '成绩排名: 1/100(本科-计算机科学与技术)、GPA4.0(硕士-网络空间安全)',
                    '英语水平: CET-4(600)、CET-6(500)',
                    '获奖情况: 国家奖学金',
                    '科研成果: CVPR 2篇、专利1项、软件著作权一项'
                ],
                exp: [//项目经历
                    {
                        name: '大创项目',
                        time: '(2017.9-2019.4)',
                        details: '项目主要内容...'
                    },
                    {
                        name: '小程序相关开发',
                        time: ' (2018.6-2018.12)',
                        details: 'app A: 小程序的主要功能是...<br>' +

                            'app B: 小程序主要功能是...'
                    },
                    {
                        name: '实习项目',
                        time: ' (2018.7-2018.8、2019.1-2019.2)',
                        details: '1.主要是对...<br>' +
                            '2.该项目主要是对...'
                    },
                    {
                        name: '项目test',
                        time: ' (2019.2)',
                        details: '项目主体形式为...'
                    },{
                        name: '飞毛腿悬赏平台',
                        time: ' (2019.7)',
                        details: '校园用户可以通过在平台发布悬赏任务，在发布者和申请者进行双向确认以后，可通过预留联系方式取得联系。'
                    },

                ],
                self: [//自我评价
                    {
                        name: '专业储备方面，',
                        details: '大学期间除了对计算机专业相关基础课程进行了学习还对...'
                    },
                    {
                        name: '学习能力强，',
                        details: '目前能够掌握和使用的技术和工具基本都是通过自己学习完成，能够有良好的精力和毅力去学习新知。'
                    },
                    {
                        name: '有恒心和毅力，',
                        details: '不怕吃苦用、勇敢冲锋'
                    }
                ],
                //
                paper: [//发表成果
                  'Vaswani A, Shazeer N, Parmar N, et al. Attention is all you need[J]. Advances in neural information processing systems, 2017, 30.',
                  'Devlin J, Chang M W, Lee K, et al. Bert: Pre-training of deep bidirectional transformers for language understanding[J]. arXiv preprint arXiv:1810.04805, 2018.'
                ]
            }
        }
    }
</script>

<style scoped>
  #details {
    width: 70%;
    margin: 30px 0 30px 2.5%;
    /*padding-bottom: 10px;*/
  }

  .name {
    font-size: 30px;
    color: cornflowerblue;
  }

  sc {
    font-size: 15px;
    color: black;
    padding-left: 15px;
  }

  h1 {
    font-weight: 300;
    font-size: 22.5px;
  }

  .reward {
    padding-top: 15px;
  }

  ul {
    font-size: 15px;
    color: #656565;
  }

  ti {
    color: cornflowerblue;
    font-size: 20px;
    /*font-weight: bold;*/
  }

  de {
    font-size: 15px;
    line-height: 1.3;
  }
  stress {
    /*display: block;*/
    /*margin-block-start: 1.33em;*/
    /*margin-block-end: 1.33em;*/
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }
  @media screen and (max-device-width: 600px) {
    #details{
      height: 100%;
      overflow: auto;
      /*padding-bottom: 30px;*/
    }
    .name {
      font-size: 40px;
    }
    ti{
      font-size: 35px;
    }
  }
</style>
