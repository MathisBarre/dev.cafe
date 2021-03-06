import Image from 'next/image'

interface IressourceProps {
  title: string
  description: string
  img: string
  href: string
}

export default function Ressource({ title, description, img, href }: IressourceProps) {
  return (
    <a className="my-cardLink" href={href} target="_blank" rel="noopener noreferrer">
      <Image
        className="rounded-t border-b border-gray-200 dark:border-gray-1000"
        src={img}
        height="1080"
        width="1920"
        objectFit="cover"
        priority={true}
        alt=""
      />
      <div className="pt-2 px-3 pb-3">
        <h3 className="font-semibold text-md text-indigo-600 dark:text-indigo-500 mb-1">{title}</h3>
        <p className="text-gray-500 dark:text-gray-300 text-sm">{description}</p>
      </div>
    </a>
  )
}
