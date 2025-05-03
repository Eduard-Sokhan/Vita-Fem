import { FaUserMd, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-neutral-700 text-white p-8 mt-12">
            <div className="container mx-auto flex flex-wrap justify-between">
                {/* Перший контейнер */}
                <div className="flex flex-col space-y-2 w-full sm:w-1/3 text-center sm:text-left">
                    <h3 className="font-semibold text-lg sm:text-xl text-white mb-2">
                        <FaUserMd className="inline mr-2" /> Послуги
                    </h3>
                    <ul className="space-y-2 text-sm sm:text-base">
                        <li className="hover:text-gray-300 cursor-pointer transition-all">
                            <FaUserMd className="inline mr-2" /> Акушерство
                        </li>
                        <li className="hover:text-gray-300 cursor-pointer transition-all">
                            <FaUserMd className="inline mr-2" /> Гінекологія
                        </li>
                        <li className="hover:text-gray-300 cursor-pointer transition-all">
                            <FaUserMd className="inline mr-2" /> Ультразвукова діагностика
                        </li>
                        <li className="hover:text-gray-300 cursor-pointer transition-all">
                            <FaUserMd className="inline mr-2" /> Клініко-лабораторні обстеження
                        </li>
                        <li className="hover:text-gray-300 cursor-pointer transition-all">
                            <FaUserMd className="inline mr-2" /> Консультації (в т.числі психолога)
                        </li>
                    </ul>
                </div>

                {/* Другий контейнер */}
                <div className="flex flex-col space-y-2 w-full sm:w-1/3 text-center sm:text-left">
                    <h3 className="font-semibold text-lg sm:text-xl text-white mb-2">
                        <FaEnvelope className="inline mr-2"/> Контакти
                    </h3>
                    <p className="text-sm sm:text-base">
                        <FaMapMarkerAlt className="inline mr-2"/> Адреса: м. Ужгород, Проспект Свободи 51
                    </p>
                    <p className="text-sm sm:text-base">
                        <FaEnvelope className="inline mr-2"/>Пошта:
                        <a
                            href="mailto:medicineuzh@ukr.net"
                            className="text-green-400 hover:text-green-600 transition-all ml-1"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            medicineuzh@ukr.net
                        </a>
                    </p>

                    <p className="text-sm sm:text-base">
                        <FaPhoneAlt className="inline mr-2"/>Телефон 1:
                        <a
                            href="mailto:medicineuzh@ukr.net"
                            className="text-green-400 hover:text-green-600 transition-all ml-1"
                        >
                            medicineuzh@ukr.net
                        </a>

                    </p>
                    <p className="text-sm sm:text-base">
                        <FaPhoneAlt className="inline mr-2"/>Телефон 2:
                        <a href="tel:+380500358390" className="text-green-400 hover:text-green-600 transition-all ml-1">
                            +380500358390
                        </a>
                    </p>
                </div>

                {/* Третій контейнер (Інтерактивна карта) */}
                <div className="flex justify-center w-full sm:w-1/3">
                    <div className="w-full max-w-3xl h-64 rounded-lg overflow-hidden shadow-lg flex justify-center">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4413.636734292904!2d22.302255222724155!3d48.62753853672689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473919a8c1cc2213%3A0x8c0ef68b5ac47ada!2z0L_RgNC-0YHQv9C10LrRgiDQodCy0L7QsdC-0LTQuCwgNTEsINCj0LbQs9C-0YDQvtC0LCDQl9Cw0LrQsNGA0L_QsNGC0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDg4MDE4!5e0!3m2!1suk!2sua!4v1682790840139!5m2!1suk!2sua"
                            width="100%"
                            height="100%"
                            style={{border: 0}}
                            allowFullScreen=""
                            loading="lazy"
                            className="sm:w-full w-3/4"
                        ></iframe>


                    </div>
                </div>
            </div>

            {/* Нижня частина футера */}
            <div className="mt-12 text-center text-sm sm:text-base text-white">
                <p>© {new Date().getFullYear()} Vitafem. Всі права захищені.</p>
            </div>
        </footer>
    );
};

export default Footer;


