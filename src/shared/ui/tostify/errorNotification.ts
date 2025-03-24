import { toast } from 'react-toastify'

const errorNotification = (error: undefined | string) => {
  return toast.error(error || 'Ошибка загрузки данных.', {
    position: 'top-right',
    draggable: true,
    pauseOnHover: true,
    autoClose: 5000,
  })
}

export default errorNotification
