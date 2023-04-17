import { FC, useState, useEffect, useCallback } from "react";

const Cursor: FC = () => {
    const [coords, setCoords] = useState({ xCoords: 0, yCoords: 0 });
    const [scale, setScale] = useState<number>(1);
    const [opacity, setOpacity] = useState<number>(0);

    const onMouseUp = useCallback(() => {
        setScale(1);
    }, [setScale]);

    const onMouseDown = useCallback(() => {
        setScale(1.25)
    }, [setScale]);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        const onMouseMove = (e: MouseEvent) => {
            setCoords({ xCoords: e.clientX, yCoords: e.clientY });
    
            setOpacity(1);
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                setOpacity(0)
            }, 100);
        }

        window.addEventListener("mousemove", (e) => onMouseMove(e));
        window.addEventListener("mouseup", () => onMouseUp());
        window.addEventListener("mousedown", () => onMouseDown());

        return () => {
            window.removeEventListener("mousemove", (e) => onMouseMove(e));
            window.removeEventListener("mouseup", () => onMouseUp());
            window.removeEventListener("mousedown", () => onMouseDown());    
        }
    }, [setCoords, setOpacity, onMouseUp, onMouseDown])

    return (
        <div
            className="hidden md:flex pointer-ring"
            style={{ transform: `translateX(${coords.xCoords - 15}px) translateY(${coords.yCoords - 15}px) scale(${scale})`, opacity: opacity }}
        ></div>
    )
}

export default Cursor;
