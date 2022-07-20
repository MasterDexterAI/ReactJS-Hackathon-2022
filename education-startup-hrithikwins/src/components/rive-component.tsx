import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";

export default function RiveComponentFlutter({ mouseEnterEvents }) {
    const { rive, RiveComponent } = useRive({
        src: "/flutter-mascot.riv",
        artboard: "birb",
        animations: ["idle"],
        layout: new Layout({
            fit: Fit.Contain,
            alignment: Alignment.Center,
        }),
        autoplay: true,
    });

    return (
        <RiveComponent
            key={"rive-key"}
            onMouseEnter={async () => {
                rive && rive.pause();
                await rive && rive.play("slowDance");
                await rive && rive.pause("slowDance");
                await rive && rive.play();
                mouseEnterEvents;
            }}
            onMouseLeave={() => rive && rive.pause("slowDance")}
        />
    );
}
