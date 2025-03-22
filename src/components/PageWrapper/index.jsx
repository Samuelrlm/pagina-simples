import Image from "next/image";
import svg from "../../../public/security-on-animate.svg"

export default function PageWrapper({ children }) {
    return (
        <div className="w-full h-screen bg-white flex">
            <div className="w-[60%] h-full flex items-center justify-center bg-[#6f1c68] rounded-r-md">
                <Image src={svg} width={600} />
            </div>
            <div className="w-[40%] h-full flex items-center justify-center">
                {children}
            </div>
        </div>
    );
}