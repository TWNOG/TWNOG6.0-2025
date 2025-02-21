"use client";

import { useTranslation } from "react-i18next";
import { MapPin, BusFront, TramFront, CarFront } from 'lucide-react';
import Image from "next/image";

export default function TrafficPage() {
    const { t } = useTranslation("traffic");

    return (
        <div className="p-6 pb-20">
            <section className="max-w-4xl mx-auto">
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
                    <h3 className="text-xl font-semibold mb-2"><MapPin className="inline-block mr-2" size={24} />{t("locationTitle")}</h3>
                    <div className="font-serif space-y-2">
                        <p>{t("locationName")}</p>
                        <p>{t("locationAddress")}</p>
                    </div>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-2"><TramFront className="inline-block mr-2" size={24} />{t("mrtTitle")}</h3>
                    <ul className="font-serif list-disc list-inside space-y-2">
                        <li><Image className="inline-block mr-2" src='/assets/Taipei_Metro_Line_R.svg' alt="Taipei_Metro_Line_R" width={24} height={24}/>{t("mtrDescription.0")}</li>
                        <li><Image className="inline-block mr-2" src='/assets/Taipei_Metro_Line_BL.svg' alt="Taipei_Metro_Line_BL" width={24} height={24}/>{t("mtrDescription.1")}</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-2"><BusFront className="inline-block mr-2" size={24} />{t("busTitle")}</h3>
                    <ul className="font-serif list-disc list-inside space-y-2">
                        <li>{t("busDescription.0")}</li>
                        <li>{t("busDescription.1")}</li>
                        <li>{t("busDescription.2")}</li>
                        <li>{t("busDescription.3")}</li>
                    </ul>
                    <p></p>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-2"><CarFront className="inline-block mr-2" size={24} />{t("driveTitle")}</h3>
                    <ul className="font-serif list-disc list-inside space-y-2">
                        <li>{t("driveDescription.0")}</li>
                        <li>{t("driveDescription.1")}</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
