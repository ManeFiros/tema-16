export const DIA = 'DIA';
export const NOCHE = 'NOMCHE';

export const initialStateIsDeDia = false;

export const reducerIsDeDia = (state, action) => {
  switch (action.type) {
    case DIA:  return true;
    case NOCHE: return false;
    default: return state;
  }
}