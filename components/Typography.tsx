import React from 'react'

export const BodyText: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  children,
  ...rest
}) => (
  <p className="md:text-xl leading-relaxed" {...rest}>
    {children}
  </p>
)

interface InlineLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
}

export const InlineLink: React.FunctionComponent<InlineLinkProps> = (props) => {
  return (
    <a
      href={props.href}
      target={props.target ? props.target : '_blank'}
      className="underline font-semibold transition-colors hover:text-primary"
      rel="noreferrer"
    >
      {props.children}
    </a>
  )
}
