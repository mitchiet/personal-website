import { Button } from '../tailwind-catalyst/button'
import { Dialog, DialogBody, DialogTitle } from '../tailwind-catalyst/dialog'
import { Field } from '../tailwind-catalyst/fieldset'
import { XMarkIcon } from '@heroicons/react/24/solid'
import PropTypes from 'prop-types';

import pcbPic from '../../assets/images/pcb.png';
import pcb3DPic from '../../assets/images/pcb_3d.jpg';

function AltiumDialog(props:any) {
  return (
    <Dialog open={props.isOpen} onClose={() => {}} className={props.className}>
      <DialogTitle className="inline-flex items-center border-b-2 border-zinc-950/10 pb-4 dark:border-white/10 w-full">
        <Button plain className="float-start mr-2 cursor-pointer" onClick={() => props.isOpenSetter(false)}>
          <XMarkIcon />
        </Button>
        <span className="inline-block align-middle">Altium</span>
      </DialogTitle>
      <DialogBody className="overflow-y-auto max-h-130 pr-5 scrollbar">
        <Field>
          <p>
            I used Altium to design the PCB for my senior design project. See
            the layout and an image of the 3D render below.
          </p>
        </Field>
        <br/>
        <Field>
          <img className="rounded-xl border-2" src={pcbPic}></img>
        </Field>
        <br/>
        <Field>
          <p>
            You can see more information about my senior design project <button
              className="link" 
              onClick={() => {
                props.isOpenSetter(false);
                props.isESP32DialogOpenSetter(true);
              }
            }
            >here</button>.
          </p>
        </Field>
         <br/>
        <Field>
          <img className="rounded-xl border-2" src={pcb3DPic}></img>
        </Field>
      </DialogBody>
    </Dialog>
  )
}

AltiumDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isOpenSetter: PropTypes.func.isRequired,
  isESP32DialogOpenSetter: PropTypes.func.isRequired,
  className: PropTypes.string
}

export default AltiumDialog
