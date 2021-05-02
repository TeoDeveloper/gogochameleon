import { configureStore } from '@reduxjs/toolkit';
import skillsSectionSlice from '../components/skillsSection/reducer';
import multilanguageSlice from "../components/languageSelect/reducer";

export const store = configureStore({
  reducer: {
    multiLang: multilanguageSlice,
    skillsSection: skillsSectionSlice
  },
});
