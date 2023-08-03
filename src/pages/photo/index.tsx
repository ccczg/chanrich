import React from 'react'
import Layout from '@theme/Layout'
import PhotoCard from './_components/PhotoCard'
import { Photo, type photo } from '@site/data/photo'

import styles from './styles.module.css'

const TITLE = '相册'

function FriendCards() {
  const photos = Photo
  return (
    <section className="margin-top--lg margin-bottom--lg">
      <div className="container">
        <ul className={styles.showcaseList}>
          {photos.map(photo => (
            <PhotoCard key={photo.cover} photo={photo} />
          ))}
        </ul>
      </div>
    </section>
  )
}

function FriendLink(): JSX.Element {
  return (
    <Layout title={TITLE}>
      <main className="margin-vert--lg">
        <FriendCards />
      </main>
    </Layout>
  )
}

export default FriendLink
