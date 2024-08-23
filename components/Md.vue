<script lang="ts" setup>
import MarkdownIt from 'markdown-it';

import {PluginSimple,PluginWithOptions,PresetName,Options} from 'markdown-it';

import { computed, useSlots } from 'vue'


const props = withDefaults(
  defineProps<{
    /** Markdown text to render */
    source: string;
    /**
     * Custom class name to apply to markdown container
     * @default 'vue-md-it-wrapper'
     */
    mdWrapperClass?: string;
    plugins?: (
      | PluginSimple
      | [PluginSimple | PluginWithOptions<any>, any]
    )[];
    preset?: PresetName;
    options?: Options;
  }>(),
  {
    mdWrapperClass: 'vue-md-it-wrapper',
  },
);

const slots = useSlots()

const children = slots.default!()[0].children;
console.error(slots.default!())

const md = props.preset
  ? new MarkdownIt(props.preset, props.options)
  : props.options
    ? new MarkdownIt(props.options)
    : new MarkdownIt();

if (props.plugins) registerPlugins();

function registerPlugins() {
  props.plugins?.forEach((item) => {
    const plugin = toArray(item);
    md.use(plugin[0], plugin[1]);
  });
}

function toArray<T = any>(val: T) {
  return Array.isArray(val) ? val : [val, undefined];
}
</script>

<template>
  <div v-if="children && children.toString()"  :class="mdWrapperClass" v-html="md.render(children.toString())"></div>
</template>