declare module TcHmi {
    module Controls {
        module Beckhoff {
            class TcHmiAdsState extends TcHmi.Controls.System.TcHmiControl {
                /**
                 * Constructor of the control
                 * @param element Element from HTML (internal, do not use)
                 * @param pcElement precompiled Element (internal, do not use)
                 * @param attrs Attributes defined in HTML in a special format (internal, do not use)
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                /** HTML root element */
                protected __elementTemplateRoot: HTMLElement;
                /** Server Domain */
                protected __serverDomain: string | null | undefined;
                /** Server Interval */
                protected __serverInterval: number | null | undefined;
                /** ADS Runtime*/
                protected __adsRuntime: string | null | undefined;
                /** state list */
                protected __stateImages: TcHmiAdsState.IStateImages | null | undefined;
                /** The id of the subscription */
                protected __subscriptionId: number | null;
                /** Localization */
                protected __localizedElements: Map<HTMLElement, {
                    key: string;
                    parameters?: any[] | undefined;
                }>;
                protected __localizationReader: Locale.LocalizationReader | undefined;
                protected __destroyLocalizationWatch: DestroyFunction | null;
                /**
                  * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                  * Call attribute processor functions here to initialize default values!
                  */
                __previnit(): void;
                /**
                 * Is called during control initialize phase after attribute setter have been called based on it's default or initial html dom values.
                 */
                __init(): void;
                /**
                * Is called by tachcontrol() after the control instance gets part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __attach(): void;
                /**
                * Is called by tachcontrol() after the control instance is no longer part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __detach(): void;
                /**
                * Destroy the current control instance.
                * Will be called automatically if system destroys control!
                */
                destroy(): void;
                /**
                 * Updates the subscription getting metadata for the Ads state.
                 */
                protected __updateSubscription(): void;
                /**
                 * Handles the response of the subscription.
                 */
                protected __serverResponseHandler(): (data: Server.IResultObject<string, {
                    AdsState: TcHmiAdsState.AdsState;
                    DeviceState: number;
                }>) => void;
                /**
                 * Add an element to be localized.
                 * @param element The element.
                 * @param key The localization key.
                 * @param parameters Optional parameters to pass to tchmi_format_string.
                 */
                __addLocalizedElement(element: HTMLElement, key: string, ...parameters: any[]): void;
                /**
                 * Remove a localized element.
                 * @param element The element to remove.
                 */
                __removeLocalizedElement(element: HTMLElement): void;
                /**
                 * Sets the AdsRuntime value and calls the associated process function (processAdsRuntime).
                 * @param valueNew The new value for the AdsRuntime attribute.
                 */
                setAdsRuntime(valueNew: string | null): void;
                /**
                * Returns the current AdsRuntime value.
                * @returns The current AdsRuntime value.
                */
                getAdsRuntime(): string | null | undefined;
                __processAdsRuntime(): void;
                /**
                 * Sets the ServerInterval value and calls the associated process function (processServerInterval).
                 * @param valueNew The new value for the ServerInterval attribute.
                 */
                setServerInterval(valueNew: number | null): void;
                /**
                * Returns the current ServerInterval value.
                * @returns The current ServerInterval value.
                */
                getServerInterval(): number | null | undefined;
                __processServerInterval(): void;
                /**
                 * Sets the ServerDomain value and calls the associated process function (processServerDomain).
                 * @param valueNew The new value for the ServerDomain attribute.
                 */
                setServerDomain(valueNew: string | null): void;
                /**
                * Returns the current ServerDomain value.
                * @returns The current ServerDomain value.
                */
                getServerDomain(): string | null | undefined;
                __processServerDomain(): void;
                /**
                 * Sets the StateImages value and calls the associated process function (processStateImages).
                 * @param valueNew The new value for the StateImages attribute.
                 *
                 */
                setStateImages(valueNew: TcHmiAdsState.IStateImages | null): void;
                /**
                 * The watch callback for the srcData object resolver.
                 */
                protected __onResolverForStateImagesWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<TcHmiAdsState.IStateImages | null>) => void;
                /**
                * Returns the current StateImages value.
                * @returns The current value of the StateImages.
                */
                getStateImages(): TcHmiAdsState.IStateImages | null | undefined;
                /**
                 * Processes the current stateImages attribute value.
                 */
                __processStateImages(): void;
            }
            module TcHmiAdsState {
                enum AdsState {
                    Invalid = 0,
                    Idle = 1,
                    Reset = 2,
                    Init = 3,
                    Start = 4,
                    Run = 5,
                    Stop = 6,
                    SaveCfg = 7,
                    LoadCfg = 8,
                    PowerFailure = 9,
                    PowerGood = 10,
                    Error = 11,
                    Shutdown = 12,
                    Suspend = 13,
                    Resume = 14,
                    Config = 15,
                    Reconfig = 16,
                    Stopping = 17,
                    Incompatible = 18,
                    Exception = 19
                }
                interface IStateImages {
                    Fallback: string;
                    Invalid: string;
                    Idle: string;
                    Reset: string;
                    Init: string;
                    Start: string;
                    Run: string;
                    Stop: string;
                    SaveCfg: string;
                    LoadCfg: string;
                    PowerFailure: string;
                    PowerGood: string;
                    Error: string;
                    Shutdown: string;
                    Suspend: string;
                    Resume: string;
                    Config: string;
                    Reconfig: string;
                    Stopping: string;
                    Incompatible: string;
                    Exception: string;
                }
            }
        }
    }
}
//# sourceMappingURL=TcHmiAdsState.d.ts.map