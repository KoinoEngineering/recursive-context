import React, { useContext, useEffect, useState } from "react";

const Context = React.createContext(0);

const AddOne: React.FC = ({ children }) => {
    const context = useContext(Context);
    const value = context + 1;
    return <div>
        AddOne:{value}
        {
            children &&
            <Context.Provider value={value}>
                {children}
            </Context.Provider>
        }
    </div>;
};

const AddTwo: React.FC = ({ children }) => {
    const context = useContext(Context);
    const value = context + 2;
    return <div>
        AddTwo:{value}
        {
            children &&
            <Context.Provider value={value}>
                {children}
            </Context.Provider>
        }
    </div>;
};
const AddOneAsync: React.FC = ({ children }) => {
    const context = useContext(Context);
    const [value, setValue] = useState<number | undefined>(undefined);

    useEffect(() => {
        fetch(`https://heroku-echo-express.herokuapp.com/plus-one?value=${context}`)
            .then(res => {
                return res
                    .json()
                    .then(res => {
                        return setValue(Number(res));
                    });
            });
    }, [context]);
    return value === undefined
        ? null
        : <div>
            AddOneAsync:{value}
            {
                children &&
                <Context.Provider value={value}>
                    {children}
                </Context.Provider>
            }
        </div>;
};

const FizzBuzz: React.FC = ({ children }) => {
    const context = useContext(Context);
    const value = context + 1;
    return <div>
        {
            value % 15 === 0
                ? "FizzBuzz(" + value + ")"
                : value % 5 === 0
                    ? "Buzz(" + value + ")"
                    : value % 3 === 0
                        ? "Fizz(" + value + ")"
                        : value
        }
        {
            children &&
            <Context.Provider value={value}>
                {children}
            </Context.Provider>
        }
    </div>;
};

const FizzBuzzAsync: React.FC = ({ children }) => {
    const context = useContext(Context);
    const [value, setValue] = useState<number | undefined>(undefined);
    useEffect(() => {
        fetch(`https://heroku-echo-express.herokuapp.com/plus-one?value=${context}`)
            .then(res => {
                return res
                    .json()
                    .then(res => {
                        setValue(Number(res));
                    });
            });
    }, [context]);
    return value === undefined
        ? null
        : <div>
            {value % 15 === 0
                ? "FizzBuzz(" + value + ")"
                : value % 5 === 0
                    ? "Buzz(" + value + ")"
                    : value % 3 === 0
                        ? "Fizz(" + value + ")"
                        : value
            }
            {
                children &&
                <Context.Provider value={value}>
                    {children}
                </Context.Provider>
            }
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
        <div style={{ display: "inline-block", width: "50%", verticalAlign: "top" }}>
            順序に依存しないコンポーネント
            <div>
                <AddOne>
                    <AddOne>
                        <AddTwo>
                        </AddTwo >
                    </AddOne>
                </AddOne>
            </div>
            <br />
            非同期入れてみた
            <div>
                <AddOne>
                    <AddOneAsync>
                        <AddOne>
                            <AddOne>
                                <AddTwo>
                                    <AddOneAsync>
                                        <AddOne>
                                            <AddOne>
                                                <AddTwo>
                                                </AddTwo >
                                            </AddOne>
                                        </AddOne>
                                    </AddOneAsync>
                                </AddTwo >
                            </AddOne>
                        </AddOne>
                    </AddOneAsync>
                </AddOne>
            </div>
            <br />
            <div>
                ContextでFizzBuzz
            </div>
            <div style={{
                marginLeft: "2rem"
            }}>
                <ComponentReducer components={Array(100).fill(FizzBuzz)} />
            </div>
        </div>
        <div style={{ display: "inline-block", width: "50%", verticalAlign: "top" }}>
            <div>
                FizzBuzz非同期版
            </div>
            <div style={{
                marginLeft: "2rem"
            }}>
                <ComponentReducer components={Array(100).fill(FizzBuzzAsync)} />
            </div>
        </div>
    </div>;
};

export default App;
