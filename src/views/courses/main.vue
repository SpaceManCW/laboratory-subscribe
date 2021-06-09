<template>
  <div id="homepage">
    <div id="header">
      <img id="logo" src="/images/logo01.png" alt="logo" />
      <span id="heading">实验室预约系统</span>
    </div>
    <div id="main">
      <div id="box1">
        <img id="school" src="/images/school.jpeg" alt="school" />
      </div>
      <div id="box2">
        <p>
          &emsp;&emsp;信息与计算机科学技术实验中心成立于2012年7月，是整合了原计算机系专业实验室，信管专业实验室，软件专业实验室以及1978年就已成立的计算机基础实验室而组成的信息与计算机技术实践教学综合性专业化实践教学平台。
        </p>
        <p>
          &emsp;&emsp;中心组建后实现了资源共享，优势互补的办学目标，自动化的实践教学管理和人性化的教学服务为师生各类实验教学活动提供了优质的学习实践环境。
        </p>
        <p>
          &emsp;&emsp;中心面向全校计算机基础类实验教学和计算机相关专业与信息相关的本科和硕士专业课程的实践教学。主要承担计算机系统类、计算机软件工程实践类、计算机应用技术类、数学软件类、硬件及嵌入式应用、网络技术类、信息管理类等的课程的实践教学课程与创新活动。
        </p>
        <p>
          &emsp;&emsp;中心下设计算机公共基础实验室,计算机系统结构实验室,网络工程与安全实验室,信息管理系统综合实验室以及信息技术创新实训实验室等5个分室25个房间，建筑面积4800m2。配备品牌台式计算机1200余台，计算机系统结构、计算机组成原理等系统类实验箱90套；单片机原理、ARM、FPGA、物联网等硬件相关实验箱280余套。实验教学资产1500余万元。
        </p>
        <p>
          &emsp;&emsp;中心目前有专职实验教师8名。博士2人，硕士6人，副高级职称1人，中级7人。
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
  height: 900px;
  border: 1px solid black;
}
#header {
  position: relative;
  height: 100px;
  background-color: rgb(151, 224, 134);
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
  height: 600px;
}
#box1 {
  position: relative;
  left: 100px;
  width: 500px;
  height: 300px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
#box2 {
  position: relative;
  left: 220px;
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
