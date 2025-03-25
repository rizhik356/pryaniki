import {
  Box,
  CircularProgress,
  Table,
  TableContainer as Container,
} from '@mui/material'
import Head from './Head.tsx'
import Body from './Body.tsx'
import { ContainerProps } from '../types/TableTypes.ts'

const TableContainer = ({
  loading,
  rows,
  handleClickOpen,
  handleDelete,
}: ContainerProps) => {
  return (
    <Container sx={{ height: 'calc(100% - 23.5px)' }}>
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <CircularProgress />
        </Box>
      ) : (
        <Table stickyHeader aria-label="sticky table">
          <Head />
          <Body
            rows={rows}
            handleEditClick={handleClickOpen}
            handleDelete={handleDelete}
          />
        </Table>
      )}
    </Container>
  )
}

export default TableContainer
