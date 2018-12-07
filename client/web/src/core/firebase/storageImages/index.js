import firebase, { firebaseInstance } from '@/core/firebase'

export default class storageImages {
  constructor () {
    this.storageRef = firebaseInstance.storage().ref()
    this.metadata = {
      contentType: 'image/jpeg'
    }
  }
  async saveImage (file) {
    // Upload file and metadata to the object 'images/mountains.jpg'
    var uploadTask = this.storageRef.child('images/' + file.name).put(file, this.metadata)

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
      function (snapshot) {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log('Upload is ' + progress + '% done')
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused')
            break
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running')
            break
        }
      },
      function (error) {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break

          case 'storage/canceled':
            // User canceled the upload
            break

          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break
        }
      },
      function () {
        // Upload completed successfully, now we can get the download URL
        return uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          console.log('File available at', downloadURL)
        })
      })

    return uploadTask.snapshot.ref.getDownloadURL()
  }

  async getImageByName (name) {
    if (name) {
      const url = await this.storageRef.child('images/' + name).getDownloadURL()

      // Or inserted into an <img> element:
      var img = document.createElement('img')
      img.src = url
      return img
    }
  }
}
