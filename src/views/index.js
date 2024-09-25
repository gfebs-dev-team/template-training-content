//@index('./*.vue', f=> `import ${f.name} from '${f.path}.vue';`)
import S01BaseSlide from './S01BaseSlide.vue'
import S02ImageSlide from './S02ImageSlide.vue'
import S03DoubleColumn from './S03DoubleColumn.vue'
import S04TripleColumn from './S04TripleColumn.vue'
import S05QuestionChoice from './S05QuestionChoice.vue'
import S06TrueFalse from './S06TrueFalse.vue'
import S07TermsAndDefinitions from './S07TermsAndDefinitions.vue'
import S08OutlineSummary from './S08OutlineSummary.vue'
//@endindex
export default {
  //@index('./*.vue', f=> `${f.name},`)
  S01BaseSlide,
  S02ImageSlide,
  S03DoubleColumn,
  S04TripleColumn,
  S05QuestionChoice,
  S06TrueFalse,
  S07TermsAndDefinitions,
  S08OutlineSummary
  //@endindex
}

//Generate Index
//CMD + K , I
