import React from 'react';

const FunFacts = () => {
    const facts = [
        {
            text: (
                <>
                    I am an <span className="font-semibold text-primary-light">avid reader</span> of mystery and drama fiction, especially the exhilarating murder mysteries of Agatha Christie. <span className="italic">'And Then There Were None'</span> is my absolute favourite!
                </>
            )
        },
        {
            text: (
                <>
                    I am both, a <span className="font-semibold text-primary-light">coffee and a masala chai person</span> and always ready for any fun beverage outing with my friends. I also make a mean cup of chai :)
                </>
            )
        },
        {
            text: (
                <>
                    I am also a <span className="font-semibold text-primary-light">die-hard The Office fan</span> and firmly believe that it is the superior sitcom compared to Friends (sorry not sorry 👀)
                </>
            )
        },
        {
            text: (
                <>
                    <span className="font-semibold text-primary-light">Writing, poetry, and journaling</span> is my first love and my diary is where I find the most peace. I used to like sketching as well but haven't been able to find the time to reconnect with that hobby.
                </>
            )
        }
    ];

    return (
        <section className="w-full animate-fade-in">
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mt-[70px] sm:mt-[100px] md:mt-[120px] lg:mt-[140px] mx-4 sm:mx-8 md:mx-16 lg:mx-[108px]">
                    <div className="flex flex-col gap-[40px]">
                        {/* Section Title */}
                        <h2 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-2xl font-medium leading-[30px] sm:leading-[33px] md:leading-[36px] lg:leading-4xl text-text-light font-poppins animate-slide-in-left">
                            Other random <span className="font-bold text-primary-light">FUN FACTS</span> about me
                        </h2>

                        {/* Facts List */}
                        <div className="flex flex-col gap-[30px] sm:gap-[35px] md:gap-[40px] lg:gap-[42px] mr-0 sm:mr-8 md:mr-16 lg:mr-[134px]">
                            {facts?.map((fact, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-[16px] sm:gap-[18px] md:gap-[20px] group animate-slide-up hover:bg-gray-50 p-4 rounded-lg transition-all duration-300 cursor-default"
                                    style={{ animationDelay: `${index * 0.15}s` }}
                                >
                                    {/* Heart Icon */}
                                    <div className="flex-shrink-0 mt-1">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="transition-all duration-300 group-hover:scale-110"
                                        >
                                            <path
                                                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                                                fill="#E91E8C"
                                                className="transition-colors duration-300 group-hover:fill-primary-dark"
                                            />
                                        </svg>
                                    </div>

                                    {/* Fact Text */}
                                    <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-lg font-normal leading-[24px] sm:leading-[27px] md:leading-[28px] lg:leading-lg text-text-light font-poppins flex-1 transition-colors duration-300 group-hover:text-text-primary">
                                        {fact.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FunFacts;
