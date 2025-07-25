import { Button } from '../tailwind-catalyst/button'
import { Dialog, DialogBody, DialogTitle } from '../tailwind-catalyst/dialog'
import { Field } from '../tailwind-catalyst/fieldset'
import { XMarkIcon } from '@heroicons/react/24/solid'
import PropTypes from 'prop-types';

import chessPic from '../../assets/images/chess.png';

function JavaDialog(props:any) {
  return (
    <Dialog open={props.isOpen} onClose={() => {}} className={props.className}>
      <DialogTitle className="inline-flex items-center border-b-2 border-zinc-950/10 pb-4 dark:border-white/10 w-full">
        <Button plain className="float-start mr-2 cursor-pointer" onClick={() => props.isOpenSetter(false)}>
          <XMarkIcon />
        </Button>
        <span className="inline-block align-middle">Java</span>
      </DialogTitle>
      <DialogBody className="overflow-y-auto max-h-130 pr-5 scrollbar">
        <Field>
          <p>
            I made this virtual chess game using Java my sophomore year of high school (before I knew what git was).
            For many years, the only evidence I had of this project was a jar file I had placed in
            Google Drive 😳. I decompiled that file years later and saved
            part of my coder origin story to GitHub.
          </p>
        </Field>
        <br/>
        <Field>
          <div className="w-[90%] mx-auto aspect-[9/7.8]">
            <img className="rounded-xl border-2"
                src={chessPic}
                alt="Virtual Chess Pic"
                onLoad={(e: React.SyntheticEvent<HTMLImageElement>) => e.currentTarget.classList.add('loaded')}
            />
          </div>
        </Field>
      </DialogBody>
    </Dialog>
  )
}

JavaDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isOpenSetter: PropTypes.func.isRequired,
  className: PropTypes.string
}

export default JavaDialog
