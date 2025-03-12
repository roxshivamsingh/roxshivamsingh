interface IProps {
    link: string
    label: string
    icon: string
}
export default function SocialIcon(props: IProps) {
    const { link, label, icon } = props
    return (
        <a
            target="_blank"
            aria-label={label}
            rel="noopener noreferrer"
            href={link}
        >
            <i className={icon} aria-hidden="true" />
        </a>
    )
}
