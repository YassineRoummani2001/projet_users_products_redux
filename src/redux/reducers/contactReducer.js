
const initialState = [
  { id: 0, name: "Yassine Roummanni", email: "YassineRoummanni@email.com", phone: 2606203862 },
  { id: 1, name: "Mohamed Mahmoudi", email: "MohamedMahmoudi@email.com", phone: 772119982 },
];

export const contactReducer =   (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;
    case "DELETE_CONTACT":
      const contactFilter = state.filter((contact) =>
        contact.id === action.payload ? null : contact
      );
      state = contactFilter;
      return state;
    case "UPDATE_CONTACT":
      const contactUpdate = state.filter((contact) =>
        contact.id === action.payload.id
          ? Object.assign(contact, action.payload)
          : contact
      );
      state = contactUpdate;
      return state;
    case "RESET_CONTACT":
      state = [{ name: null, email: null, phone: null }];
      return state;
    default:
      return state;
  }
}
