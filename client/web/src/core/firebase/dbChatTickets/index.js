import firebase from '@/core/firebase'
export const db = firebase.firestore()

export default class dbTickets {
  constructor () {
    this.db = db
    this.db.settings({ timestampsInSnapshots: true })
    this.db.enablePersistence()
    this.collections = {
      chat: 'chat',
      tickets: 'tickes'
    }
  }
  newText (collection, payload) {
    return this.db.collection(collection).add(payload)
      .then(function (docRef) {
        console.log('Document written with ID: ', docRef.id)
        return true
      })
      .catch(function (error) {
        console.error('Error adding document: ', error)
      })
  }

  async getMessagesByTicketId (id) {
    const chatRef = this.db.collection(this.collections.chat)
    let snapShot = await chatRef.where('ticketId', '==', id).get()
    return snapShot
  }
}
