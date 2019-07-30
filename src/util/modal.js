import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
const Modal = (contet,type, nameFunction, arg) => {
  return MySwal.fire({
    width: 'auto',
    text: contet,
    type: type,
    onClose: () =>
    {
      if(nameFunction!== undefined) {
        nameFunction(arg)
      }

    }
})
}


export const ModalSucces = (msg, nameFunction, arg) =>{
  Modal(msg,'success', nameFunction, arg)
}

export const ModalError = (msg, nameFunction, arg) =>{
  Modal(msg,'error', nameFunction, arg)
}


export const ModalConfirm = (contet, FunctionName, value) => {
  return MySwal.fire({
    width: 'auto',
    type: 'info',
    text: contet,
    cancelButtonColor: '#dc3545',
    showCancelButton: true,
    reverseButtons: true
}).then((result) => {
  if (result.value) {
    FunctionName(value)
  }
})
}
