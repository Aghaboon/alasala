"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { Wrench, Hammer, Settings } from "lucide-react";

export default function ServiceCard() {
    const t = useTranslations("ServicesPage");
    const locale = useLocale();
    const isRTL = locale === "ar";

    const services = t.raw("serviceList") as Array<{
        title: string;
        description: string;
        icon: string;
    }>;

    function getIcon(name: string) {
        switch (name) {
            case "wrench":
                return <Wrench />;
            case "hammer":
                return <Hammer />;
            case "settings":
                return <Settings />;
            default:
                return <Wrench />;
        }
    }

    return (
        <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${isRTL ? "text-right" : "text-left"
                }`}
        >
            {services.map((service, index) => (
                <motion.div
                    key={index}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl p-6 border border-gray-100 flex flex-col items-center text-center"
                >
                    <div
                        className={`flex items-center gap-3 mb-4 ${isRTL ? "flex-row-reverse" : "flex-row"
                            }`}
                    >
                        <div className="text-blue-600 text-3xl">{getIcon(service.icon)}</div>
                        <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                    </div>

                    <p className="text-gray-600">{service.description}</p>
                </motion.div>
            ))}
        </div>
    );
}
