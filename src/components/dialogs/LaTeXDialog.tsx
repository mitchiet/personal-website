import { Button } from '../tailwind-catalyst/button'
import { Dialog, DialogBody, DialogTitle } from '../tailwind-catalyst/dialog'
import { Field } from '../tailwind-catalyst/fieldset'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import { XMarkIcon } from '@heroicons/react/24/solid'
import PropTypes from 'prop-types';

import PDFViewer from '../PDFViewer';

function LaTeXDialog(props:any) {

  const openResume = () => {
    window.open("src/assets/mitchell_taylor_resume.pdf", '_blank'); // Open the URL in a new tab
  }

  return (
    <Dialog open={props.isOpen} onClose={() => {}} className={props.className}>
      <DialogTitle className="inline-flex items-center border-b-2 border-zinc-950/10 pb-4 dark:border-white/10 w-full">
        <Button plain className="float-start mr-2 cursor-pointer" onClick={() => props.isOpenSetter(false)}>
          <XMarkIcon />
        </Button>
        <span className="inline-block align-middle">LaTeX</span>
      </DialogTitle>
      <DialogBody className="overflow-y-auto max-h-130 pr-5 scrollbar">
        <Field>
          <p>
            The résumé below was designed using LaTeX.
          </p>
        </Field>
        <br/>
        <Field>
          <div className="flex flex-col w-[90%] m-auto">
            <PDFViewer file="src/assets/mitchell_taylor_resume.pdf" />
          </div>
        </Field>
        <br/>
        <Field className="flex items-center">
          <Button outline className="mx-auto cursor-pointer" onClick={openResume}>
            Open
            <ArrowTopRightOnSquareIcon />
          </Button>
        </Field>
        <br/>
      </DialogBody>
    </Dialog>
  )
}

LaTeXDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isOpenSetter: PropTypes.func.isRequired,
  className: PropTypes.string
}

export default LaTeXDialog
