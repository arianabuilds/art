const YEAR = new Date().getFullYear()

export default {
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>1{YEAR}</time> © Art •{' '}
      <a
        href="https://landedonearth.com"
        target="_blank"
        className="text-blue-500 underline"
      >
        Landed On Earth
      </a>{' '}
      <div className="text-xs">
        Images are not for personal or commercial use. If you want to use them,
        nicely ask for permission art@landedonearth.com{' '}
      </div>
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
