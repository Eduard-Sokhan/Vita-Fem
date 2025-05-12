import logo from "../../public/logo.png";
import photo1 from "../assets/photo1.png";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
import Button from "./Button.jsx";

const Body = () => {
    return (
        <main className="container mx-auto py-8 px-8 mt-4 relative z-10">
            <div className="flex flex-col gap-12 relative z-20 sm:text-left items-center">

                <div
                    className="w-full max-w-[600px] mb-12 flex flex-col justify-center items-center px-4 text-green-600 min-[1300px]:items-center"
                >
                    <div className="flex justify-center items-center relative">
                        <div className="flex flex-col items-center">
                            <img
                                src={logo}
                                alt="Logo"
                                className="w-[200%] sm:w-[100%] md:w-[80%] lg:w-[60%] mb-4"
                            />

                            <h1 className="text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center mx-auto">
                                <span className="text-red-700 whitespace-nowrap">ПРИВАТНА МЕДИЧНА УСТАНОВА</span>
                                {" "}
                                &quot;Vita<span className="text-red-700">Fem</span>&quot;
                            </h1>

                        </div>
                    </div>

                    <div className="w-full max-w-[760px] text-left">
                        <div className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold mb-6">
                            <p>Акушерство</p>
                            <p>Гінекологія</p>
                            <p>Ультразвукова діагностика</p>
                            <p>Клініко-лабораторні обстеження</p>
                            <p>Консультації (в т.числі психолога)</p>
                            <p>Та інше</p>
                        </div>

                        <div className="mt-12">
                            <h3 className="text-2xl sm:text-3xl lg:text-2xl font-bold text-center min-[1300px]:text-center text-red-700">
                                Графік роботи
                            </h3>

                            <div className="flex flex-wrap justify-center lg:mt-12">
                                <div
                                    className="text-red-700 flex items-center justify-center text-xs sm:text-sm md:text-base lg:text-lg gap-4">
                                    <p className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg">Пн-Пт: 8:30
                                        - 20:30</p>
                                    <p className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg">Сб: 9:00 -
                                        20:00</p>
                                    <p className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg">Нд: 10:30 -
                                        17:30</p>
                                </div>
                            </div>


                            <div
                                className="flex flex-col sm:flex-row sm:space-y-4 lg:space-y-0 sm:space-x-0 lg:space-x-4 justify-center gap-4 mt-8 lg:mt-12">
                                <Button
                                    href="https://t.me/+380507696279"
                                    text="ЗАПИСАТИСЬ НА ПРИЙОМ"
                                    bgColor="bg-red-700"
                                    hoverColor="hover:bg-red-600"
                                    className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl min-[300px]:text-xs min-[300px]:py-1 min-[300px]:px-2"
                                />
                                <Button
                                    href="tel:+380507696279"
                                    text={
                                        <>
                                            ТЕЛЕФОНУЙТЕ <br/>
                                            050 769 62 79
                                        </>
                                    }
                                    phoneNumber={true}
                                    bgColor="bg-green-700"
                                    hoverColor="hover:bg-green-600"
                                    className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl min-[300px]:text-xs min-[300px]:py-1 min-[300px]:px-2"
                                />
                            </div>


                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center mt-8 gap-16 px-4 sm:px-6 lg:px-8">

                <div
                    className="bg-[#f4f4f4] shadow-lg rounded-xl overflow-hidden w-full max-w-6xl flex flex-col items-center p-6 sm:p-8 gap-6">
                    <img
                        src={photo1}
                        alt="Photo 1"
                        className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 h-auto object-cover rounded-lg"
                    />
                    <div
                        className="text-green-700 text-sm sm:text-base md:text-lg lg:text-xl text-center leading-relaxed">
                        <p className="font-semibold text-xl sm:text-2xl mb-2 text-red-700">Вориняк Вікторія
                            Дмитрівна</p>
                        <ul className="list-disc list-inside text-left">
                            <li>Лікар акушер-гінеколог вищої кваліфікаційної категорії</li>
                            <li>Лікар з ультразвукової діагностики</li>
                            <li>Стаж роботи 18 років</li>
                        </ul>
                    </div>
                </div>

                <div
                    className="bg-[#f4f4f4] shadow-lg rounded-xl overflow-hidden w-full max-w-6xl flex flex-col lg:flex-row items-center gap-6 p-6 sm:p-8">
                    <img
                        src={photo2}
                        alt="Photo 2"
                        className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 h-auto object-cover rounded-lg"
                    />
                    <div
                        className="text-green-700 text-sm sm:text-base md:text-lg lg:text-xl text-left leading-relaxed">
                        <p className="font-semibold text-xl sm:text-2xl mb-2 text-red-700 text-center">Послуги гінеколога:</p>
                        <ul className="list-disc list-inside">
                            <li>Гінекологічний огляд</li>
                            <li>Постановка та видалення ВМС</li>
                            <li>Лікування запальних захворювань статевих жіночих органів</li>
                            <li>Лікування ІПСШ</li>
                            <li>Лікування патології шийки матки</li>
                            <li>Пайпель-біопсія порожнини матки</li>
                            <li>Лікування порушень менструального циклу, аномальних маткових кровотеч</li>
                            <li>Корекція та лікування перименопаузальних та менопаузальних порушень</li>
                            <li>Консультування з приводу контрацепції; підбір методу контрацепції;</li>
                            <li>Підбір контрацепції</li>
                            <li>Ведення вагітності</li>
                            <li>Біопсія шийки матки</li>
                        </ul>
                    </div>
                </div>

                <div
                    className="bg-[#f4f4f4] shadow-lg rounded-xl overflow-hidden w-full max-w-6xl flex flex-col lg:flex-row items-center gap-6 p-6 sm:p-8">
                    <img
                        src={photo3}
                        alt="Photo 3"
                        className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 h-auto object-cover rounded-lg"
                    />
                    <div
                        className="text-green-700 text-sm sm:text-base md:text-lg lg:text-xl text-left leading-relaxed">
                        <p className="font-semibold text-xl sm:text-2xl mb-2 text-red-700 text-center">УЗД обстеження:</p>
                        <ul className="list-disc list-inside">
                            <li>Органів малого тазу (трансвагінально і трансабдомінально)</li>
                            <li>Молочних залоз</li>
                            <li>Щитоподібної залози</li>
                            <li>Нирок і сечового міхура</li>
                            <li>Органів черевної порожнини (печінка, жовчний міхур з протоками, підшлункова залоза, селезінка)(Проводиться як і дорослим так і дітям)</li>
                            <li>М’яких тканин</li>
                        </ul>
                    </div>
                </div>

            </div>
        </main>
    );
};

export default Body;
