const YEAR = new Date().getFullYear()

export default {
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>1{YEAR}</time> © Art •{' '}
      <a
        href="http://www.landedonearth.com"
        target="_blank"
        className="text-blue-500 underline"
      >
        Landed On Earth
      </a>
      <style jsx>{`
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  )
}
