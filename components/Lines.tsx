import { Colors } from './constants'

const START_LINE_HEIGHT = 5;

export const AnimatedLine = ({ maxLineHeight, className }: { maxLineHeight: number, className?: string }) => {
  const animBy = maxLineHeight / START_LINE_HEIGHT
  return (
    <div className={`animated-line ${className ? className : ''}`}>
      <style jsx>{`
        .animated-line {
          background-color: ${Colors.yellow};
          width: 5px;
          height: ${START_LINE_HEIGHT}px;
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

export const Line = ({ className }: { className?: string }) => {
  return (
    <div className={`line ${className ? className : ''}`}>

      <style jsx>{`
        .line {
          background-color: ${Colors.yellow};
          width: 5px;
        }
      `}</style>
    </div>
  )
}