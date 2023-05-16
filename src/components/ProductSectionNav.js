export default function ProductSectionNav() {
    return (
        <>
            <div className="text-2xl float-left font-semibold">
                Today's Drops
            </div>
            <div className="float-right text-sm bg-[#5865f226] py-1 rounded-2xl">
                <button className="mx-1 py-1 px-3 rounded-2xl ">
                    Today
                    <span className="ml-2 px-2 py-1 rounded-2xl text-xs bg-[#5865F2] text-white">
                        100
                    </span>
                </button>
                <button className="mx-1 py-1 px-3 rounded-2xl bg-white">
                    Upcoming
                    <span className="ml-2 px-2 py-1 rounded-2xl text-xs bg-[#5865F2] text-white">
                        100
                    </span>
                </button>
                <button className="mx-1 py-1 px-3 rounded-2xl">
                    Ongoing
                    <span className="ml-2 px-2 py-1 rounded-2xl text-xs bg-[#5865F2] text-white">
                        100
                    </span>
                </button>
                <button className="mx-1 py-1 px-3 rounded-2xl">
                    Minting
                    <span className="ml-2 px-2 py-1 rounded-2xl text-xs bg-[#5865F2] text-white">
                        100
                    </span>
                </button>
            </div>
        </>
    )
}