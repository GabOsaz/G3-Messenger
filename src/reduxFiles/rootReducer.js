import {SELECTIMAGE, SHOWMODAL, HANDLETOGGLE, HANDLESUBMIT, CONTENT_TOGGLE, FETCH_GROUPS, POTENTIAL_MEMBERS, NEW_MEMBER, REMOVE_MEMBER, NEW_CHAT_MSG, BACK_TO_GROUP_LIST} from './actions';

const initialState = {
  sidebarToggle: false,
  contentToggle: true,
  toggleModal: false,
  group: {},
  groups: [],
  newChatMsg: {},
  currChatLog:[],
  currChatID: null,
  potentialMember: [],
  groupMemberList: [
    {
      name: 'Alao',
      email: 'alao@example.com',
      id: 11
  }
  ]
}

function rootReducer(state=initialState, action){
  
   switch(action.type){
     case SHOWMODAL:
      return {
        ...state,
        toggleModal: !state.toggleModal
      }
      // case SELECTIMAGE:
      //   return {
      //     ...state,
      //     selectImage: action.payload
      //   }
      case HANDLETOGGLE:
        return {
          ...state,
          sidebarToggle: !state.sidebarToggle
        }
      case HANDLESUBMIT:
        const newGroup = action.payload
        return {
          ...state,
          toggleModal: !state.toggleModal,
          groups: [newGroup, ...state.groups]
          }
      case CONTENT_TOGGLE:
        const currID = action.payload;
        // const chatLog = action.payload.chatLog  (Shall be used when backend is ready)
        return {
          ...state,
          contentToggle: !state.contentToggle,
          currChatID: currID,
          // currChatMsgs: chatLog  (Shall be used when backend is ready)
        }
      case BACK_TO_GROUP_LIST:
        return {
          ...state,
          contentToggle: !state.contentToggle
        }
      case FETCH_GROUPS:
        const groupList = action.payload
        return {
          ...state,
          groups: groupList
        }
      case POTENTIAL_MEMBERS:
        return {
          ...state,
          potentialMember: action.payload
        }
      case NEW_CHAT_MSG:
        const messages = action.payload
        return {
          ...state,
          currChatLog: state.currChatLog.concat(messages)
        }
      case NEW_MEMBER:
        return {
          ...state,
          groupMemberList: [action.payload, ...state.groupMemberList]
        }
      case REMOVE_MEMBER:
        const id = action.payload
        return {
          ...state,
          groupMemberList: [...state.groupMemberList.filter(member => member.id !== id)]
        }
      default:
     return state}
}

export default rootReducer;