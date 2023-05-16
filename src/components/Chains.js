import { chains } from "@/components/data"
export default function Chain() {
    return (
        <section className="w-1/5 px-1 text-md">
            <form className="">
                {chains.map((items) => (
                    <div key={items.id} className="my-3">
                        <input type="checkbox" id={items.name} name={items.name} value={items.name} />
                        <label htmlFor={items.name}>
                            <img src={items.img.src} className="w-6 h-6 mx-3 inline" />
                            {items.name}
                        </label>
                        <span className="bg-[#5865f247] ml-2 px-4 py-1 rounded-2xl text-xs">
                            100
                        </span>
                    </div>
                ))}
            </form>
        </section>
    )
}
