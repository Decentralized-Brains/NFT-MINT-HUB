import Chain from "@/components/Chains";
import ProductSectionNav from "@/components/ProductSectionNav";
import ProductSectionContents from "@/components/ProductSectionContents";

export default function ProductSection() {
    return (
        <section className="container">
            <div className="flex">
                <Chain />
                <div className="bg-[#F5F5F5] w-4/5 p-4">
                    <div className="py-3">
                        <ProductSectionNav />
                        <ProductSectionContents />
                    </div>
                </div>
            </div>
        </section>
    )
}
