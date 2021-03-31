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
            路由传参2
          </router-link>
        </li>
      </ul>
      <li>
        Composition-API
        <ul>
          <li>
            <router-link to="/example04-01">
              interface & ref() & computed() & watch()
            </router-link>
          </li>
          <li>
            <router-link to="/example04-02">
              reactive
            </router-link>
          </li>
          <li>
            <router-link to="/example04-03/students/45/homeworks/23">
              students/45/homeworks/23
            </router-link>
          </li>
          <li>
            <router-link to="/example04-03/students/18/homeworks/18">
              students/18/homeworks/18
            </router-link>
          </li>
          <li><router-link to="/example04-04">Composition</router-link></li>
        </ul>
      </li>
      <li>
        directives
        <ul>
          <li>
            <router-link to="/example05-01">template & if & v-bind</router-link>
          </li>
          <li>
            <router-link to="/example05-02">v-bind & watch</router-link>
          </li>
          <li><router-link to="/example05-03">v-for</router-link></li>
        </ul>
        <ul>
          <li>
            <router-link to="/example06-01">Form Binding</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
