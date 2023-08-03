import React, { memo } from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'

import styles from './styles.module.css'
import { type Photo } from '@site/data/photo'

const PhotoCard = memo(({ photo }: { photo: Photo }) => (
  <li className={clsx(styles.photoCard, 'padding-vert--sm padding-horiz--md')}>
    <img
      src={photo.cover}
      alt={photo.title}
      className={clsx(styles.photoCardImage)}
    />
    <div className="card__body">
      <div className={clsx(styles.photoCardHeader)}>
        <h4 className={styles.photoCardTitle}>
          <Link href={photo.detail} className={styles.photoCardLink}>
            {photo.title}
          </Link>
        </h4>
      </div>
      <p className={styles.photoCardDesc}>{photo.description}</p>
    </div>
  </li>
))

export default PhotoCard
