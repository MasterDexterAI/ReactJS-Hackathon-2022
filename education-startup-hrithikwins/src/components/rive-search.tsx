import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";

export default function RiveComponentSearch() {
    const { rive, RiveComponent } = useRive({
        src: "/magnifying-glass.riv",
        artboard: "New Artboard",
        animations: ["Bouncing"],
        layout: new Layout({
            fit: Fit.Contain,
            alignment: Alignment.Center,
        }),
        autoplay: true,
    });

    return (
        <RiveComponent
            key={"rive-magnifying-glass"}
            onMouseEnter={() => {
                rive && rive.play("Spinning");
                // mouseEnterEvents;
            }}
            onMouseLeave={() => rive && rive.pause("Spinning")}
        />
    );
}
