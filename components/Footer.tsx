'use client';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
    const { data } = useLanguage();
    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg">{data.ui.generic.pleasure}</p>
                <a
                    href={`mailto:${data.generalInfo.email}`}
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
                >
                    {data.generalInfo.email}
                </a>

                <div className="">
                    <div className="leading-6 text-muted-foreground">
                        {data.ui.generic.design}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
