import { useEffect } from "react";

const KonzertmeisterIframe = () => {
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const frame = document.getElementById("km-list-frame");
      if (
        event &&
        event.data &&
        event.data["kmAppointmentListHeight"] &&
        typeof event.data["kmAppointmentListHeight"] === "number" &&
        frame
      ) {
        const borderWidth = isNaN(
          parseInt(frame.style.borderWidth?.replace("px", ""), 10)
        )
          ? 0
          : parseInt(frame.style.borderWidth.replace("px", ""), 10);
        frame.style.height =
          event.data["kmAppointmentListHeight"] + 2 * borderWidth + "px";
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <iframe
      id="km-list-frame"
      title="Konzertmeister Termine"
      style={{
        display: "block",
        boxSizing: "border-box",
        width: "100%",
        maxWidth: "640px",
        margin: "0 auto",
        border: "solid 1px #bbb",
      }}
      src="https://rest.konzertmeister.app/api/v3/org/OALS_a630180a-acb8-4d8e-9f75-57c692db296b/upcomingappointments?types=2&showDescription=false&onlyPublicsite=false&limit=15&display=light&lang=de&hash=79a836505528310fca9bc13150d9143bc166d6bc46bbc241a6cbc6b25bee845e"
    />
  );
};

export default KonzertmeisterIframe;
