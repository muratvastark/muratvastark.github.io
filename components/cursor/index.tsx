import { FC, useState, useEffect } from "react";

const Cursor: FC = () => {
    const [coords, setCoords] = useState({ xCoords: 0, yCoords: 0 });
    const [scale, setScale] = useState<number>(1);

    const onMouseMove = (e: MouseEvent) => {
        setCoords({ xCoords: e.clientX, yCoords: e.clientY });
    }

    const onMouseUp = () => {
        setScale(1);
    }

    const onMouseDown = () => {
        setScale(1.25)
    }

    useEffect(() => {
        window.addEventListener("mousemove", (e) => onMouseMove(e));
        window.addEventListener("mouseup", () => onMouseUp());
        window.addEventListener("mousedown", () => onMouseDown());

        return () => {
            window.removeEventListener("mousemove", (e) => onMouseMove(e));
            window.removeEventListener("mouseup", () => onMouseUp());
            window.removeEventListener("mousedown", () => onMouseDown());    
        }
    }, [onMouseMove, onMouseUp, onMouseDown])

    return (
        <div
            className="pointer-ring"
            style={{ transform: `translateX(${coords.xCoords - 15}px) translateY(${coords.yCoords - 15}px) scale(${scale})` }}
        ></div>
    )
}

export default Cursor;
