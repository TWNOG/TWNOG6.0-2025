"use client";

import { useTranslation } from "react-i18next";

export default function TrafficPage() {
    const { t } = useTranslation("traffic");

    return (
        <div className="p-6 pb-20">
            <section className="max-w-4xl mx-auto">
                <h2 className="text-xl font-bold mb-2">{t("pageTitle")}</h2>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.79758954454!2d121.52076509999999!3d25.040942299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a976b82a6343%3A0xfa4b50ed14c4d879!2sNTUH%20International%20Convention%20Center!5e0!3m2!1sen!2suk!4v1737457603420!5m2!1sen!2suk"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-96 rounded-lg mb-8"
                />

                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-2">{t("locationTitle")}</h3>
                    <div className="space-y-2">
                        <p>{t("locationName")}</p>
                        <p>{t("locationAddress")}</p>
                    </div>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-2">{t("mrtTitle")}</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li>{t("mrtItem1")}</li>
                        <li>{t("mrtItem2")}</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-2">{t("busTitle")}</h3>
                    <p>{t("busDescription")}</p>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-2">{t("driveTitle")}</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li>{t("driveItem1")}</li>
                        <li>{t("driveItem2")}</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
