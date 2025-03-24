import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material'
import { ModalProps } from '../types/TableTypes.ts'
import modalInputs from '../sources/modalInputs.ts'

const Modal = ({
  open,
  handleClose,
  currentRow,
  setCurrentRow,
  handleSave,
}: ModalProps) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        {currentRow.id ? 'Изменить запись' : 'Добавить запись'}
      </DialogTitle>
      <DialogContent>
        {modalInputs.map(({ autoFocus, margin, label, type, valueKey }) => {
          return (
            <TextField
              margin={margin}
              key={valueKey}
              autoFocus={autoFocus}
              label={label}
              type={type}
              fullWidth
              variant={'standard'}
              value={currentRow[valueKey]}
              slotProps={
                type === 'text' ? undefined : { inputLabel: { shrink: true } }
              }
              onChange={(e) =>
                setCurrentRow({ ...currentRow, [valueKey]: e.target.value })
              }
            />
          )
        })}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Отмена</Button>
        <Button onClick={handleSave}>Сохранить</Button>
      </DialogActions>
    </Dialog>
  )
}

export default Modal
