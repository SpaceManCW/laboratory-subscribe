<template>
  <div>
    <h1>Vue示例</h1>
    <ul>
      <li><router-link to="/example01">welcome</router-link></li>
      <li>
        <router-link to="/example02">数据驱动&计算属性</router-link>
      </li>
      <ul>
        <li>
          <router-link to="/example03/students/12/homeworks/1">
            路由传参1
          </router-link>
        </li>
        <li>
          <router-link to="/example03/students/74/homeworks/2">
            路由传参1
          </router-link>
        </li>
      </ul>
    </ul>
  </div>
</template>
