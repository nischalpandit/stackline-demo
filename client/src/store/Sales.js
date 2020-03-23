import { SalesNavModal, graphNavModal } from '../components/SalesDemo/Modal'


const salesDataLoading = "SALES_DATA_LOADING";
const salesDataLoadingSuccess = "SALES_DATA_LOADING_SUCCESS";
const salesDataLoadingError = "SALES_DATA_LOADING_ERROR";

const switchSalesView = "SWITCH_SALES_VIEW";
const switchGraphView = "SWITCH_GRAPH_VIEW";

const initialState = {
    data: [],
    loading: false,
    error: '',
    graphView: graphNavModal.RETAILSALES,
    view: SalesNavModal.SALES
};

export const dispatchLoadSalesData = () => dispatch => {
    dispatch({ type: salesDataLoading });

    fetch('/api/salesData')
        .then(res => res.json())
        .then(
            data => dispatch({ type: salesDataLoadingSuccess, data }),
            error => dispatch({ type: salesDataLoadingError, error: error.message || 'Unknown Error !!!' })
        );
}

export const dispatchSwitchSalesView = (view) => dispatch => {
    dispatch({ type: switchSalesView, view })
}

export const dispatchSwitchGraphView = (view) => dispatch => {
    dispatch({ type: switchGraphView, view })
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case salesDataLoading:
            return { ...state, loading: true };
        case salesDataLoadingSuccess:
            return { ...state, loading: false, data: action.data };
        case salesDataLoadingError:
            return { ...state, loading: false, error: action.error };
        case switchSalesView:
            return { ...state, view: action.view }
        case switchGraphView:
            return { ...state, graphView: action.view }
        default:
            return state;
    }
}