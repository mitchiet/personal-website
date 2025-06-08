import { Button } from '../tailwind-catalyst/button'
import { Dialog, DialogActions, DialogBody, DialogDescription, DialogTitle } from '../tailwind-catalyst/dialog'
import { Field } from '../tailwind-catalyst/fieldset'
import PropTypes from 'prop-types';

import pic from '../../assets/images/esp32.jpg';

function ESP32Dialog(props:any) {
  return (
    <>
      <Dialog open={props.isOpen} onClose={props.isOpenSetter}>
        <DialogTitle>ESP32 MCU</DialogTitle>
        <DialogBody>
          <Field>
            <img src={pic}></img>
          </Field>
        </DialogBody>
        <DialogActions>
          <Button plain onClick={() => props.isOpenSetter(false)}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

ESP32Dialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isOpenSetter: PropTypes.func.isRequired
}

export default ESP32Dialog
