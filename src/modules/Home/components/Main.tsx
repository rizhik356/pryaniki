import { useEffect, useState } from 'react'
import { Table, TableContainer, Button } from '@mui/material'
import initialData from '../sources/initialData.ts'
import Head from './Head.tsx'
import { Data } from '../types/TableTypes.ts'
import Body from './Body.tsx'
import Modal from './Modal.tsx'
import getTableData from '../api/getTableData.ts'
import { errorNotification } from '../../../shared/ui/tostify'
import { ToastContainer } from 'react-toastify'
import tableDataFormatter from '../helpers/tableDataFormatter.ts'

const Main = () => {
  const [rows, setRows] = useState<Array<Data>>([])
  const [open, setOpen] = useState(false)
  const [currentRow, setCurrentRow] = useState(initialData)

  useEffect(() => {
    getTableData()
      .then((response) => {
        if (!response?.error_code) {
          const formatData = tableDataFormatter(response?.data)
          setRows(formatData)
        } else {
          errorNotification(response?.error_text)
        }
      })
      .catch((error) => errorNotification(error?.message))
  }, [])

  const handleClickOpen = (row = initialData) => {
    setCurrentRow(row)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setCurrentRow(initialData)
  }

  const handleSave = () => {
    if (currentRow.id !== null) {
      setRows(rows.map((row) => (row.id === currentRow.id ? currentRow : row)))
    } else {
      setRows([...rows, { ...currentRow, id: Date.now().toString() }])
    }
    handleClose()
  }

  const handleDelete = (id: string | null) => {
    if (id) {
      setRows(rows.filter((row) => row.id !== id))
    }
  }

  return (
    <div>
      <Button variant="outlined" onClick={() => handleClickOpen()}>
        Добавить запись
      </Button>
      <TableContainer>
        <Table>
          <Head />
          <Body
            rows={rows}
            handleEditClick={handleClickOpen}
            handleDelete={handleDelete}
          />
        </Table>
      </TableContainer>
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
