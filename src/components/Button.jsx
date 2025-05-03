import PropTypes from "prop-types";

const Button = ({ href, text, phoneNumber = false, bgColor = "bg-red-700", hoverColor = "hover:bg-red-600" }) => {
    return (
        <a
            href={href}
            target={phoneNumber ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className={`${bgColor} text-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-[25px] shadow-md ${hoverColor} duration-300 hover:scale-105 transition-all text-lg sm:text-xl md:text-2xl flex items-center justify-center w-full sm:w-[280px] md:w-[320px] lg:w-[350px] text-center`}
        >
            {phoneNumber ? (
                <>
                    <span>{text}</span>
                </>
            ) : (
                text
            )}
        </a>

    );
};

// Валідація пропсів
Button.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    phoneNumber: PropTypes.bool,
    bgColor: PropTypes.string,
    hoverColor: PropTypes.string
};

export default Button; // Важливо, щоб це було default
