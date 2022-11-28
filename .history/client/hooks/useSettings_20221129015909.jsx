import { useContext } from 'react';
import {SettingsContext} from '../contexts/SettingsContext.jsx';

// ----------------------------------------------------------------------

const useSettings = () => useContext(SettingsContext);

export default useSettings;
