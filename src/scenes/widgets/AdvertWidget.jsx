import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          The North
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="https://media.nature.com/lw767/magazine-assets/d41586-019-00877-5/d41586-019-00877-5_16559120.jpg?as=webp"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Sea Ice</Typography>
        <Typography color={medium}>https://www.nature.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      German research icebreaker Polarstern has struggled to navigate thick sea ice near Antarctica.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
