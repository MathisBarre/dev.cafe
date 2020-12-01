export default function Footer() {
  return (
    <footer className="text-center mt-16 py-6 font-semibold bg-gray-100 text-md">
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-4">
        <p className="text-sm mb-2 lg:mb-0"><a className="underline" href="https://mathisbarre.com">Créé avec ❤️ par Mathis Barré</a></p>
        <div>
          <a href="https://fr.reactjs.org/"><img className="inline h-7 mx-3 my-2" src="/images/react.png" alt="react.js"/></a>
          <a href="https://nextjs.org"><img className="inline h-8 mx-3 my-2" src="/images/nextjs.svg" alt="next.js"/></a>
          <a href="https://tailwindcss.com/"><img className="inline h-4 mx-3 my-2" src="/images/tailwindcss.svg" alt="tailwind.css"/></a>
          <a href="https://tailwindui.com"><img className="inline h-4 mx-3 my-2" src="/images/tailwindui.svg" alt="tailwind ui"/></a>
          <a href="https://vercel.com"><img className="inline h-4 mx-3 my-2" src="/images/vercel.svg" alt="vercel"/></a>
        </div>
      </div>
    </footer>
  )
}