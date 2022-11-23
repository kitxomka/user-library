import { createSlice } from '@reduxjs/toolkit';
import { isFormValid } from '../utils/user.utils'


const initialState = {
  usersList: [],
  filterBy: '',
  isEditMode: false,
  editSaveDisabled: true,
  deleteModal: {
    isVisible: false,
    userId: null,
    userName: {}
  },
  editModal: {
    isVisible: false,
    userId: null,
    firstName: '',
    lastName: '',
    userEmail: '',
    country: '',
    city: '',
    street: ''
  }
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetchUsers: (state, action) => {
      state.usersList = action.payload;
    },
    updateFilterBy: (state, action) => {
      state.filterBy = action.payload;
    },
    removeUserFromList: (state, action) => {
      const newUsersList = state.usersList.filter(user => user.login.uuid !== state.deleteModal.userId);
      state.usersList = newUsersList;
      state.deleteModal.isVisible = false;
    },
    setDeleteModal: (state, action) => {
      state.deleteModal = { ...state.deleteModal, ...action.payload };
    },
    setEditUserModal: (state, action) => {
      state.isEditMode = true;
      state.editSaveDisabled = true;

      if (action.payload.isVisible) {
        state.editModal = {
          isVisible: action.payload.isVisible,
          userId: action.payload.userDetails.login.uuid,
          firstName: action.payload.userDetails.name.first,
          lastName: action.payload.userDetails.name.last,
          userEmail: action.payload.userDetails.email,
          country: action.payload.userDetails.location.country,
          city: action.payload.userDetails.location.city,
          street: action.payload.userDetails.location.street.name
        }
      } else {
        state.isEditMode = false;
        state.editModal = { ...initialState.editModal, isVisible: action.payload.isVisible };
      }
    },
    changeUserDetails: (state, action) => {
      let fieldName = action.payload.fieldName;
      const newEditModalState = state.editModal;
      newEditModalState[fieldName] = action.payload.value;
      state.editSaveDisabled = isFormValid(newEditModalState);
      state.editModal = newEditModalState;
    },
    userDetailsUpdate: (state, action) => {
      const userToUpdate = state.usersList.find(user => user.login.uuid == state.editModal.userId);
      userToUpdate.name.first = state.editModal.firstName;
      userToUpdate.name.last = state.editModal.lastName;
      userToUpdate.email = state.editModal.userEmail;
      userToUpdate.location.country = state.editModal.country;
      userToUpdate.location.city = state.editModal.city;
      userToUpdate.location.street.name = state.editModal.street;
      state.editModal = {
        isVisible: false
      }
    },
    setEditSaveDisabled: (state, action) => {
      state.editSaveDisabled = action.payload;
    }
  }
});

export const { fetchUsers, updateFilterBy, setEditMode, removeUserFromList, setDeleteModal, setEditUserModal, changeUserDetails, setEditModal, userDetailsUpdate, setEditSaveDisabled } = userSlice.actions;
export default userSlice.reducer;