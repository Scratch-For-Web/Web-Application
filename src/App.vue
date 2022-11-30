<template>
    <div id="app">
        <NavBar id="navSpace"></NavBar>
        <BlocklyComponent id="blocklySpace" :options="options"></BlocklyComponent>
    </div>
</template>

<script setup>
import { ref } from "vue";
import beautify from "js-beautify";
//import DarkTheme from '@blockly/theme-dark';
import { WorkspaceSearch } from '@blockly/plugin-workspace-search';

import BlocklyComponent from "./components/BlocklyComponent.vue";
//import BlocklyComponent from "./components/test.vue";
import './blockly/msg/js/en.js'
import toolbox from "./toolbox-json"

import Blockly from "blockly";

import "./blocks/blocks";
  

import NavBar from './components/NavBar/NavBar.vue'
  
const foo = ref();
const code = document.getElementById('code')
var options = {
          toolbox: toolbox,
          collapse: true,
          //        comments : false,
          //        disable : false,
          maxBlocks: Infinity,
          trashcan: true,
          renderer: "zelos",
          //        horizontalLayout : false,
          //        toolboxPosition : 'start',
          tooltips: true,
          css: true,
          media: 'media/',
          rtl: false,
          theme: 'dark',
          scrollbars: true,
          sounds: true,
          oneBasedIndex: true,
          zoom: {
            controls: true,
            wheel: true,
            startScale: 1.0,
            maxScale: 3,
            minScale: 0.3,
            scaleSpeed: 1.2,
            pinch: true
          },
          grid: {
            spacing: 20,
            length: 3,
            colour: '#ccc',
            snap: true
          },
          move: {
            scrollbars: {
              horizontal: true,
              vertical: true
            },
            drag: true,
            wheel: false
          }
        }

const showCode = () => {
  let htmlcode = (Blockly.JavaScript.workspaceToCode(foo.value.workspace));
  //code.src = "data:text/html;charset=utf-8," + encodeURIComponent(htmlcode);
  console.log(code.src)
};
</script>

<style scoped>
#app {
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
#blocklySpace {
    position: absolute;
    width: 100%;
    top:56px;
    height: calc(100% - 56px);
}
.boldtext {
    font-weight: bolder;
}
.testopa {
    opacity: 0.1;
}
</style>