import { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import initialData from '../sources/initialData.ts'
import { Data } from '../types/TableTypes.ts'
import getTableData from '../api/getTableData.ts'
import { errorNotification } from '../../../shared/ui/tostify'
import { ToastContainer } from 'react-toastify'
import styles from '../scss/styles.module.scss'
import removeRow from '../api/removeRow.ts'
import rowDataFormatter from '../helpers/rowDataFormatter.ts'
import addNewRow from '../api/addNewRow.ts'
import editRow from '../api/editRow.ts'
import TableContainer from './TableContainer.tsx'
import Modal from './Modal.tsx'

const Main = () => {
  const [rows, setRows] = useState<Array<Data>>([])
  const [open, setOpen] = useState<boolean>(false)
  const [currentRow, setCurrentRow] = useState<Data>(initialData)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setLoading(true)
    getTableData()
      .then((response) => {
        if (!response?.error_code) {
          setRows(response?.data)
        } else {
          errorNotification(response?.error_text)
        }
      })
      .catch((error) => errorNotification(error?.message))
      .finally(() => setLoading(false))
  }, [])

  const handleClickOpen = (row = initialData) => {
    setCurrentRow(row)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setCurrentRow(initialData)
  }

  const handleSave = (row: Data) => {
    setLoading(true)
    const { id, ...rest } = rowDataFormatter(row)
    handleClose()
    if (id) {
      editRow(rest, id)
        .then((response) => {
          if (response?.status === 200) {
            const newRow = response?.data?.data
            setRows(rows.map((row) => (row.id === newRow.id ? newRow : row)))
          } else {
            errorNotification(response?.data?.error_text)
          }
        })
        .catch((err) => {
          errorNotification(err?.message)
        })
        .finally(() => setLoading(false))
    } else {
      addNewRow(rest)
        .then((response) => {
          if (!response?.error_code) {
            setRows([...rows, response.data])
          } else {
            errorNotification(response?.error_text)
          }
        })
        .catch((error) => errorNotification(error?.message))
        .finally(() => setLoading(false))
    }
  }

  const handleDelete = (id: string | null) => {
    setLoading(true)
    if (id) {
      removeRow(id)
        .then((response) => {
          if (!response.error_code) {
            setRows(rows.filter((row) => row.id !== id))
          } else {
            errorNotification(response?.error_text)
          }
        })
        .catch((error) => errorNotification(error?.message))
        .finally(() => {
          setLoading(false)
        })
    }
  }

  return (
    <div className={styles['table_container']}>
      <Button variant="outlined" onClick={() => handleClickOpen()}>
        Добавить запись
      </Button>
      <TableContainer
        loading={loading}
        rows={rows}
        handleClickOpen={handleClickOpen}
        handleDelete={handleDelete}
      />
      <Modal
        open={open}
        handleClose={handleClose}
        currentRow={currentRow}
        setCurrentRow={setCurrentRow}
        handleSave={handleSave}
      />
      <ToastContainer />
    </div>
  )
}

export default Main
