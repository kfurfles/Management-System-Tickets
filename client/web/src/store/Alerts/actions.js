import swal from 'sweetalert2/dist/sweetalert2.min.js'
import 'sweetalert2/dist/sweetalert2.min.css'

export default {
  success () {
    return swal({
      showConfirmButton: false,
      timer: 2000,
      type: 'success',
      title: 'Operação concluida com sucesso'
    })
  },
  async confirmDelete () {
    const response = await swal(({
      title: 'Você tem certeza ?',
      text: 'Esta ação é irreversivel',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#babaca',
      confirmButtonText: 'SIM FAZER ISTO',
      cancelButtonText: 'Cancelar'
    }))
    if (response.hasOwnProperty('value')) {
      return true
    } else {
      return false
    }
  }
}
