import type { HomeAssistant } from "../types";
export interface SpeechMetadata {
    language: string;
    format: "wav" | "ogg";
    codec: "pcm" | "opus";
    bit_rate: 8 | 16 | 24 | 32;
    sample_rate: 8000 | 11000 | 16000 | 18900 | 22000 | 32000 | 37800 | 44100 | 48000;
    channel: 1 | 2;
}
export interface STTEngine {
    engine_id: string;
    supported_languages?: string[];
    name?: string;
    deprecated: boolean;
}
export declare const listSTTEngines: (hass: HomeAssistant, language?: string, country?: string) => Promise<{
    providers: STTEngine[];
}>;
