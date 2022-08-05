import { FC, useState, ReactNode } from 'react';
import { DEFAULT_INSTRUMENT } from '../../domain/sound';
import { InstrumentContext } from './Context';

export type InstrumentContextProviderProps = {
  children: ReactNode;
};

export const InstrumentContextProvider: FC<InstrumentContextProviderProps> = ({
  children,
}) => {
  const [instrument, setInstrument] = useState(DEFAULT_INSTRUMENT);

  return (
    <InstrumentContext.Provider value={{ instrument, setInstrument }}>
      {children}
    </InstrumentContext.Provider>
  );
};
