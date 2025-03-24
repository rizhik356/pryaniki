import { TableCell, TableHead, TableRow } from '@mui/material'
import columns from '../sources/columns.ts'

const Head = () => {
  return (
    <TableHead>
      <TableRow>
        {columns.map(({ name }) => (
          <TableCell key={name}>{name}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

export default Head
