import atexit
import os
import threading
import pyads
from inputs import get_gamepad
from collections import OrderedDict


class XboxController(object):

    def __init__(self):

        self.LeftJoystickY = 0
        self.LeftJoystickX = 0
        self.RightJoystickY = 0
        self.RightJoystickX = 0
        self.LeftTrigger = 0
        self.RightTrigger = 0
        self.LeftBumper = 0
        self.RightBumper = 0
        self.ButtonA = 0
        self.ButtonB = 0
        self.ButtonX = 0
        self.ButtonY = 0
        self.LeftThumb = 0
        self.RightThumb = 0
        self.Back = 0
        self.Start = 0
        self.DPadX = 0
        self.DPadY = 0

        self._monitor_thread = threading.Thread(target=self._monitor_controller, args=())
        self._monitor_thread.daemon = True
        self._monitor_thread.start()

    def read(self):  # return the buttons/triggers that you care about in this methode

        return OrderedDict([
            ('LeftJoystickX', self.LeftJoystickX),
            ('LeftJoystickY', self.LeftJoystickY),
            ('RightJoystickX', self.RightJoystickX),
            ('RightJoystickY', self.RightJoystickY),
            ('LeftTrigger', self.LeftTrigger),
            ('RightTrigger', self.RightTrigger),
            ('LeftBumper', self.LeftBumper),
            ('RightBumper', self.RightBumper),
            ('ButtonA', self.ButtonA),
            ('ButtonB', self.ButtonB),
            ('ButtonX', self.ButtonX),
            ('ButtonY', self.ButtonY),
            ('LeftThumb', self.LeftThumb),
            ('RightThumb', self.RightThumb),
            ('Back', self.Back),
            ('Start', self.Start),
            ('DPadX', self.DPadX),
            ('DPadY', self.DPadY)]
        )

    def _monitor_controller(self):
        try:
            print('Listening to controller events')
            while True:
                events = get_gamepad()
                for event in events:

                    # if event.ev_type != 'Sync':
                    #    print(event.ev_type, event.code, event.state)

                    if event.code == 'ABS_Y':
                        self.LeftJoystickY = event.state
                    elif event.code == 'ABS_X':
                        self.LeftJoystickX = event.state
                    elif event.code == 'ABS_RY':
                        self.RightJoystickY = event.state
                    elif event.code == 'ABS_RX':
                        self.RightJoystickX = event.state
                    elif event.code == 'ABS_Z':
                        self.LeftTrigger = event.state
                    elif event.code == 'ABS_RZ':
                        self.RightTrigger = event.state
                    elif event.code == 'BTN_TL':
                        self.LeftBumper = event.state
                    elif event.code == 'BTN_TR':
                        self.RightBumper = event.state
                    elif event.code == 'BTN_SOUTH':
                        self.ButtonA = event.state
                    elif event.code == 'BTN_NORTH':
                        self.ButtonY = event.state
                    elif event.code == 'BTN_WEST':
                        self.ButtonX = event.state
                    elif event.code == 'BTN_EAST':
                        self.ButtonB = event.state
                    elif event.code == 'BTN_THUMBL':
                        self.LeftThumb = event.state
                    elif event.code == 'BTN_THUMBR':
                        self.RightThumb = event.state
                    elif event.code == 'BTN_SELECT':
                        self.Back = event.state
                    elif event.code == 'BTN_START':
                        self.Start = event.state
                    elif event.code == 'ABS_HAT0X':
                        self.DPadX = event.state
                    elif event.code == 'ABS_HAT0Y':
                        self.DPadY = event.state
        except Exception as ex:
            print(ex)
            # pylint: disable=protected-access
            os._exit(1)


def close_connection(connection):
    print("Closing ADS connection")
    connection.close()


def remove_handle(connection, handle):
    print("Releasing ADS handle")
    connection.release_handle(handle)


if __name__ == '__main__':

    try:

        plc = pyads.Connection('127.0.0.1.1.1', 851)
        plc.open()
        atexit.register(close_connection, plc)

        plcHandle = plc.get_handle('Global.controller')
        atexit.register(remove_handle, plc, plcHandle)

        controller_structure_def = (
            ('LeftJoystickX', pyads.PLCTYPE_INT, 1),
            ('LeftJoystickY', pyads.PLCTYPE_INT, 1),
            ('RightJoystickX', pyads.PLCTYPE_INT, 1),
            ('RightJoystickY', pyads.PLCTYPE_INT, 1),
            ('LeftTrigger', pyads.PLCTYPE_INT, 1),
            ('RightTrigger', pyads.PLCTYPE_INT, 1),
            ('LeftBumper', pyads.PLCTYPE_BOOL, 1),
            ('RightBumper', pyads.PLCTYPE_BOOL, 1),
            ('ButtonA', pyads.PLCTYPE_BOOL, 1),
            ('ButtonB', pyads.PLCTYPE_BOOL, 1),
            ('ButtonX', pyads.PLCTYPE_BOOL, 1),
            ('ButtonY', pyads.PLCTYPE_BOOL, 1),
            ('LeftThumb', pyads.PLCTYPE_BOOL, 1),
            ('RightThumb', pyads.PLCTYPE_BOOL, 1),
            ('Back', pyads.PLCTYPE_BOOL, 1),
            ('Start', pyads.PLCTYPE_BOOL, 1),
            ('DPadX', pyads.PLCTYPE_INT, 1),
            ('DPadY', pyads.PLCTYPE_INT, 1)
        )

        xboxController = XboxController()

        while True:
            plc.write_structure_by_name('', xboxController.read(), controller_structure_def, handle=plcHandle)

    except Exception as e:
        print(e)

    finally:
        print("Shutting down application")
