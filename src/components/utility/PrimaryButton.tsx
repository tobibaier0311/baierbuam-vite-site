import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

type PrimaryButtonProps = {
  link: string;
  label: string;
  secondary?: boolean;
};

export default function PrimaryButton({
  link,
  label,
  secondary,
}: PrimaryButtonProps) {
  const styles = {
    button: {
      "&:hover": {
        backgroundColor: secondary ? "#f5f5f590" : "#04255690",
      },
      color: secondary ? "#042556" : "whitesmoke",
      backgroundColor: secondary ? "whitesmoke" : "#042556",
      border: secondary ? "1px solid #04255690" : "1px solid whitesmoke",
      fontFamily: "Poppins",
    },
  };
  const to = useNavigate();
  return (
    <Button
      sx={styles.button}
      variant="contained"
      disableRipple
      size="large"
      onClick={() => to(link)}
    >
      {label}
    </Button>
  );
}
