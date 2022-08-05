import { FunctionComponent } from 'react';
import { selectKey } from '../../domain/keyboard';
import { notes, MidiValue } from '../../domain/note';
import { Key } from '../Key';
import styles from './Keyboard.module.css';

export type KeyboardProps = {
  loading: boolean;
  play: (note: MidiValue) => Promise<void>;
  stop: (note: MidiValue) => Promise<void>;
};

export const Keyboard: FunctionComponent<KeyboardProps> = ({
  loading,
  stop,
  play,
}) => {
  return (
    <div className={styles.keyboard}>
      {notes.map(({ midi, type, index, octave }) => {
        const label = selectKey(octave, index);
        return (
          <Key
            key={midi}
            type={type}
            disabled={loading}
            label={label}
            onDown={() => play(midi)}
            onUp={() => stop(midi)}
          />
        );
      })}
    </div>
  );
};
