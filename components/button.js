import classnames from 'classnames'

export default function Button({ type, block, loading, children, onClick }) {

  const handleClick = () => {
    if (onClick) onClick()
  }

  return (
    <button type={type || 'submit'} className={classnames('bg-pink-500 py-3 px-6 rounded-md text-white focus:outline-none', { 'btn-loading': loading, 'w-full': block })} disabled={loading} onClick={handleClick}>
      <span className="block my-px">
        { children }
      </span>
      <style jsx global>{`
        .btn-loading {
          position: relative;
          pointer-events: none;
          color: transparent !important;          
        }

        .btn-loading:after {
          animation: spinAround 500ms infinite linear;
          border: 2px solid #dbdbdb;
          border-radius: 50%;
          border-right-color: transparent;
          border-top-color: transparent;
          content: "";
          display: block;
          height: 1em;
          width: 1em;
          position: absolute;
          left: calc(50% - (1em / 2));
          top: calc(50% - (1em / 2));
        }
        
        @keyframes spinAround {
          from { transform: rotate(0deg); }
          to { transform: rotate(359deg); }
        }          
      `}</style>
    </button>
  )
}
