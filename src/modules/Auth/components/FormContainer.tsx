import { Formik, Form, Field, ErrorMessage, FieldProps } from 'formik'
import * as Yup from 'yup'
import { TextField, Button, CircularProgress } from '@mui/material'
import styles from '../scss/styles.module.scss'
import { Values } from '../types/LoginTypes.ts'
import loginInputs from '../sources/loginInputs.ts'
import loginValuesFormatter from '../helpers/loginValuesFormatter.ts'
import postLoginValues from '../api/postLoginValues.ts'
import { useDispatch } from 'react-redux'
import { setToken } from '../../../shared/store/slices/authSlice.ts'
import { errorNotification } from '../../../shared/ui/tostify'
import { ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { viewRoutes } from '../../../constants/routes/viewRoutes.ts'
import { useState } from 'react'

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Логин обязателен'),
  password: Yup.string().required('Пароль обязателен'),
})

const FormContainer = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [loading, setLoading] = useState<boolean>(false)

  const handleSubmit = (values: Values) => {
    const formatValues = loginValuesFormatter(values)
    postLoginValues(formatValues)
      .then((response) => {
        setLoading(true)
        if (!response.error_code) {
          localStorage.setItem('token', response?.data?.token)
          dispatch(setToken(response?.data?.token))
          navigate(viewRoutes.home)
        } else {
          errorNotification(response?.error_text)
        }
      })
      .catch((error: Error) => {
        errorNotification(error?.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <div className={`${styles.side} ${styles['form_container']}`}>
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur }) => (
          <Form className={styles.form}>
            {loginInputs.map(({ name, label, variant, fullWidth }, index) => (
              <div className={styles['form_item']} key={index}>
                <Field name={name}>
                  {({ field }: FieldProps) => (
                    <TextField
                      {...field}
                      label={label}
                      variant={variant}
                      fullWidth={fullWidth}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  )}
                </Field>
                <ErrorMessage
                  className={styles.error}
                  name={name}
                  component="div"
                />
              </div>
            ))}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={loading}
            >
              {loading ? (
                <>
                  <CircularProgress size={24} style={{ marginRight: 8 }} />
                  Загрузка...
                </>
              ) : (
                'Войти'
              )}
            </Button>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </div>
  )
}

export default FormContainer
