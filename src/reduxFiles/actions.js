import axios from "axios";

// export const SELECTIMAGE = "SELECTIMAGE";
export const SHOWMODAL = "SHOWMODAL";
export const HANDLETOGGLE = "HANDLETOGGLE";
// export const HANDLECHANGE = "HANDLECHANGE";
export const HANDLESUBMIT = "HANDLESUBMIT";
export const FETCH_GROUPS = 'fetchGroups';
export const CONTENT_TOGGLE = 'contentToggle';
export const NEW_CHAT_MSG = 'newChatMsg';
export const BACK_TO_GROUP_LIST = 'backToGroupList';
export const GROUP_MEMBER_LIST = 'groupMemberList';
export const POTENTIAL_MEMBERS = 'Potential Group Members';
export const NEW_MEMBER = 'New Member';
export const REMOVE_MEMBER = 'Remove Member'

// export function selectImage(payload){
//     return {
//     type: SELECTIMAGE,
//     payload
//   }
// }

export function showModal(){
  console.log('createGroup clicked')
  return{
    type: SHOWMODAL
  }
}

export function handleSidebarToggle() {
  return {
    type: HANDLETOGGLE
  }
}

export const handleBackToGroupList = () => {
  return {
    type: BACK_TO_GROUP_LIST
  }
}

export const handleContentToggle = (id) => {
  console.log(id);
  return {
    type: CONTENT_TOGGLE,
    payload: id
  }
             // (Shall be used when backend is ready)
  // axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  //     .then(res => { console.log(res.data)
  //       const payloadData = {
  //         currID: res.data.id,
  //         chatLog: res.data.chatLog.messages
  //       }
  //     dispatch({
  //       type: CONTENT_TOGGLE,
  //       payload : payloadData,
  //     })
  // })
}

export const fetchGroups = () => dispatch => {
  axios.get('https://jsonplaceholder.typicode.com/users?_limit=7')
  .then( res =>
    dispatch({
      type: FETCH_GROUPS,
      payload: res.data
    })
  )
}

export const fetchPotentialGroupMembers = () => dispatch => {
  axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      console.log(res.data, 'cdm');
      dispatch({
        type: POTENTIAL_MEMBERS,
        payload: res.data
      })
    }
  )
}

export const removeMember = (id) => {
  return {
    type: REMOVE_MEMBER,
    payload: id
  }
}

export const addGroupMember = (id, newGroupMember) => {
  return {
    type: NEW_MEMBER,
    payload: newGroupMember
  }
}

//              (Shall be used when backend is ready)
// export const groupMemberList = (id, newGroupMember) => dispatch => {
//   axios.patch(`https://jsonplaceholder.typicode.com/users/${id}`, {
//     groupMemberList: newGroupMember
//   }).then(res => 
//     dispatch({
//       type: GROUP_MEMBER_LIST,
//       payload: res.data
//     }))
// }

export const handleCreatedGroupSubmit = (userInputs) => {
  console.log('submitted form')
  return {
    type: HANDLESUBMIT,
    payload: userInputs
  }
              //(Shall be used when backend is ready)
  // fetch('https://jsonplaceholder.typicode.com/users', {
  //   method: 'POST',
  //   headers: {
  //     'content-type': 'application/json'
  //   },
  //   body: JSON.stringify(userInputs)
  // })
  // .then(res => res.json())
  // .then(group => 
  //   dispatch({
  //     type: HANDLESUBMIT,
  //     payload: group
  //   })
  // )
}

export const newChatMessage = (newChatDetails) => {
  return {
    type: NEW_CHAT_MSG,
    payload: newChatDetails
  }
                // (Shall be used when backend is ready)
  // fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
  //   method: 'PATCH',
  //   headers: {
  //     'content-type': 'application/json; charset=UTF-8'
  //   },
  //   body: JSON.stringify({
  //     chatLog: newChatDetails
  //   })
  // }).then(res => res.json())
  // .then( updatedGroup => 
  //   dispatch({
  //     type: NEW_CHAT_MSG,
  //     payload: updatedGroup
  //   }))
}