interface IUser {
  id: 1;
  name: string;
  phone: string;
  email: string;
  email_verified_at: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}

interface IGroupMember {
  id: number;
  user_id: number;
  group_id: number;
  join_date: string;
  status: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  user_info: IUser;
}

interface IChat {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  members: Array<IGroupMember>;
}

interface IMessage {
  id?: number;
  user_id: number | undefined;
  group_id: number;
  message: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
}

export type { IUser, IGroupMember, IChat, IMessage };
