import React, { useReducer } from "react";

type Mahasiswa = {
  mahasiswa_1: number;
  mahasiswa_2: number;
  mahasiswa_3: number;
  mahasiswa_4: number;
  mahasiswa_5: number;
  mahasiswa_6: number;
  mahasiswa_7: number;
  mahasiswa_8: number;
  mahasiswa_9: number;
  mahasiswa_10: number;
};

const KEY_MAHASISWA: Mahasiswa = {
  mahasiswa_1: 1,
  mahasiswa_2: 1,
  mahasiswa_3: 1,
  mahasiswa_4: 1,
  mahasiswa_5: 1,
  mahasiswa_6: 1,
  mahasiswa_7: 1,
  mahasiswa_8: 1,
  mahasiswa_9: 1,
  mahasiswa_10: 1,
};

const initialState = {
  aspek_penilaian_1: {
    ...KEY_MAHASISWA,
  },
  aspek_penilaian_2: {
    ...KEY_MAHASISWA,
  },
  aspek_penilaian_3: {
    ...KEY_MAHASISWA,
  },
  aspek_penilaian_4: {
    ...KEY_MAHASISWA,
  },
};

type ActionType = {
  type: `aspek_penilaian_${number}`;
  payload: Mahasiswa;
};

function reducer(state: typeof initialState, action: ActionType) {
  switch (action.type) {
    case "aspek_penilaian_1":
      return {
        ...state,
        aspek_penilaian_1: action.payload,
      };
    case "aspek_penilaian_2":
      return {
        ...state,
        aspek_penilaian_2: action.payload,
      };
    case "aspek_penilaian_3":
      return {
        ...state,
        aspek_penilaian_3: action.payload,
      };
    case "aspek_penilaian_4":
      return {
        ...state,
        aspek_penilaian_4: action.payload,
      };
    default:
      throw new Error();
  }
}

export const usePenilaian = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handlePenilaian = (
    e: React.ChangeEvent<HTMLSelectElement>,
    idx: number,
    i: number
  ) => {
    dispatch({
      type: `aspek_penilaian_${idx}`,
      payload: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        ...state[`aspek_penilaian_${idx}`],
        [`mahasiswa_${i}`]: Number(e.target.value),
      },
    });
  };

  return {
    state,
    handlePenilaian,
  };
};

