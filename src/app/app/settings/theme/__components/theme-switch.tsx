import { Howl } from 'howler';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

type ThemeSwitchProps = {
    className?: string;
};

export default function ThemeSwitch({ className }: ThemeSwitchProps) {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    const clickOn = '/sounds/clickOn.wav';
    const clickOff = '/sounds/clickOff.wav';

    const playClickSound = (audio: string) => {
        const sound = new Howl({
            src: [audio], 
            volume: 0.5, 
        });
        sound.play();
    };

    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return (
            <SunIcon className={cn('animate-pulse text-yellow-400', className)} />
        );
    }

    return (
        <div className={cn('', className)}>
            {resolvedTheme === 'dark' ? (
                <button onClick={() => { setTheme('light'); playClickSound(clickOn);}} 
                className={cn('transition duration-500 border rounded-full p-1', className)}>
                    <MoonIcon className={cn('dark:hover:text-yellow-400', className)} />
                </button>
            ) : (
                <button onClick={() => { setTheme('dark'); playClickSound(clickOff);}} 
                className={cn('transition duration-500 border border-yellow-400 rounded-full p-1', className)}>
                    <SunIcon className={cn("text-yellow-400", className)} />
                </button>
            )}
        </div>
    );
}
