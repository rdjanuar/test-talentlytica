import React, { useReducer } from "react";

const KEY_MAHASISWA = {
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

type ActionType =
  | {
      type: "aspek_penilaian_1";
      payload: Mahasiswa;
    }
  | {
      type: "aspek_penilaian_2";
      payload: Mahasiswa;
    }
  | {
      type: "aspek_penilaian_3";
      payload: Mahasiswa;
    }
  | {
      type: "aspek_penilaian_4";
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

  const handlePenilaianOne = (
    e: React.ChangeEvent<HTMLSelectElement>,
    i: number
  ) => {
    dispatch({
      type: `aspek_penilaian_1`,
      payload: {
        ...state.aspek_penilaian_1,
        [`mahasiswa_${i}`]: Number(e.target.value),
      },
    });
  };

  const handlePenilaianTwo = (
    e: React.ChangeEvent<HTMLSelectElement>,
    i: number
  ) => {
    dispatch({
      type: `aspek_penilaian_2`,
      payload: {
        ...state.aspek_penilaian_2,
        [`mahasiswa_${i}`]: Number(e.target.value),
      },
    });
  };
  const handlePenilaianThree = (
    e: React.ChangeEvent<HTMLSelectElement>,
    i: number
  ) => {
    dispatch({
      type: `aspek_penilaian_3`,
      payload: {
        ...state.aspek_penilaian_3,
        [`mahasiswa_${i}`]: Number(e.target.value),
      },
    });
  };

  const handlePenilaianFour = (
    e: React.ChangeEvent<HTMLSelectElement>,
    i: number
  ) => {
    dispatch({
      type: `aspek_penilaian_4`,
      payload: {
        ...state.aspek_penilaian_4,
        [`mahasiswa_${i}`]: Number(e.target.value),
      },
    });
  };

  return {
    state,
    handlePenilaianOne,
    handlePenilaianTwo,
    handlePenilaianThree,
    handlePenilaianFour,
  };
};
