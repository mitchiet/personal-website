import { Button } from '../tailwind-catalyst/button'
import { Dialog, DialogBody, DialogTitle } from '../tailwind-catalyst/dialog'
import { Field } from '../tailwind-catalyst/fieldset'
import { XMarkIcon } from '@heroicons/react/24/solid'
import PropTypes from 'prop-types';

import pic from '../../assets/images/esp32.jpg';

function ESP32Dialog(props:any) {
  return (
    <Dialog open={props.isOpen} onClose={() => {}} className={props.className}>
      <DialogTitle className="inline-flex items-center border-b-2 border-zinc-950/10 pb-4 dark:border-white/10 w-full">
        <Button plain className="float-start mr-2 cursor-pointer" onClick={() => props.isOpenSetter(false)}>
          <XMarkIcon />
        </Button>
        <span className="inline-block align-middle">Espressif ESP32 Microcontroller</span>
      </DialogTitle>
      <DialogBody className="overflow-y-scroll max-h-130 pr-5 scrollbar">
        <Field>
          <p>
            My senior design project was to design an automated smoker system.
            The system consisted of a control unit, three thermocouples, a blow fan, and two motors
            (for fuel intake and vent control). The microcontroller was programmed to control internal temperatures
            based on a PID algorithm. Additionally, an app was created that allowed for Bluetooth control.
            My portion of the work was to design the PCB and program the microcontroller unit. 
          </p>
        </Field>
        <br/>
        <Field>
          <img className="rounded-xl border-2" src={pic}></img>
        </Field>
        <br/>
        <Field>
          <p>
            It was a very fun project to work on,
            but in the end, I would recommend a <a className="link" href="https://www.traeger.com">Traeger</a> grill designed
            by a professional team with more time and budget😆.
          </p>
        </Field>
      </DialogBody>
    </Dialog>
  )
}


ESP32Dialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isOpenSetter: PropTypes.func.isRequired,
  className: PropTypes.string
}

export default ESP32Dialog
