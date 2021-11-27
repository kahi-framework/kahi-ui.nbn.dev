import {compress, decompress} from "lzutf8";

// NOTE: Abstracting here incase of algorithm changes

/**
 * Uses a modified LZ77 compression to compress the input text and then
 * return encoded as Base64 for use in URLs
 *
 * @param text
 * @returns
 */
export function compress_safe(text: string): string {
    const compressed = compress(text, {
        inputEncoding: "String",
        outputEncoding: "Base64",
    });

    return encodeURIComponent(compressed);
}

/**
 * Uses a modified LZ77 compression to compress the input text and then
 * return encoded as Base64 for use in Web Storage
 *
 * @param text
 * @returns
 */
export function compress_storage(text: string): string {
    return compress(text, {
        inputEncoding: "String",
        outputEncoding: "StorageBinaryString",
    });
}

/**
 * Uses a modified LZ77 compression to decompress the Base64-encoded
 * input payload
 *
 * @param payload
 * @returns
 */
export function decompress_safe(payload: string): string {
    const decoded = decodeURIComponent(payload);

    return decompress(decoded, {
        inputEncoding: "Base64",
        outputEncoding: "String",
    });
}

/**
 * Uses a modified LZ77 compression to decompress the Web Storage
 * encoded input payload
 *
 * @param payload
 * @returns
 */
export function decompress_storage(payload: string): string {
    return decompress(payload, {
        inputEncoding: "StorageBinaryString",
        outputEncoding: "String",
    });
}
