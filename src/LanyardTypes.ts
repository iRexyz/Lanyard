//thanks alistair @ uwu.red

export interface Root {
    success: boolean;
    data: Data;
}

export interface Data {

    discord_user: DiscordUser;
    active_on_discord_mobile: boolean;
    active_on_discord_desktop: boolean;
}





export interface DiscordUser {
    username: string;
    public_flags: number;
    id: string;
    discriminator: string;
    avatar: string;
}



export interface Emoji {
    name: string;
    id: number;
    animated: boolean;
}

export interface Timestamps2 {
    start: number;
    end?: number;
}

export interface Party {
    id: string;
}

export interface Assets {
    small_text?: string;
    small_image?: string;
    large_text: string;
    large_image: string;
}
