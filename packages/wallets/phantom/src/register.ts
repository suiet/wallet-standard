import type { WalletsWindow } from '@wallet-standard/standard';
import { PhantomWallet } from './wallet.js';

declare const window: WalletsWindow;

export function register(): void {
    try {
        (window.navigator.wallets ||= []).push(({ register }) => register(new PhantomWallet()));
    } catch (error) {
        console.error(error);
    }
}