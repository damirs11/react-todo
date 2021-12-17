import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import i18n from 'i18next';

function LandSelector() {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const onLangClick = (lang: string) =>  {
      i18n.changeLanguage(lang);
      handleClose();
    }

    return (
        <div className="lang">
            <Button
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              {i18n.language}
            </Button>
            <Menu
              className="lang"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              {i18n.languages.filter(lang => lang !== i18n.language).map((lang) => {
                return <MenuItem onClick={() => onLangClick(lang)}>
                  <span className="menu-item">{lang}</span>
                </MenuItem>
              })}
            </Menu>
        </div>
    );
}

export default LandSelector;