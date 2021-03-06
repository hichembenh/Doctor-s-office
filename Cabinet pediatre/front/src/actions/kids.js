import { FETCH_KID,
    CREATE_KID,
    UPDATE_KID,
    DELETE_KID
} from '../constants/actionTypes';
import * as api from '../api/index.js';

export const getKids = () => async (dispatch) => {
    try {
        const { data } = await api.fetchKid();

        dispatch({ type: FETCH_KID, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const createKid = (kid) => async (dispatch) => {
    try {
        const { data } = await api.createKid(kid);
        console.log(kid)
        dispatch({ type: CREATE_KID, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const updateKid = (id, kid) => async (dispatch) => {
    try {
        const { data } = await api.updateKid(id, kid);

        dispatch({ type: UPDATE_KID, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const deleteKid = (id) => async (dispatch) => {
    try {
        await api.deleteKid(id);
        console.log('deleted')

        dispatch({ type: DELETE_KID, payload: id });
    } catch (error) {
        console.log(error.message);
    }
};
export const updateVacc = (id, vacc) => async (dispatch) => {
    try {
        const { data } = await api.updateKidVaccin(id, vacc);

        dispatch({ type: UPDATE_KID, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};
