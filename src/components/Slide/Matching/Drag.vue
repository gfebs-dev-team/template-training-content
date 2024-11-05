<script setup>
import { twMerge } from 'tailwind-merge'
import { startDrag, swap } from './draggable'
defineProps(['id', 'slideID', 'active'])
</script>

<template>
  <div
    :id="id"
    draggable="true"
    @drop.self.prevent="swap($event)"
    @dragstart="startDrag($event)"
    class="z-0 drag relative flex items-center justify-center outline-none p-4 pr-10 text-balance min-w-0 min-h-0 rounded-md text-xs sm:text-base cursor-pointer border-2 border-transparent bg-spacecadet text-aliceblue font-bold transition-all box-border"
    :class="active ? '-z-20 pointer-events-none' : ''"
    :data-slideID="slideID"
  >
    <slot />
  </div>
</template>
