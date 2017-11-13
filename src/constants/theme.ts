/**
 * Purpose: Contains global theme settings, including that of 
 *              - color, 
 *              - default heights/widths 
 *              - break points
 */

/** 
 * Colors
 */
const BLEU_DE_FRANCE: string = '#2F80ED';
const BRANDEIS_BLUE: string = '#076aed';
const ALICE_BLUE: string = '#EAF3FF';
const ISABELLINE: string = '#EFEFEF';
const RAISIN_BLACK: string = '#232323';
const OUTER_SPACE: string = '#494949';
const SILVER_SAND: string = '#C4C4C4';
const GAINSBORO: string = '#D8DBE0';
const ASH_GREY: string = '#AEB4BC';
const SPACE_CADET: string = '#193253';
const AUROMETAL_SAURUS: string = '#667181';
const PLATINUM: string = '#E0E0E0';
        
import ThemeInterface from '../interfaces/ThemeInterface';

// Export constants
const theme: ThemeInterface = {
    colors: {
        BLEU_DE_FRANCE,
        ALICE_BLUE,
        ISABELLINE,
        RAISIN_BLACK,
        OUTER_SPACE,
        SILVER_SAND,
        GAINSBORO,
        ASH_GREY,
        SPACE_CADET,
        AUROMETAL_SAURUS,
        PLATINUM,
        BRANDEIS_BLUE
    }
};

export default theme;