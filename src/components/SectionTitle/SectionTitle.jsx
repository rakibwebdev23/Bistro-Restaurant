
const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className="text-center pt-20 w-4/12 mx-auto">
            <p className="text-yellow-500 italic mb-2">---{subHeading}---</p>
            <h2 className="font-semibold text-3xl uppercase border-y-4 py-2">{heading}</h2>
        </div>
    );
};

export default SectionTitle;