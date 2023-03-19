import { useContext } from "react";
import { darkTheme } from "../../theme/theme";
import { DarkSideContext } from "../../context/DarkSideContext";
import { Image, ToggleButton, ToggleWrapper } from "../../styles/Toggle";

const Toggle = () => {
  const { toggleTheme, theme } = useContext(DarkSideContext);

  return (
    <ToggleWrapper>
      <Image src={"/public/lightsaber-light.png"} alt="light mode icon" />
      <ToggleButton data-testid="toggle" onClick={toggleTheme} active={theme === darkTheme} />
      <Image src={"/public/lightsaber.png"} alt="dark mode icon" />
    </ToggleWrapper>
  );
};

export default Toggle;
