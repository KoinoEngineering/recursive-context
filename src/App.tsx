import React, { useContext } from "react";

const Context = React.createContext(0);

const AddOne: React.FC = ({ children }) => {
    const context = useContext(Context);
    const value = context + 1;
    return <div>
        <div>
            AddOne:{value}
        </div>
        <div>
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
            AddTwo:{value}
        </div>
        <div>
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
                ? "FizzBuzz(" + value + ")"
                : value % 5 === 0
                    ? "Buzz(" + value + ")"
                    : value % 3 === 0
                        ? "Fizz(" + value + ")"
                        : value
            }
        </div>
        <div>
            <Context.Provider value={value}>
                {children}
            </Context.Provider>
        </div>
    </div>;
};

interface Props {
    components: React.ComponentType<{}>[]
}
const ComponentReducer: React.FC<Props> = ({ components }) => {
    const [Component, ...tail] = components;
    return <Component>{
        tail.length !== 0 && <ComponentReducer components={tail} />}
    </Component>;
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
        <br />
        <div>
            <AddOne>
                <AddTwo>
                    <AddOne>
                    </AddOne>
                </AddTwo >
            </AddOne>
        </div>
        <br />
        <div>
            ContextでFizzBuzz
        </div>
        <br />
        <div style={{
            marginLeft: "2rem"
        }}>
            <ComponentReducer components={Array(100).fill(FizzBuzz)} />
        </div>
    </div>;
};

export default App;
