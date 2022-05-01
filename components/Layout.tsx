import { IAs } from '../utils/as.interface'

interface StackProps extends IAs, React.HTMLAttributes<HTMLElement> {
  direction?: 'col' | 'row'
  gap?: 'none' | '4' | '8' | '16' | '24' | '32'
}

export const Stack: React.FC<StackProps> = (props) => {
  const {
    as: Component = 'div',
    className,
    direction = 'col',
    gap = '16',
    ...rest
  } = props

  const directionClass = direction === 'col' ? 'flex-col' : 'flex-row'
  const gapClass = gap === 'none' ? null : `gap${gap}`

  const styles = `${gapClass} container mx-auto p-4 flex ${directionClass} justify-center max-w-4xl ${className}`

  return (
    <Component className={styles} {...rest}>
      {props.children}
    </Component>
  )
}
