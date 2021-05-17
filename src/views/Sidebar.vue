<template>
  <div>
    <h1>Vue实践</h1>
    <ul>
      <li><router-link to="/example01">显示内容</router-link></li>
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
              interface & ref()
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
          <li>
            <router-link to="/example06-02">Form Binding2</router-link>
          </li>
        </ul>
      </li>
      <li>
        Vuex
        <ul>
          <li>
            <router-link to="/example07-01">
              state
            </router-link>
          </li>
          <li>
            <router-link to="/example07-02">
              Mutations
            </router-link>
          </li>
          <li>
            <router-link to="/example07-03">
              actions
            </router-link>
          </li>
          <li>
            <router-link to="/example07-04">
              mapState & Getters
            </router-link>
          </li>
        </ul>
      </li>
      <li>
        Passing Data to child component
        <ul>
          <li>
            <router-link to="/example08-01">
              Example
            </router-link>
          </li>
          <li>
            <router-link to="/example08-02">
              Example - 2
            </router-link>
          </li>
        </ul>
      </li>
      <li>
        axios
        <ul>
          <li>
            <router-link to="/example09-01">
              github
            </router-link>
          </li>
        </ul>
      </li>
      <li>
        mock
        <ul>
          <li>
            <router-link to="/example10-01">
              axios-mock-adapter
            </router-link>
          </li>
          <li>
            <router-link to="/example10-02">
              axios & mock & vuex
            </router-link>
          </li>
        </ul>
      </li>
      <li>
        Nested Routes
        <ul>
          <li>
            <router-link to="/example11-01">
              Nested Routes
            </router-link>
          </li>
        </ul>
      </li>
      <li>
        setup route
        <ul>
          <li>
            <router-link to="/example12/students/12/homeworks/1">
              sid:12; hid:1
            </router-link>
          </li>
          <li>
            <router-link to="/example12/students/74/homeworks/2">
              sid:74; hid:2
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
    <h1>Homework</h1>
    <ul>
      <li>
        <router-link to="/homework01">
          Homework - 1
        </router-link>
      </li>
      <li>
        <router-link to="/homework02">
          Homework - 2
        </router-link>
      </li>
    </ul>
    <h1>Integrating with backend</h1>
    <ul>
      <li>
        <router-link to="/example13">
          Integrating with backend
        </router-link>
      </li>
    </ul>
  </div>
</template>
