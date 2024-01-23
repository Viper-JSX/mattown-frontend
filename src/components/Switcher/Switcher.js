const Switcher = ({ currenOption, options, handleSwitch }) => {
    return (
        <div className="switcher">
            {
                options.map((option) =>
                    <div className={`switcher__option ${currenOption === option ? "active" : "passsive"}`} onClick={() => handleSwitch(option)} >
                        { option }
                    </div>
                )
            }
        </div>
    );
};

export default Switcher;