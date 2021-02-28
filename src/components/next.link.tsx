import Link, { LinkProps } from "next/link";
export const NextLink: React.FC<LinkProps> = ({ children, ...props }) => (
    <Link {...props}>
        <a>{children}</a>
    </Link>
);
