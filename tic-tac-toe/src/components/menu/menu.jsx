"use client";
import { BotaoMenu, ContainerMenu, MenuFlutuante } from './menu-styles';
import { useState } from 'react';
import ColorSelectorT from '../color-selector/color-selector';
import { BACKGROUND_TABLE_COLOR_LABEL, WINNER_COLOR_LABEL, LOSER_COLOR_LABEL, FONT_COLOR_LABEL, FONT_COLOR_X_LABEL, FONT_COLOR_O_LABEL, MENU_LABEL } from '@constants/constantes';

import { useColor } from '@/context/color-context';

const Menu = () => {
    const [showMenu, setShowMenu] = useState(false);
    const { backgroundTableColor, setBackgroundTableColor, winnerColor, setWinnerColor, loserColor, setLoserColor, fontColor, setFontColor, fontColorX, setFontColorX, fontColorO, setFontColorO } = useColor();

    const handleClick = () => {
        setShowMenu(!showMenu);
    }

    return (
        <ContainerMenu>
            <BotaoMenu onClick={handleClick}>
                {MENU_LABEL}
            </BotaoMenu>
            <MenuFlutuante showMenu={showMenu}>
                <ul>
                    <ColorSelectorT key={BACKGROUND_TABLE_COLOR_LABEL} label={BACKGROUND_TABLE_COLOR_LABEL} value={backgroundTableColor} onChange={setBackgroundTableColor} />
                    <ColorSelectorT key={WINNER_COLOR_LABEL} label={WINNER_COLOR_LABEL} value={winnerColor} onChange={setWinnerColor} />
                    <ColorSelectorT key={FONT_COLOR_X_LABEL} label={FONT_COLOR_X_LABEL} value={fontColorX} onChange={setFontColorX} />
                    <ColorSelectorT key={FONT_COLOR_O_LABEL} label={FONT_COLOR_O_LABEL} value={fontColorO} onChange={setFontColorO} />
                </ul>
            </MenuFlutuante>
        </ContainerMenu>

    )
}

export default Menu;