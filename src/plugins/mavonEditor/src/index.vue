<template>
    <mavon-editor 
    :value="value"
    :subfield="false"
    defaultOpen="preview"
    :toolbarsFlag="false"
    :editable="false"
    :scrollStyle="true"
    >
    </mavon-editor>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

export default {
    name: 'VMarkdown',
    components: {
        MavonEditor: mavonEditor
    },
    props: {
        value: {
            type: String,
            required: true
        }
    },
}
</script>
