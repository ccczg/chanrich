import React, { memo } from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'

import styles from './styles.module.css'
import { type Photo } from '@site/data/photo'

const PhotoCard = memo(({ friend }: { friend: Photo }) => (
  <li className={clsx(styles.photoCard, 'padding-vert--sm padding-horiz--md')}>
    <img
      src={
        typeof friend.avatar === 'string'
          ? friend.avatar
          : friend.avatar.src.src
      }
      alt={friend.title}
      className={clsx(styles.photoCardImage)}
    />
    <div className="card__body">
      <div className={clsx(styles.photoCardHeader)}>
        <h4 className={styles.photoCardTitle}>
          <Link href={friend.website} className={styles.photoCardLink}>
            {friend.title}
          </Link>
        </h4>
      </div>
      <p className={styles.photoCardDesc}>{friend.description}</p>
    </div>
  </li>
))

export default PhotoCard
