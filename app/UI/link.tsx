import Link from "next/link";

interface ButtonProp {
    href: string;
    className: string;
    children: React.ReactNode;
}

export default function ButtonLink({href, className, children}: ButtonProp) {
    return (
        
        <Link href={href} className={`rounded-2xl border-2 border-dashed hover:border-double border-black  bg-secondary px-7 py-2 font-semibold uppercase text-black transition-all duration-300 hover:rounded-md hover:shadow-[4px_4px_0px] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none ${className}`}>
            {children}
      </Link>
    )
}