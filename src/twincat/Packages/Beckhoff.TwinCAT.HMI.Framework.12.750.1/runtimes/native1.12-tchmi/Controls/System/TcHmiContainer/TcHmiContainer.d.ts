declare module TcHmi {
    module Controls {
        module System {
            class TcHmiContainer extends TcHmi.Controls.System.TcHmiContainerControl {
                /** Constructor */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __elementTemplateRoot: JQuery;
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
                * Adds a child to DOM
                */
                addChild(control: TcHmi.Controls.System.baseTcHmiControl | undefined | null, pos?: number | null): void;
                __addChild(control: TcHmi.Controls.System.baseTcHmiControl, pos?: number | null): void;
                /**
                */
                removeChild(control: TcHmi.Controls.System.baseTcHmiControl | undefined | null): void;
                __removeChild(control: TcHmi.Controls.System.baseTcHmiControl): void;
            }
        }
    }
}
//# sourceMappingURL=TcHmiContainer.d.ts.map