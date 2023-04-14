import dayjs from 'dayjs'

import type { User } from 'types'

export const mockUsers: User[] = [
  {
    email: 'johndoe@gmail.com',
    name: 'John Doe',
    status: true,
    createTime: dayjs('2022-03-15'),
    expireTime: dayjs('2023-03-15'),
  },
  {
    email: 'janedoe@yahoo.com',
    name: 'Jane Doe',
    status: false,
    createTime: dayjs('2022-04-20'),
    expireTime: dayjs('2023-04-20'),
  },
  {
    email: 'bobsmith@hotmail.com',
    name: 'Bob Smith',
    status: true,
    createTime: dayjs('2022-02-01'),
    expireTime: dayjs('2023-02-01'),
  },
  {
    email: 'sarahjones@gmail.com',
    name: 'Sarah Jones',
    status: false,
    createTime: dayjs('2022-01-10'),
    expireTime: dayjs('2023-01-10'),
  },
  {
    email: 'mikelee@yahoo.com',
    name: 'Mike Lee',
    status: true,
    createTime: dayjs('2022-05-05'),
    expireTime: dayjs('2023-05-05'),
  },
]
