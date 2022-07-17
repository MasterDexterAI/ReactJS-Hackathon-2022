import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";

export default function RiveComponentFlutter({ mouseEnterEvents }) {
    const { rive, RiveComponent } = useRive({
        src: "/flutter-mascot.riv",
        artboard: "birb",
        animations: ["idle"],
        layout: new Layout({
            fit: Fit.Contain,
            alignment: Alignment.TopCenter,
        }),
        autoplay: true,
    });

    return (
        <RiveComponent
            key={"rive-key"}
            onMouseEnter={async () => {
                rive && rive.pause();
                await rive.play("slowDance");
                await rive.pause("slowDance");
                await rive.play();
                mouseEnterEvents;
            }}
            onMouseLeave={() => rive && rive.pause("slowDance")}
        />
    );
}
