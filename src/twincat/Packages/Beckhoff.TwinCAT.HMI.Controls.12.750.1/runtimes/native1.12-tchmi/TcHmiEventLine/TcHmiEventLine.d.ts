declare module TcHmi {
    module Controls {
        module Beckhoff {
            class TcHmiEventLine extends TcHmi.Controls.System.TcHmiControl {
                /**
                 * Constructor of the control
                 * @param element Element from HTML (internal, do not use)
                 * @param pcElement precompiled Element (internal, do not use)
                 * @param attrs Attributes defined in HTML in a special format (internal, do not use)
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                /**HTML-ElementTemplate root*/
                protected __elementTemplateRoot: HTMLElement;
                /**HTML-ElementTemplate for the severity icon */
                protected __elementIcon: HTMLElement;
                /**HTML-ElementTemplate for the message display*/
                protected __elementEvent: HTMLElement;
                /**HTML-ElementTemplate for link button*/
                protected __elementButton: HTMLElement;
                /**Mouse Enter eventhandler for element template root */
                protected readonly __evtHandlerMouseEnter: ((this: void, e: MouseEvent) => void);
                /**Mouse Leave eventhandler for element template root */
                protected readonly __evtHandlerMouseLeave: ((this: void, e: MouseEvent) => void);
                /**Mouse down eventhandler for element template root */
                protected readonly __evtHandlerMouseDown: ((this: void, e: MouseEvent) => void);
                /**Mouse up eventhandler for element template root */
                protected readonly __evtHandlerMouseUp: ((this: void, e: MouseEvent) => void);
                /**Mouse up eventhandler for element template root */
                protected readonly __evtHandlerTouchStart: ((this: void, e: TouchEvent) => void);
                /**Mouse up eventhandler for element template root */
                protected readonly __evtHandlerTouchEndOrCancel: ((this: void, e: TouchEvent) => void);
                /**Mouse up eventhandler for element template root */
                protected readonly __evtHandlerDocumentMouseUp: ((this: void, e: MouseEvent) => void);
                /**Event destroy Functions array */
                protected __eventDestroyFunctions: DestroyFunction[];
                /**mousedown boolean for the document */
                protected __mouseDown: boolean;
                /**text color */
                protected __textColor: SolidColor | null | undefined;
                /**text font size */
                protected __textFontSize: number | undefined;
                /**text font size unit */
                protected __textFontSizeUnit: FontSizeUnit | undefined;
                /**font family of the text*/
                protected __textFontFamily: FontFamily | null | undefined;
                /**font style of the text*/
                protected __textFontStyle: FontStyle | undefined;
                /**font weight of the text*/
                protected __textFontWeight: FontWeight | undefined;
                /**tchmi region to set the target content */
                protected __targetRegion: TcHmi.Controls.System.TcHmiRegion | null | undefined;
                /**target content, content to event-page of the application */
                protected __targetContent: string | null | undefined;
                /**Filter for the displayed Events */
                protected __filter: Filter | null | undefined;
                /**The criteria according to which the events are sorted */
                protected __sorting: TcHmi.SortingInfo[] | undefined;
                /**Eventlist */
                protected __event: TcHmi.Server.Events.Message | TcHmi.Server.Events.Alarm | TcHmi.Server.Events.PayloadEvent | undefined;
                /** The Id of the event subscription*/
                protected __subscriptionId: number;
                /**Server Interval */
                protected __serverInterval: number | null | undefined;
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
                /** */
                protected __updateSubscription(): void;
                /**
                 * Handles the response of the subscription.
                 */
                protected __serverResponseHandler(): (data: Server.IResultObject) => void;
                /**
                  * Update displayed Event
                  */
                protected __updateEventLine(): void;
                /**
                 * eventhandler function for onPressed raises logic
                 */
                protected __onPressed(): (event: TcHmi.EventProvider.Event) => void;
                /**
                  * eventhandler function for mouse up
                  */
                protected __onMouseUp(): (event: MouseEvent) => void;
                /**
                  * eventhandler function for mouse enter
                  */
                protected __onMouseEnter(): (event: MouseEvent) => void;
                /**
                  * eventhandler function for mouse down
                  */
                protected __onMouseDown(): (event: MouseEvent) => void;
                /**
                  * eventhandler function for mouse leave
                  */
                protected __onMouseLeave(): (event: MouseEvent) => void;
                /**
                  * eventhandler function for touch start
                  */
                protected __onTouchStart(): (event: TouchEvent) => void;
                /**
                  * eventhandler function for touch start end or cancel
                  */
                protected __onTouchEndOrCancel(): (event: TouchEvent) => void;
                /**
                  * eventhandler function for mouse down
                  */
                protected __onDocumentMouseUp(): (event: MouseEvent) => void;
                /**
                  * Event callback for rezise event
                  */
                protected __onResized(): (event: TcHmi.EventProvider.Event) => void;
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
                 * Sets the serverInterval value and calls the associated process function.
                 * @param valueNew The new value for serverInterval.
                 */
                setServerInterval(valueNew: number | null): void;
                /**
                 * Returns the current value of serverInterval.
                 */
                getServerInterval(): number | null | undefined;
                /**
                 * Processes the current serverInterval value.
                 */
                protected __processServerInterval(): void;
                /**
                * Sets the filter value and calls the associated process function.
                * @param valueNew The new value for filter.
                */
                setFilter(valueNew: Filter | null): void;
                /**
                 * The watch callback for the filter object resolver.
                 */
                protected __onResolverForFilterWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<Filter>) => void;
                /**
                 * Returns the current value of filter.
                 * @returns the current value of filter.
                 */
                getFilter(): Filter | null | undefined;
                /**
                 * Processes the current filter value.
                 */
                protected __processFilter(): void;
                /**
                 * Sets the value of the member variable "sorting" if the new value is not equal to the current value
                 * and calls the associated process function (processSorting) after that.
                 * @param valueNew The new value for sorting.
                 */
                setSorting(valueNew: TcHmi.SortingInfo[] | null): void;
                /**
                 * The watch callback for the sorting object resolver
                 */
                protected __onResolverForSortingWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<TcHmi.SortingInfo[]>) => void;
                /**
                 * Returns the current value of the member variable sorting.
                 */
                getSorting(): SortingInfo[] | undefined;
                /**
                 * Processes the current value of sorting.
                 */
                protected __processSorting(): void;
                /**
                 * Sets the content value and calls the associated process function (processContent).
                 * @param valueNew The new value for the content attribute as string. Relative path value.
                 *
                 */
                setTargetRegion(valueNew: TcHmi.Controls.System.TcHmiRegion | null): void;
                /**
                * Returns the current targetRegion value.
                * @returns The current value of the content member variable as string. Relative path value.
                */
                getTargetRegion(): System.TcHmiRegion | null | undefined;
                /**
                * Processes the current TargetContent attribute value.
                */
                protected __processTargetRegion(): void;
                /**
                 * Sets the content value and calls the associated process function (processContent).
                 * @param valueNew The new value for the content attribute as string. Relative path value.
                 *
                 */
                setTargetContent(valueNew: string | null): void;
                /**
                * Returns the current TargetContent value.
                * @returns The current value of the content member variable as string. Relative path value.
                */
                getTargetContent(): string | null | undefined;
                /**
                * Processes the current TargetContent attribute value.
                */
                protected __processTargetContent(): void;
                /**
                * Sets the text color and calls the associated process function (processTextColor).
                * @param valueNew The new value for textFColor.
                */
                setTextColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the textColor object resolver.
                 */
                protected __onResolverForTextColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current value of textColor.
                * @returns The current value of textColor.
                */
                getTextColor(): SolidColor | null | undefined;
                /**
                * Processes the current textColor attribute value.
                */
                protected __processTextColor(): void;
                /**
                * Sets the font size and calls the associated process function (processTextFontSize).
                * @param valueNew The new value for textFontSize.
                */
                setTextFontSize(valueNew: number | null): void;
                /**
                * Returns the current value of textFontSize.
                * @returns The current value of textFontSize.
                */
                getTextFontSize(): number | undefined;
                /**
                * Processes the current textFontSize attribute value.
                */
                protected __processTextFontSize(): void;
                /**
                * Sets the font size unit and calls the associated process function (processTextFontSizeUnit).
                * @param valueNew The new value for textFontSizeUnit.
                */
                setTextFontSizeUnit(valueNew: FontSizeUnit | null): void;
                /**
                * Returns the current value of textFontSizeUnit.
                * @returns The current value of textFontSizeUnit.
                */
                getTextFontSizeUnit(): FontSizeUnit | undefined;
                /**
                * Processes the current textFontSizeUnit attribute value.
                */
                protected __processTextFontSizeUnit(): void;
                /**
                * Sets the font family and calls the associated process function (processTextFontFamily).
                * @param valueNew The new value for textFontFamily.
                */
                setTextFontFamily(valueNew: FontFamily | null): void;
                /**
                * Returns the current value of textFontFamily.
                * @returns The current value of textFontFamily.
                */
                getTextFontFamily(): string | null | undefined;
                /**
                * Processes the current textFontFamily attribute value.
                */
                protected __processTextFontFamily(): void;
                /**
                * Sets the font style and calls the associated process function (processTextFontStyle).
                * @param valueNew The new value for textFontStyle.
                */
                setTextFontStyle(valueNew: FontStyle | null): void;
                /**
                * Returns the current value of textFontStyle.
                * @returns The current value of textFontStyle.
                */
                getTextFontStyle(): FontStyle | undefined;
                /**
                * Processes the current textFontStyle attribute value.
                */
                protected __processTextFontStyle(): void;
                /**
                * Sets the font weight and calls the associated process function (processTextFontWeight).
                * @param valueNew The new value for textFontWeight.
                */
                setTextFontWeight(valueNew: FontWeight | null): void;
                /**
                * Returns the current value of textFontWeight.
                * @returns The current value of textFontWeight.
                */
                getTextFontWeight(): FontWeight | undefined;
                /**
                * Processes the current textFontWeight attribute value.
                */
                protected __processTextFontWeight(): void;
            }
        }
    }
}
//# sourceMappingURL=TcHmiEventLine.d.ts.map