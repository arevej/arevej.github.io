import { Colors } from '../pages/constants'

const LINE_HEIGHT = 5;

const AnimatedLine = ({ maxLineHeight }: { maxLineHeight: number }) => {
  const animBy = maxLineHeight / LINE_HEIGHT
  return (
    <div className='line'>
      <style jsx>{`
       .line-container {
          margin-left: 250px;
          display: flex;
          align-items: center;
        }
        .line {
          background-color: ${Colors.yellow};
          width: 5px;
          height: ${LINE_HEIGHT}px;
          animation-name: move;
          animation-duration: 2s;
          animation-iteration-count: 1;
          animation-fill-mode: forwards;
        }

        @keyframes move {
          0% {
            transform: scaleY(0);
          }
          100% {
            transform: scaleY(${animBy});
          }
        }
      `}</style>
    </div>
  )
}

export default AnimatedLine;