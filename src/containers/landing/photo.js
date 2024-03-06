import TextSlider from "@/components/ui/textSilder";
import Image from "next/image";
import Link from "next/link";
import { HiArrowDownRight } from "react-icons/hi2";

const Photo = () => {
    return (
        <section className="bg-white relative">
            <div className="flex w-full justify-between pe-40 absolute z-30 top-1/4">
                <div className="bg-black w-max h-max flex text-white font-semibold text-2xl p-4 ps-10 items-center gap-10 rounded-e-full ">
                    <p className="flex flex-col text-2xl">
                        <span>Located in</span>{" "}
                        <span className="tracking-widest font-bold">INDIA</span>
                    </p>
                    <span className="w-20 h-20 rounded-full bg-slate-300"></span>
                </div>

                <div>
                    <HiArrowDownRight className="text-5xl absolute -top-28"/>
                    <span className="text-5xl flex flex-col gap-3 text-center">
                        <p className="tracking-wider">ML Engineer</p>
                        <p className="text-center">&</p>
                        <p>Web Developer</p>
                    </span>
                </div>
            </div>
            <TextSlider />
            <div className="relative w-full h-120 bg-white z-10">
                <Image
                    src={"/sample_image.png"}
                    fill={true}
                    alt="Sheikh Taha Maroof"
                    className="object-contain "
                />
            </div>
        </section>
    );
};

export default Photo;
