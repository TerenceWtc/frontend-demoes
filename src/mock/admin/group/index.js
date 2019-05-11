const groupIdAndNameResponse = {
  status: 200,
  message: 'success',
  data: undefined
}

const groupData = [
  {
    id: 1,
    name: 'admin'
  },
  {
    id: 2,
    name: 'guest'
  }
]

export default {
  GroupIdAndName: () => {
    groupIdAndNameResponse.data = groupData
    return groupIdAndNameResponse
  }
}
