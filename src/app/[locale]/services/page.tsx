
import { useTranslations } from "next-intl";
import ServiceCard from "@/components/servicesPage/ServicesCard";


export default function ServicesPage() {
    const t = useTranslations("ServicesPage"); // ✅ داخل المكون

    const services = t.raw("serviceList"); // نحصل على المصفوفة كاملة من ملف الترجمة

    return (
        <div className="bg-gray-50 min-h-screen py-20 px-4 md:px-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800">{t("title")}</h2>
                <p className="text-gray-600 mt-2">{t("subtitle")}</p>
            </div>

            <div>
                    <ServiceCard />
            </div>
        </div>
    );
}


