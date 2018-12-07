import axios from 'axios'
export default class GoogleTranslate {
  constructor () {
    this.sourceLang = 'en'
    this.targetLang = 'pt'
  }

  async translate (sourceText) {
    const url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=' +
                  this.sourceLang + '&tl=' + this.targetLang + '&dt=t&q=' + encodeURI(sourceText)

    const { data } = await axios.get(url)

    return data[0][0][0]
  }
}
