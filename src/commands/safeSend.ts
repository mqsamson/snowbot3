import { TextBasedChannel, MessagePayload, MessageCreateOptions } from "discord.js";

/**
 * Check that message can be sent to original channel
 */
export async function safeSend(
    channel: unknown,
    content: string | MessagePayload | MessageCreateOptions
): Promise<void> {
    if(typeof channel === "object" &&
        channel !== null &&
        "send" in channel && // Make sure the channel has a 'send' method
        typeof (channel as any).send === "function" &&
        "isSendable" in channel && // Make sure it has isSendable method
        typeof (channel as any).isSendable === "function" &&
        (channel as any).isSendable() // Check if the channel is sendable
    ){
        try {
            await typeof(channel as any).send(content);
        } catch (err){
            console.error("safeSend failed:", err);
        }
    } else {
        console.warn("Channel is not sendable or 'send' method not found.");
    }
}