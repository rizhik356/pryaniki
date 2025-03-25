import { ModalInputs } from '../types/TableTypes.ts'

const modalInputs: Array<ModalInputs> = [
  {
    autoFocus: true,
    margin: 'dense',
    label: 'Дата подписи компании',
    type: 'datetime',
    valueKey: 'companySigDate',
  },
  {
    margin: 'dense',
    label: 'Имя подписи компании',
    type: 'text',
    valueKey: 'companySignatureName',
  },
  {
    margin: 'dense',
    label: 'Название документа',
    type: 'text',
    valueKey: 'documentName',
  },
  {
    margin: 'dense',
    label: 'Статус документа',
    type: 'text',
    valueKey: 'documentStatus',
  },
  {
    margin: 'dense',
    label: 'Тип документа',
    type: 'text',
    valueKey: 'documentType',
  },
  {
    margin: 'dense',
    label: 'Номер сотрудника',
    type: 'text',
    valueKey: 'employeeNumber',
  },
  {
    margin: 'dense',
    label: 'Дата подписи сотрудника',
    type: 'datetime',
    valueKey: 'employeeSigDate',
  },
  {
    margin: 'dense',
    label: 'Имя подписи сотрудника',
    type: 'text',
    valueKey: 'employeeSignatureName',
  },
]

export default modalInputs
