<template>
  <div id="homepage">
    <div id="header">
      <img id="logo" src="/images/logo01.png" alt="logo" />
      <span id="heading">学生选课系统</span>
    </div>
    <div id="main">
      <div id="box1">
        <img id="school" src="/images/school.jpeg" alt="school" />
      </div>
      <div id="box2">
        <p>
          &emsp;&emsp;东北林业大学（Northeast Forestry
          University），位于黑龙江省哈尔滨市，是一所以林科为优势、林业工程为特色的中华人民共和国教育部直属高校，由教育部、国家林业局、黑龙江省人民政府三方共建，国家“世界一流学科建设高校”，国家“211工程”、“985工程优势学科创新平台”重点建设高校，高水平行业特色大学优质资源共享联盟成员高校，“双一流”农科联盟成员高校，入选国家“2011计划”、“111计划”、卓越工程师教育培养计划、卓越农林人才教育培养计划、国家建设高水平大学公派研究生项目、国家教育体制改革试点学校、中国政府奖学金来华留学生接收院校、全国深化创新创业教育改革示范高校、全国高校实践育人创新创业基地、国家生态文明教育基地。
        </p>
        <p>
          &emsp;&emsp;东北林业大学创建于1952年7月，原名东北林学院，是在浙江大学农学院森林系和东北农学院森林系基础上建立的，由原国家林业部直属管理。1985年8月，更名为“东北林业大学”。2000年3月，由国家林业局划归教育部直属管理。
        </p>
        <p>
          &emsp;&emsp;截至2020年10月，学校校园占地136公顷，总面积3.3万公顷；设有19个二级学院和1个教学部，开设有66个本科专业；有9个博士后科研流动站，1个博士后科研工作站，8个一级学科博士点，21个一级学科硕士点，17个类别的专业学位硕士点；有教职员工近2300人，研究生、全日制本科生2.6万余人。
        </p>
      </div>
    </div>
    <div id="end">
      <img width="100%" src="/images/scroll.png" alt="end" />
    </div>
  </div>
</template>
<style scoped>
#homepage {
  position: relative;
  width: 100%;
  height: 750px;
  border: 1px solid black;
}
#header {
  position: relative;
  height: 100px;
  background-color: rgb(42, 146, 103);
}
#logo {
  display: inline;
  position: relative;
  top: 10px;
  left: 40px;
}
#heading {
  position: relative;
  left: 300px;
  font: 3rem "隶书";
  bottom: 10px;
}
body {
  font-family: Arial, Helvetica, sans-serif;
}
#main {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  height: 465px;
}
#box1 {
  position: relative;
  left: 80px;
  width: 500px;
  height: 300px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
#box2 {
  position: relative;
  left: 180px;
  width: 600px;
  height: 370px;
  font: 1rem "隶书";
  padding: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: rgb(231, 233, 232);
}
#school {
  width: 500px;
  height: 300px;
}
#end {
  display: flex;
  align-items: flex-end;
}
</style>
