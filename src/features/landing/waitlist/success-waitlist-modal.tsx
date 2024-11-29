import * as React from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
} from '@shared/components/ui/alert'

interface SuccessWaitlistModalProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

export function SuccessWaitlistModal({
  isOpen,
  onOpenChange,
}: SuccessWaitlistModalProps): React.ReactElement {
  return (
    <AlertDialog open={isOpen} onOpenChange={onOpenChange}>
      <AlertDialogContent className="!max-w-sm">
        <AlertDialogBody className="px-8 py-16">
          <div className="flex justify-center items-center h-16 w-16 border border-border rounded-full mx-auto">
            <i className="fi fi fi-sr-badge-check text-green-600 dark:text-green-500 text-3xl" />
          </div>
          <AlertDialogTitle className="text-center !mt-6">
            Yo, you’re awesome
            <br />
            We’re still in progress
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center !mt-4 pb-10">
            Thanks, to join the awesome waiting list. We will notify you when
            everything is ready, stay toon and see what’s changes.
          </AlertDialogDescription>
        </AlertDialogBody>

        <AlertDialogFooter>
          <AlertDialogAction>OK, I’ll Wait</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
