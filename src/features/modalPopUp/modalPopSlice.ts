
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IModalPopType } from '../../interfaces/modal.interface';

const initialState = {
  openModal: false,
  modalType: '',
  // isDone: [],
  // isActive: '',
} as IModalPopType;

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setOpenModal(
      state: IModalPopType,
      { payload }: PayloadAction<{ openModal: boolean; modalType: string }>,
    ) {
      state.openModal = payload.openModal;
      state.modalType = payload.modalType;
    },
    // updateIsDone(state: IModalPopType, { payload }: PayloadAction<number>) {
    //   state.isDone = state.isDone.push(payload);
    // },
  },
});

export const { setOpenModal } = modalSlice.actions;

export default modalSlice.reducer;
