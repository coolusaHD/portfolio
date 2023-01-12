import TranslateIcon from '@mui/icons-material/Translate';
import { IconButton, ListItemIcon, ListItemText, Menu, MenuItem, MenuList } from '@mui/material';
import React from 'react';
import Flag from 'react-world-flags';
import i18n from '../assets/translations/i18n';

export type SupportedLanguages = 'en' | 'de';

interface Languages {
  code: SupportedLanguages;
  isoCountryCode: string;
  name: string;
}

const languages: Languages[] = [
  {
    code: 'en',
    name: 'English',
    isoCountryCode: '826',
  },
  {
    code: 'de',
    name: 'Deutsch',
    isoCountryCode: '276',
  },
];

export const LanguagesSwitch = (): React.ReactElement => {
  const changeLanguage = (lng: SupportedLanguages) => {
    i18n.changeLanguage(lng);
    handleClose();
  };
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={openMenu}>
        <TranslateIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuList>
          {languages.map((language) => (
            <MenuItem key={language.code} onClick={() => changeLanguage(language.code)}>
              <ListItemIcon>
                <Flag code={language.isoCountryCode} height="15" />
              </ListItemIcon>
              <ListItemText>{language.name}</ListItemText>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};
