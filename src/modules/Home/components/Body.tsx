import { Button, TableBody, TableCell, TableRow } from '@mui/material'
import styles from '../scss/styles.module.scss'
import { BodyProps } from '../types/TableTypes.ts'

const Body = ({ rows, handleEditClick, handleDelete }: BodyProps) => {
  return (
    <TableBody>
      {rows.map((row) => (
        <TableRow key={row.id}>
          <TableCell>{row.companySigDate}</TableCell>
          <TableCell>{row.companySignatureName}</TableCell>
          <TableCell>{row.documentName}</TableCell>
          <TableCell>{row.documentStatus}</TableCell>
          <TableCell>{row.documentType}</TableCell>
          <TableCell>{row.employeeNumber}</TableCell>
          <TableCell>{row.employeeSigDate}</TableCell>
          <TableCell>{row.employeeSignatureName}</TableCell>
          <TableCell>
            <div className={styles['btn_container']}>
              <Button variant="outlined" onClick={() => handleEditClick(row)}>
                Изменить
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={() => handleDelete(row.id)}
              >
                Удалить
              </Button>
            </div>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}

export default Body
