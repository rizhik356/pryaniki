import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material'
import { Data, ModalProps, ValidationSchema } from '../types/TableTypes.ts'
import modalInputs from '../sources/modalInputs.ts'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import DateField from './DateField.tsx'
import InputField from './InputField.tsx'
import styles from '../scss/styles.module.scss'

const validationSchema = Yup.object().shape(
  modalInputs.reduce((acc, { valueKey }): ValidationSchema => {
    acc[valueKey] = Yup.string().required('Это поле обязательно')
    return acc
  }, {} as ValidationSchema),
)

const Modal = ({ open, handleClose, currentRow, handleSave }: ModalProps) => {
  const onSubmit = (values: Data) => {
    handleSave(values)
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        {currentRow.id ? 'Изменить запись' : 'Добавить запись'}
      </DialogTitle>
      <DialogContent>
        <Formik
          initialValues={currentRow}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ setFieldValue, values }) => (
            <Form className={styles['modal_form']}>
              {modalInputs.map(
                ({ autoFocus, margin, label, type, valueKey }) =>
                  type === 'datetime' ? (
                    <DateField
                      key={valueKey}
                      margin={margin}
                      autoFocus={autoFocus}
                      label={label}
                      valueKey={valueKey}
                      value={values[valueKey]}
                      setFieldValue={setFieldValue}
                    />
                  ) : (
                    <InputField
                      key={valueKey}
                      margin={margin}
                      label={label}
                      autoFocus={autoFocus}
                      type={type}
                      valueKey={valueKey}
                    />
                  ),
              )}
              <DialogActions>
                <Button onClick={handleClose}>Отмена</Button>
                <Button type="submit">Сохранить</Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  )
}

export default Modal
