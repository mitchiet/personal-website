import { Button } from '../tailwind-catalyst/button'
import { Dialog, DialogBody, DialogTitle } from '../tailwind-catalyst/dialog'
import { Field } from '../tailwind-catalyst/fieldset'
import { XMarkIcon } from '@heroicons/react/24/solid'
import PropTypes from 'prop-types';

function TailwindCSSDialog(props:any) {
  return (
    <Dialog open={props.isOpen} onClose={() => {}} className={props.className}>
      <DialogTitle className="inline-flex items-center border-b-2 border-zinc-950/10 pb-4 dark:border-white/10 w-full">
        <Button plain className="float-start mr-2 cursor-pointer" onClick={() => props.isOpenSetter(false)}>
          <XMarkIcon />
        </Button>
        <span className="inline-block align-middle">Tailwind CSS</span>
      </DialogTitle>
      <DialogBody className="overflow-y-auto max-h-130 pr-5 scrollbar">
        <Field>
          <p className="mt-4 animate-bounce">
            The first time I used Tailwind CSS was when I designed this website! I kinda love it. 😁
          </p>
        </Field>
        <br/>
      </DialogBody>
    </Dialog>
  )
}

TailwindCSSDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isOpenSetter: PropTypes.func.isRequired,
  className: PropTypes.string
}

export default TailwindCSSDialog
