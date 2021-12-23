export interface IGlobalChatDto {
  message: string
  owner: IGlobalChatOwner
}

export interface IGlobalChatOwner {
  profilePic: string
  username: string
}
