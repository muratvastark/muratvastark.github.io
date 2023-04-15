import { FC, ReactNode } from "react";

interface ISectionCard {
    children?: ReactNode;
    className?: string;
}

const SectionCard: FC<ISectionCard> = ({ children, className }) => {
    return (
        <div className={`max-w-4xl w-full mx-auto flex items-center justify-center ${className}`}>
            {children}
        </div>
    )
}

export default SectionCard;
