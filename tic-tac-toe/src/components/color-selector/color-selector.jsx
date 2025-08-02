import { ColorSelectorInput, ColorSelectorContainer, ColorSelectorLabel } from './color-selector-styles';

const ColorSelectorT = ({ label, onChange, value }) => {
    const handleChange = (e) => {
        onChange(e.target.value);
    }
    return (
        <ColorSelectorContainer>
            <ColorSelectorLabel>{label}</ColorSelectorLabel>
            <ColorSelectorInput type="color" onChange={handleChange} value={value} />
        </ColorSelectorContainer>
    )
}

export default ColorSelectorT;