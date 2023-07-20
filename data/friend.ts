export const Friends: Friend[] = [
  {
    title: 'LLLXY',
    description: 'Excellent .NET developer',
    website: 'https://www.lllxy.net/',
    avatar: 'https://corehome.oss-accelerate.aliyuncs.com/images/avatar.jpg',
  },
  {
    title: 'Conchbrain',
    description: '这个海螺什么都知道',
    website: 'https://www.conchbrain.club/#home',
    avatar: 'https://www.conchbrain.club/favicon.ico',
  }
]

export type Friend = {
  title: string
  description: string
  website: string
  avatar?: any
}
