import React, { useContext } from "react";

const Context = React.createContext(0);

const AddOne: React.FC = ({ children }) => {
    const context = useContext(Context);
    const value = context + 1;
    return <div>
        <div>
            value:{value}
        </div>
        <div style={{ marginLeft: "2rem" }}>
            <Context.Provider value={value}>
                {children}
            </Context.Provider>
        </div>
    </div>;
};

const AddTwo: React.FC = ({ children }) => {
    const context = useContext(Context);
    const value = context + 2;
    return <div>
        <div>
            value:{value}
        </div>
        <div style={{ marginLeft: "2rem" }}>
            <Context.Provider value={value}>
                {children}
            </Context.Provider>
        </div>
    </div>;
};

const FizzBuzz: React.FC = ({ children }) => {
    const context = useContext(Context);
    const value = context + 1;
    return <div>
        <div>
            {value % 15 === 0
                ? "FizzBuzz"
                : value % 5 === 0
                    ? "Buzz"
                    : value % 3 === 0
                        ? "Fizz"
                        : value
            }
        </div>
        <div style={{ marginLeft: "2rem" }}>
            <Context.Provider value={value}>
                {children}
            </Context.Provider>
        </div>
    </div>;
};

const App: React.FC = () => {
    return <div>
        <div>
            <AddOne>
                <AddOne>
                    <AddTwo>
                    </AddTwo >
                </AddOne>
            </AddOne>
        </div>
        <div>
            <AddOne>
                <AddTwo>
                    <AddOne>
                    </AddOne>
                </AddTwo >
            </AddOne>
        </div>
        <div>
            <FizzBuzz>
                <FizzBuzz>
                    <FizzBuzz>
                        <FizzBuzz>
                            <FizzBuzz>
                                <FizzBuzz>
                                    <FizzBuzz>
                                        <FizzBuzz>
                                            <FizzBuzz>
                                                <FizzBuzz>
                                                    <FizzBuzz>
                                                    </FizzBuzz>
                                                </FizzBuzz>
                                            </FizzBuzz>
                                        </FizzBuzz>
                                    </FizzBuzz>
                                </FizzBuzz>
                            </FizzBuzz>
                        </FizzBuzz>
                    </FizzBuzz>
                </FizzBuzz>
            </FizzBuzz>
        </div>
    </div>;
};

export default App;
