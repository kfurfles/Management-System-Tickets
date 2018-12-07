export default {
  props: {
    value: {
      required: true,
      type: Object
    }
  },
  methods: {
    updateData (pValue, prop) {
      const newValue = {}
      let notUpdateProps = []

      Object.keys(this.$refs).map(prop => {
        newValue[prop] = getPropName(this, prop)
      })

      if (pValue && prop) {
        newValue[prop] = pValue
      } else {
        notUpdateProps.map(key => (newValue[key] = this.value[key]))
      }
      this.$emit('input', newValue)
    }

  }
}
const getPropName = (vm, prop) => {
  if (vm.$refs.hasOwnProperty(prop)) {
    return vm.$refs[prop].$el.value
  } else {
    return ''
  }
}
