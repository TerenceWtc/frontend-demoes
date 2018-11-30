const checkBox = {
  status: 200,
  data: [
    {
      checkAll: false,
      groupName: 'first group',
      checkGroup: [
        {
          checkMember: false,
          name: '1st item',
          id: 1
        },
        {
          checkMember: false,
          name: '2nd item',
          id: 2
        }
      ]
    },
    {
      checkAll: false,
      groupName: 'second group',
      checkGroup: [
        {
          checkMember: false,
          name: '1st item',
          id: 3
        },
        {
          checkMember: false,
          name: '2nd item',
          id: 4
        },
        {
          checkMember: false,
          name: '3rd item',
          id: 5
        }
      ]
    }
  ]
}

export default {
  GetData: () => {
    return checkBox
  }
}
