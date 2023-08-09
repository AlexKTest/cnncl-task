import Image from 'next/image'
import Link from 'next/link'
import cl from 'classnames'
import { DateTime } from 'luxon'
import './BlogPost.scss'

interface BlogPostProps {
  topic: string
  link: string
  imageUrl: string
  title: string
  author: string
  authorUrl: string
  date: Date
  type: string
  className?: string
}

export const BlogPost = ({
  topic,
  link,
  imageUrl,
  title,
  author,
  authorUrl,
  date,
  type,
  className,
}: BlogPostProps) => {
  const dateTime = DateTime.fromJSDate(date).toFormat('dd LLLL yyyy')
  return (
    <div className={cl(className, 'p-card p-card--highlighted ht-post p-card__content')}>
      <header className="p-card__header ht-post__header">
        <h3 className="p-heading--5 u-no-margin--bottom">{topic}</h3>
      </header>
      <div className="p-card__inner">
        <Link href={link}>
          <Image
            className="p-card__image"
            src={imageUrl}
            alt="Blog Post Image"
            height={160}
            width={280}
          />
        </Link>

        <h3>
          <Link href={link}>{title}</Link>
        </h3>
        <p>
          <em>
            By <Link href={authorUrl}>{author}</Link> on {dateTime}
          </em>
        </p>
      </div>
      <div className='u-align--bottom'>
        <hr />
        <p>{type}</p>
      </div>
    </div>
  )
}
