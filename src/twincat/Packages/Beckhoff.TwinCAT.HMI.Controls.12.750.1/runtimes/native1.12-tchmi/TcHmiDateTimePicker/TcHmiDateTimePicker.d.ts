declare function parseInt(s: string | undefined, radix: number): number;
declare module TcHmi {
    module Controls {
        module Beckhoff {
            class TcHmiDateTimePicker extends TcHmi.Controls.System.TcHmiControl {
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                /** member variables */
                /** Reference to the root dom element of the current control template as  jquery object. */
                protected __elementTemplateRoot: HTMLElement;
                /** Reference to the root dom element of the current control template as  jquery object. */
                protected __elementDTPTemplate: JQuery;
                /** Reference to the div with calendar in the control template as jquery object. */
                protected __elementCalendarTemplate: JQuery;
                /** Reference to the div with calendar in the control template as jquery object. */
                protected __elementTimeAndButtonTemplate: JQuery;
                /** Reference to the button template dom element of the current control as  jquery object. */
                protected __elementButtonTemplate: HTMLElement;
                /**
                * Internal reference to the attribute "data-tchmi-value" (iso timestamp string)
                */
                protected __value: string | undefined;
                /**
                * Internal reference to the attribute "data-tchmi-direct-display"
                */
                protected __directDisplay: boolean | undefined;
                /**
                * Internal reference to the attribute "data-tchmi-show-confirmation-buttons"
                */
                protected __showConfirmationButtons: boolean | undefined;
                /** Event handlers */
                protected __mousedownHandler: (event: MouseEvent) => void;
                protected __mousedownCalendarHandler: (event: MouseEvent) => void;
                protected __mouseupHandler: (event: MouseEvent) => void;
                protected __focusoutHandler: (event: FocusEvent) => void;
                protected __keypressHandler: (event: KeyboardEvent) => void;
                private __onMousedownHourUpDestroyEvent;
                private __onMousedownHourDownDestroyEvent;
                private __onMousedownMinuteUpDestroyEvent;
                private __onMousedownMinuteDownDestroyEvent;
                private __onMousedownSecondUpDestroyEvent;
                private __onMousedownSecondDownDestroyEvent;
                private __onMousedownMillisecondUpDestroyEvent;
                private __onMousedownMillisecondDownDestroyEvent;
                private __onPressedOkDestroyEvent;
                private __onPressedCancelDestroyEvent;
                private __onTextChangedHourDestroyEvent;
                private __onTextChangedMinuteDestroyEvent;
                private __onTextChangedSecondDestroyEvent;
                private __onTextChangedMillisecondDestroyEvent;
                private __onUserInteractionFinishedHourDestroyEvent;
                private __onUserInteractionFinishedMinuteDestroyEvent;
                private __onUserInteractionFinishedSecondDestroyEvent;
                private __onUserInteractionFinishedMillisecondDestroyEvent;
                /** Stores the controls as System.baseTcHmiControl[] */
                protected __baseControls: Dictionary<System.baseTcHmiControl>;
                protected __localizationReader: Locale.LocalizationReader | undefined;
                protected __destroyLocalizationWatch: DestroyFunction | null;
                /** Internal date-object */
                protected __internalDateObject: TcHmi.Localization.DateParts;
                /** Saved if a time button is pressed */
                protected __isPressedTimeButtons: boolean;
                /** The interval timer for hour/minute buttons */
                protected __intervalTimerTimeButtons: number | null;
                /** Saved if the calendar is pressed */
                protected __isPressedCalendar: boolean;
                /** The interval timer for hour/minute buttons */
                protected __intervalTimerCalendar: number;
                /** millisecond offset from the current (not browser) timeZone to utc */
                protected __utcOffset: number;
                /**
                  * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                  * Call attribute processor functions here to initialize default values!
                  */
                __previnit(): void;
                /**
                * If raised, all attributes have been set to it's default or dom values.
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
                 * Return the currently configured UTC date.
                 * */
                protected __getUtcDate(): Date;
                /**
                 * Returns an event handler for the mousedown event.
                 */
                protected __onMousedown(): (event: MouseEvent) => void;
                /**
                 * Returns an event handler for the mousedown event of the choice area element.
                 */
                protected __onMousedownCalendar(): (event: MouseEvent) => void;
                /**
               * Is called if onPressed event of buttons has raised.
               */
                private __onMousedownTimeButtons;
                private __updateHeaderDate;
                /**
               * Is called if onPressed event of buttons has raised.
               */
                private __onMouseup;
                /**
                * Is called if onMouseDown event of buttons (ok and cancel) has raised.
                */
                private __onPressed;
                /**
                * Is called if onValueChanged event of Textbox has raised.
                */
                private __onTextChanged;
                /**
                * Is called if onUserInteractionFinished event of Textbox has raised.
                */
                private __onUserInteractionFinished;
                /**
                * Is called if focusout event  has raised.
                */
                private __onFocusOut;
                /**
                * Is called if keypress event  has raised.
                */
                private __onKeyPress;
                /**
                * Open the dateTimePicker (in TopMostLayer).
                */
                openDateTimePicker(): void;
                /**
                * Close the dateTimePicker without changes (delete from TopMostLayer).
                */
                closeDateTimePicker(): void;
                /**
                * Created a calendar for one year.
                */
                private createCalendar;
                /**
                * Created a time picker.
                */
                private createTime;
                /**
                * Sets the value of value
                * @param valueNew The new value for value
                */
                setValue(valueNew: string | null, process?: boolean): void;
                /**
                * Gets the value of value
                */
                getValue(): string;
                /**
                * Processes value
                */
                protected __processValue(): void;
                /**
                * Sets the value of DirectDisplay
                * @param valueNew The new value for DirectDisplay
                */
                setDirectDisplay(valueNew: boolean | null): void;
                /**
                * Gets the value of DirectDisplay
                */
                getDirectDisplay(): boolean | undefined;
                /**
                * Process the value of DirectDisplay
                */
                protected __processDirectDisplay(): void;
                /**
                * Sets the value of ShowConfirmationButtons
                * @param valueNew The new value for ShowConfirmationButtons
                */
                setShowConfirmationButtons(valueNew: boolean | null): void;
                /**
                * Gets the value of ShowConfirmationButtons
                */
                getShowConfirmationButtons(): boolean | undefined;
                /**
                * Process the value of ShowConfirmationButtons
                */
                protected __processShowConfirmationButtons(): void;
                /**
                 * Processes the current enabled state.
                 */
                __processIsEnabled(): void;
            }
        }
    }
}
//# sourceMappingURL=TcHmiDateTimePicker.d.ts.map