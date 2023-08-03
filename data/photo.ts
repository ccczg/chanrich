export const Photo: Photo[] = [
    {
      title: 'LLLXY',
      description: 'Excellent .NET developer',
      detail: 'https://www.lllxy.net/',
      cover: 'https://corehome.oss-accelerate.aliyuncs.com/images/avatar.jpg',
    }
  ]
  
  export type Photo = {
    title: string
    description: string
    detail: string
    cover?: string
  }
  