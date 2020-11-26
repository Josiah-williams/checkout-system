import * as types from"./actionTypes";

const itemState = {
    items:[],
    isLoadingItems: false,
    isAddingItem: false,
    isDeletingItem: false,
    error: null
  };
  export function itemReducer(state = itemState, action) {
    switch (action.type) {
      case types.GET_ITEMS_START:
        return {
          ...state,
          isFetching:true,
          error: null
        };
      case types.GET_ITEMS_SUCCESS:
        console.log(action.payload)
        return {
          ...state,
          items: action.payload,
          isFetching:false,
          error: null
        };
      case types.GET_ITEMS_FAIL:
        return {
          ...state,
          isFetching:false,
          error:action.payload,
          items: null
        };
        case types.ADD_ITEMS_START:
        return {
          ...state,
  
          isAddingItem: true,
          error: null
        };
        case types.ADD_ITEMS_SUCCESS:
          return {
            ...state,
            isAddingItem: false,
            items: state.items.concat(action.payload),
            error: null
          };
          case types.ADD_ITEMS_FAILURE:
            return {
              ...state,
              isAddingItem: false,
              error: action.payload
            };
        case types.DELETE_ITEM_START:
          return {
            ...state,
            isDeletingItem:true,
            error: null
          };
          case types.DELETE_ITEM_SUCCESS:
            return {
              ...state,
              isDeletingItem:false,
              error: null
            };
            case types.DELETE_ITEM_FAILURE:
              return {
                ...state,
                isDeletingItem: false,
                error: action.payload
              };
  
      default:
        return state;
      }
    }

   export function shoppingCartReducer (state = [], action) {
      switch (action.type) {
        case 'ADD_ITEM':
          return state.concat(action.item)
        default:
          return state
      }
    }
    
