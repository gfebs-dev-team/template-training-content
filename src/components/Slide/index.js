//@index('./*.vue', f=> `export {default as Slide${f.name}}  from '${f.path}.vue';`)
export { default as SlideBase } from './Base.vue'
export { default as SlideCheckpoint } from './Checkpoint.vue'
export { default as SlideColumns } from './Columns.vue'
export { default as SlideContainer } from './Container.vue'
export { default as SlideOutline } from './Outline.vue'
export { default as SlideSection } from './Section.vue'
//@endindex
export { Question as SlideQuestion } from './Question'
export { QuestionInput as SlideQuestionInput } from './Question'
export { Terms as SlideTerms } from './Terms'
