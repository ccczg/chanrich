import React, { memo } from 'react'
import clsx from 'clsx'

import styles from './styles.module.css'
import { type Photo } from '@site/data/photo'

const PhotoCard = memo(({ photo }: { photo: Photo }) => (
  <li className={clsx(styles.photoCard, 'padding-vert--sm padding-horiz--md')}>
    <img
      src={photo.url}
      alt={photo.title}
      className={clsx(styles.photoCardImage)}
    />
  </li>
))

export default PhotoCard
