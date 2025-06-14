import { Button } from '../tailwind-catalyst/button'
import { Dialog, DialogBody, DialogTitle } from '../tailwind-catalyst/dialog'
import { Field } from '../tailwind-catalyst/fieldset'
import { XMarkIcon } from '@heroicons/react/24/solid'
import PropTypes from 'prop-types';

import pic from '../../assets/images/esp32.jpg';

function ESP32Dialog(props:any) {
  return (
    <Dialog open={props.isOpen} onClose={props.isOpenSetter} className={props.className}>
      <DialogTitle className="inline-flex items-center">
        <Button plain className="float-start mr-2" onClick={() => props.isOpenSetter(false)}>
          <XMarkIcon />
        </Button>
        <span className="inline-block align-middle">ESP32 MCU</span>
      </DialogTitle>
      <DialogBody>
        <Field>
          <img src={pic}></img>
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
