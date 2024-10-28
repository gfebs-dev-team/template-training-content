//@index('./*.vue', f=> `import ${f.name} from '${f.path}.vue';`)
import S01Section from './S01Section.vue'
import S02BaseSlide from './S02BaseSlide.vue'
import S03ImageSlide from './S03ImageSlide.vue'
import S04DoubleColumn from './S04DoubleColumn.vue'
import S05TripleColumn from './S05TripleColumn.vue'
import S06QuestionChoice from './S06QuestionChoice.vue'
import S07TrueFalse from './S07TrueFalse.vue'
import S08OutlineSummary from './S08OutlineSummary.vue'
import S09TermsAndDefinitions from './S09TermsAndDefinitions.vue'
import S10MatchingQuestion from './S10MatchingQuestion.vue'
//@endindex
export default {
  //@index('./*.vue', f=> `${f.name},`)
  S01Section,
  S02BaseSlide,
  S03ImageSlide,
  S04DoubleColumn,
  S05TripleColumn,
  S06QuestionChoice,
  S07TrueFalse,
  S08OutlineSummary,
  S09TermsAndDefinitions,
  S10MatchingQuestion
  //@endindex
}

//Generate Index
//CMD + K , I
