<template>
  <!-- vue/no-duplicate-attributes -->
  <div a="1" a="0" b="2" c="3" d="4">
    <!-- vue/no-parsing-error -->
    {{ . }}
    {{ foo bar }}
    <div :class="*abc*" / @click="def">
      </span>
    </div id="ghi">

    <!-- vue/no-textarea-mustache -->
    <textarea>{{ message }}</textarea>

    <!-- vue/require-v-for-key -->
    <!-- vue/no-use-v-if-with-v-for-->
    <ol v-for="i in 5" v-if="todo.shown">
      <li>item</li>
    </ol>

    <!-- vue/require-component-is -->
    <component is="type"/>

    <!-- vue/use-v-on-exact -->
    <button v-on:click="foo" v-on:click.ctrl="foo"></button>

    <!-- vue/valid-v-bind -->
    <div v-bind/>
    <div :aaa/>
    <div v-bind:aaa.bbb="foo"/>

    <!-- vue/valid-v-cloak -->
    <div v-cloak:aaa/>
    <div v-cloak.bbb/>
    <div v-cloak="ccc"/>

    <!-- vue/valid-v-else-if -->
    <div v-else-if/>
    <div v-else-if:aaa="foo"/>
    <div v-else-if.bbb="foo"/>

    <!-- vue/valid-v-else -->
    <div v-else="foo"/>
    <div v-else:aaa/>
    <div v-else.bbb/>

    <!-- vue/valid-v-for -->
    <div v-for:aaa="todo in todos"/>
    <div v-for.bbb="todo in todos"/>

    <!-- vue/valid-v-html -->
    <div v-html/>
    <div v-html:aaa="foo"/>
    <div v-html.bbb="foo"/>

    <!-- vue/valid-v-if -->
    <div v-if/>
    <div v-if:aaa="foo"/>
    <div v-if.bbb="foo"/>

    <!-- vue/valid-v-model -->
    <input v-model>
    <input v-model:aaa="foo">
    <input v-model.bbb="foo">
    <input v-model="foo + bar">
    <div v-model="foo"/>
    <div v-for="todo in todos">
      <input v-model="todo">
    </div>

    <!-- vue/valid-v-on -->
    <div v-on/>
    <div v-on:click/>
    <div v-on:click.aaa="foo"/>
    <div @click/>

    <!-- vue/valid-v-once -->
    <div v-once:aaa/>
    <div v-once.bbb/>
    <div v-once="ccc"/>

    <!-- vue/valid-v-pre -->
    <div v-pre:aaa/>
    <div v-pre.bbb/>
    <div v-pre="ccc"/>

    <!-- vue/valid-v-show -->
    <div v-show/>
    <div v-show:aaa="foo"/>
    <div v-show.bbb="foo"/>

    <!-- vue/valid-v-text -->
    <div v-text/>
    <div v-text:aaa="foo"/>
    <div v-text.bbb="foo"/>

    <!------------------------------------------------>

    <!-- vue/html-closing-bracket-newline -->
    <div
      id="a" />

    <!-- vue/attribute-hyphenation -->
    <div myProp="prop"></div>

    <!-- vue/html-indent -->
      <div />

    <!-- vue/html-quotes -->
    <div id='id' />

    <!-- vue/html-self-closing -->
    <div></div>

    <!-- vue/no-spaces-around-equal-signs-in-attribute -->
    <div id = "id">a</div>

    <!-- vue/no-template-shadow -->
    <div>
      <div v-for="k in 5">
        <div slot-scope="{ k }">{{ k }}</div>
      </div>
    </div>

    <!-- vue/multiline-html-element-content-newline -->
    <table><tr><td>1</td>
    </tr></table>

    <!-- vue/html-end-tags -->
    <a>
  </div>
  <!-- vue/valid-template-root -->
  <div></div>
</template>

<script>
import HelloWorld from './HelloWorld';

export default {
  // vue/name-property-casing
  name: 'a-b',
  components: {
    // vue/no-unused-components
    HelloWorld
  },
  props: {
    $el: String, // vue/no-reserved-keys
    myProp: "Number", // vue/require-prop-type-constructor
    propC: {
      type: Object,
      default: [] // vue/require-valid-default-prop
    },
    'prop-test': String, // vue/prop-name-casing
  },
  // vue/no-shared-component-data
  data: {
    foo: null
  },
  computed: {
    // vue/no-async-in-computed-properties
    foo1: async function () {
      return await someFunc()
    },
    fullName () {
      // vue/no-side-effects-in-computed-properties
      this.firstName = 'lorem' // <- side effect
      return `${this.firstName} ${this.lastName}`
    },
    reversedArray () {
      // vue/no-side-effects-in-computed-properties
      return this.array.reverse() // <- side effect - orginal array is being mutated
    },
    // vue/return-in-computed-property
    baz () {
      if (this.baf) {
        return this.baf
      }
    },
  },
  methods: {
    // vue/no-dupe-keys
    foo () {}
  },
  // vue/require-render-return
  render () {
    if (true) {
      return (<div></div>)
    }
  }
};
</script>

