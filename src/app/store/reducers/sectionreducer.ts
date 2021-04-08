import { ESectionActions, SectionActions } from "../Actions/section.action";
import {ISectionsState, initialSectionsState} from '../state/section.state'



export const SectionReducer  = (state = initialSectionsState, action: SectionActions):ISectionsState => {
    switch (action.type) {
      case ESectionActions.LoadSection:
        return state;
      case ESectionActions.SetCurrentSection:
          return {
              ...state, 
              currentSection:action.payload
          }  
      default:
        return state;
    }
  }