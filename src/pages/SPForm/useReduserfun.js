const useReduserfun = (state, action) => {
  switch (action.type) {
    case 'Add Entry Reason':
      return {
        ...state,
        entryReason: [...state.entryReason, ''], // Add a new empty string to the array
      };
    case 'Remove Entry Reason':
      return {
        ...state,
        entryReason: state.entryReason.filter(
          (_, index) => index !== action.index
        ), // Remove the entry at the specified index
      };
    case 'Handle Input Change':
      return { ...state, [action.field]: action.payload };
    default:
      return state;
  }
};
export default useReduserfun;
