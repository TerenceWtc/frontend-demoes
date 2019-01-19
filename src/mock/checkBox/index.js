const checkbox = {
  status: 200,
  data: [
    {
      checkAll: false,
      groupName: 'System (C:\\)',
      checkGroup: [
        {
          checkMember: false,
          name: 'DRIVERS',
          id: 1
        },
        {
          checkMember: false,
          name: 'Intel',
          id: 2
        },
        {
          checkMember: false,
          name: 'Program Files',
          id: 3
        },
        {
          checkMember: false,
          name: 'Program Files (x86)',
          id: 4
        },
        {
          checkMember: false,
          name: 'Windows',
          id: 5
        },
        {
          checkMember: false,
          name: 'User',
          id: 6
        }
      ]
    },
    {
      checkAll: false,
      groupName: 'Others (D:\\)',
      checkGroup: [
        {
          checkMember: false,
          name: 'Music',
          id: 1
        },
        {
          checkMember: false,
          name: 'Video',
          id: 2
        },
        {
          checkMember: false,
          name: 'Game',
          id: 3
        }
      ]
    }
  ]
}

export default {
  GetData: () => {
    return checkbox
  }
}
